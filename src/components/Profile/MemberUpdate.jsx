import { useState, useEffect } from "react";
import {
  useWindowDimensions,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import getMemberUpdateStyles from "./MemberUpdateStyles";
import {  CommonButton } from "../../common/commonIndex";

const MemberUpdate = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const updateStyles = getMemberUpdateStyles(width, height);

  // route params
  const { member, isNewMember, onUpdate, onCancel } = route.params || {};

  const [memberName, setMemberName] = useState("");
  const [tempName, setTempName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // 컴포넌트 마운트 시 기본값 설정
  useEffect(() => {
    if (isNewMember) {
      // 새 구성원인 경우 기본값 설정
      setMemberName("새 구성원");
      setTempName("새 구성원");
      setSelectedImage(null); // 기본 이미지 사용
    } else if (member) {
      setMemberName(member.name || "이름");
      setTempName(member.name || "이름");
      setSelectedImage(member.image || null);
    } else {
      // 기본값 (기존 코드 호환성)
      setMemberName("이름");
      setTempName("이름");
    }
  }, [member, isNewMember]);

  const handleNamePress = () => {
    setTempName(memberName);
    setIsEditingName(true);
  };

  const saveNameEdit = () => {
    if (tempName.trim()) {
      setMemberName(tempName.trim());
      setIsEditingName(false);
    } else {
      Alert.alert("이름을 입력해주세요");
    }
  };

  const cancelNameEdit = () => {
    setTempName(memberName);
    setIsEditingName(false);
  };

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

  const handleComplete = () => {
    if (memberName.trim() === "") {
      Alert.alert("알림", "구성원 이름을 입력해주세요.");
      return;
    }

    const updatedMember = {
      ...member,
      name: memberName,
      image: selectedImage,
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
            {isNewMember ? "구성원 추가" : "구성원 설정"}
          </Text>
        </View>
        <View style={updateStyles.updateContainer}>
          <TouchableOpacity onPress={handleNamePress}>
            <Text style={updateStyles.updateMember}>{memberName}</Text>
          </TouchableOpacity>
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
          <CommonButton
            style={updateStyles.commonButton}
            title="완료"
            onPress={handleComplete}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isEditingName}
          onRequestClose={cancelNameEdit}>
          <View style={updateStyles.modalOverlay}>
            <View style={updateStyles.modalContainer}>
              <Text style={updateStyles.modalTitle}>구성원 이름 입력</Text>
              <TextInput
                style={updateStyles.modalInput}
                value={tempName}
                onChangeText={setTempName}
                placeholder="이름을 입력하세요"
                autoFocus={true}
                maxLength={10}
              />
              <View style={updateStyles.modalButtonContainer}>
                <TouchableOpacity
                  style={updateStyles.modalCancelButton}
                  onPress={cancelNameEdit}>
                  <Text style={updateStyles.modalCancelText}>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={updateStyles.modalSaveButton}
                  onPress={saveNameEdit}>
                  <Text style={updateStyles.modalSaveText}>저장</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default MemberUpdate;
