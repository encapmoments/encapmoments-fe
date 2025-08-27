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
import GenderButton from "./GenderButton";

const MemberUpdate = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const updateStyles = getMemberUpdateStyles(width, height);

  const { member, isNewMember, onUpdate, onCancel } = route.params || {};

  const [memberName, setMemberName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [memberAge, setMemberAge] = useState("");
  useEffect(() => {
    if (isNewMember) {
      setMemberName("새 구성원");
      setSelectedImage(null);
      setSelectedGender("");
      setMemberAge("");
    } else if (member) {
      setMemberName(member.name || "이름");
      setSelectedImage(member.image || null);
      setSelectedGender(member.gender || "");
      setMemberAge(member.age ? member.age.toString() : "");
    } else {
      setMemberName("이름");
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

  const handleComplete = () => {
    if (memberName.trim() === "") {
      Alert.alert("알림", "구성원 이름을 입력해주세요.");
      return;
    }

    if (!selectedGender) {
      Alert.alert("알림", "성별을 선택해주세요.");
      return;
    }

    const updatedMember = {
      ...member,
      name: memberName,
      image: selectedImage,
      gender: selectedGender,
      age: memberAge,
    };

    if (onUpdate) {
      onUpdate(updatedMember);
    }

    navigation.navigate("ProfileAccount");
  };

  const handleBack = () => {
    if (isNewMember && onCancel) {
      onCancel();
    }
    navigation.pop();
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
            <Image
              style={updateStyles.updateMemberImage}
              source={
                selectedImage
                  ? { uri: selectedImage }
                  : require("../../assets/AppBarImages/person.png")
              }
            />
          </TouchableOpacity>
          <View style={updateStyles.memberInfo}>
            <View style={updateStyles.memberInfoItem}>
              <Text style={updateStyles.memberText}>이름</Text>
              <InputText
                title=""
                value={memberName}
                onChangeText={setMemberName}
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
              />
            </View>
          </View>
          <CommonButton
            style={updateStyles.commonButton}
            title="완료"
            onPress={handleComplete}
          />
        </View>
      </View>
    </>
  );
};

export default MemberUpdate;
