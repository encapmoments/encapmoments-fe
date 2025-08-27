import { useState, useEffect } from "react";
import {
  useWindowDimensions,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import getMemberUpdateStyles from "./MemberUpdateStyles";
import { CommonButton, InputText } from "../../common/commonIndex";
import { createMembers, updateMembers } from "../../models/profile";
import GenderButton from "./GenderButton";

const MemberUpdate = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const updateStyles = getMemberUpdateStyles(width, height);

  const { member, isNewMember, accessToken } = route.params || {};

  const [memberName, setMemberName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [memberAge, setMemberAge] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isNewMember) {
      setMemberName("새 구성원");
      setSelectedImage(null);
      setSelectedGender("");
      setMemberAge("");
    } else if (member) {
      setMemberName(member.name || "이름");
      // 이미지 URI가 숫자인 경우 문자열로 변환하고, 유효하지 않으면 null 처리
      const imageUri = member.image;
      if (imageUri && typeof imageUri === 'string' && imageUri.trim() !== '') {
        setSelectedImage(imageUri);
      } else if (imageUri && typeof imageUri === 'number') {
        setSelectedImage(imageUri.toString());
      } else {
        setSelectedImage(null);
      }

      setSelectedGender(member.gender || "");
      setMemberAge(member.age ? member.age.toString() : "");
    } else {
      setMemberName("이름");
      setSelectedImage(null);
      setSelectedGender("");
      setMemberAge("");
    }
  }, [member, isNewMember]);

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: "photo", quality: 1 }, response => {
      if (!response.didCancel && !response.errorCode) {
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setSelectedImage(uri);
        }
      }
    });
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleComplete = async () => {
    if (memberName.trim() === "") {
      Alert.alert("알림", "구성원 이름을 입력해주세요.");
      return;
    }

    if (!selectedGender) {
      Alert.alert("알림", "성별을 선택해주세요.");
      return;
    }

    setLoading(true);

    try {
      const memberData = {
        member_name: memberName.trim(),
        member_image: selectedImage,
        member_gender: selectedGender,
        member_age: memberAge ? parseInt(memberAge) : null,
      };

      let result;
      let updatedMember;

      if (isNewMember) {
        // 구성원 생성
        result = await createMembers(accessToken, memberData);
        updatedMember = {
          ...member,
          name: memberData.member_name,
          image: result.member_image_url || selectedImage,
          gender: memberData.member_gender,
          age: memberData.member_age,
          member_id: result.member_id,
          isNewMember: false,
        };
      } else {
        // 구성원 수정
        const memberId = member.member_id || member.id;
        result = await updateMembers(memberId, accessToken, memberData);
        updatedMember = {
          ...member,
          name: memberData.member_name,
          image: result.member_image_url || selectedImage,
          gender: memberData.member_gender,
          age: memberData.member_age,
        };
      }

      Alert.alert(
        "성공!",
        isNewMember ? "구성원이 추가되었습니다." : "구성원 정보가 수정되었습니다.",
        [
          {
            text: "확인",
            onPress: () => {
              // 결과를 navigation params에 저장하고 ProfileAccount로 돌아가기
              navigation.navigate("ProfileAccount", {
                memberResult: {
                  type: 'update',
                  member: updatedMember,
                },
              });
            },
          },
        ]
      );

    } catch (error) {
      console.error("구성원 처리 실패:", error);
      Alert.alert(
        "오류",
        isNewMember ? "구성원 추가에 실패했습니다." : "구성원 수정에 실패했습니다."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (isNewMember) {
      Alert.alert(
        "취소",
        "구성원 추가를 취소하시겠습니까?",
        [
          {
            text: "계속 작성",
            style: "cancel"
          },
          {
            text: "취소",
            onPress: () => {
              navigation.navigate("ProfileAccount", {
                memberResult: {
                  type: 'cancel',
                  member: member,
                },
              });
            },
          },
        ]
      );
    } else {
      navigation.goBack();
    }
  };

  return (
    <>
      <View style={updateStyles.backgroundStyle}>
        <View style={updateStyles.topStyle}>
          <TouchableOpacity
            onPress={handleBack}
            style={updateStyles.touchBackArrow}>
            <Image
              style={updateStyles.backArrow}
              source={require("../../assets/icons/backArrowWrapper.png")}
            />
          </TouchableOpacity>
          <Text style={updateStyles.mainText}>
            {isNewMember ? "구성원 추가" : "구성원 수정"}
          </Text>
        </View>
        <View style={updateStyles.updateContainer}>
          <TouchableOpacity
            onPress={handleImagePick}
            style={updateStyles.updateMemberImageWrapper}>
            {selectedImage ? (
              <Image
                style={updateStyles.updateMemberImage}
                source={{ uri: selectedImage }}
                onError={(error) => {
                  console.log('이미지 로드 오류:', error);
                  setSelectedImage(null);
                }}
              />
            ) : (
              <Image
                style={updateStyles.updateMemberImage}
                source={require("../../assets/AppBarImages/person.png")}
              />
            )}
          </TouchableOpacity>
          <View style={updateStyles.memberInfo}>
            <View style={updateStyles.memberInfoItem}>
              <Text style={updateStyles.memberText}>이름</Text>
              <InputText
                title=""
                value={memberName}
                onChangeText={setMemberName}
                maxLength={10}
              />
            </View>
            <View style={updateStyles.memberInfoItem}>
              <Text style={updateStyles.memberText}>성별</Text>
              <View style={updateStyles.memberGender}>
                <GenderButton
                  gender="남자"
                  selectedGender={selectedGender}
                  onGenderSelect={handleGenderSelect}
                />
                <GenderButton
                  gender="여자"
                  selectedGender={selectedGender}
                  onGenderSelect={handleGenderSelect}
                />
              </View>
            </View>
            <View style={updateStyles.memberInfoItem}>
              <Text style={updateStyles.memberText}>나이</Text>
              <InputText
                title=""
                value={memberAge}
                onChangeText={setMemberAge}
                keyboardType="numeric"
                placeholder="나이를 입력하세요"
                maxLength={3}
              />
            </View>
          </View>
          <CommonButton
            style={updateStyles.commonButton}
            title={loading ? "처리중..." : "완료"}
            onPress={handleComplete}
            disabled={loading}
          />
        </View>
      </View>
    </>
  );
};

export default MemberUpdate;
