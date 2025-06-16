import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { CommonButton } from '../../common/commonIndex';
import LoginScreenStyles from './LoginStyles';
import { useUploadProfileImage } from '../../viewmodels/authViewModels';
import { SafeAreaView } from 'react-native-safe-area-context';

const SetProfileImageScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { handleUpload, uploading } = useUploadProfileImage();

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (!response.didCancel && !response.errorCode) {
        const uri = response.assets?.[0]?.uri;
        if (uri) {setSelectedImage(uri);}
      }
    });
  };

  const onNext = () => {
    if (!selectedImage) {return Alert.alert('이미지를 선택해주세요');}
    handleUpload(
      selectedImage,
      () => navigation.navigate('SignUp'),
      (msg) => Alert.alert(msg)
    );
  };
const safePadding = '5%';
  return (
    <SafeAreaView style={LoginScreenStyles.safeArea}>
      <View style={LoginScreenStyles.backgroundStyle}>
        <View style={{padding: safePadding}}>
        <TouchableOpacity onPress={() => navigation.pop()} style={LoginScreenStyles.touchBackArrow}>
          <Image style={LoginScreenStyles.backArrow} source={require('../../assets/icons/backArrowWrapper.png')} />
        </TouchableOpacity>
        <Text style={LoginScreenStyles.loginText}>회원가입</Text>
        <View style={LoginScreenStyles.setProfileImageWrapper}>
          <TouchableOpacity onPress={handleImagePick}>
            {selectedImage ? (
              <>
                <Image style={LoginScreenStyles.setProfileImage} source={{ uri: selectedImage }} resizeMode="cover" />
                <View style={LoginScreenStyles.pencilIconWrapper}>
                  <Image style={LoginScreenStyles.pencilIcon} source={require('../../assets/icons/pencil.png')} />
                </View>
              </>
            ) : (
              <Image style={LoginScreenStyles.plusIcon} source={require('../../assets/icons/plusIcon.png')} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={LoginScreenStyles.setProfileImageDescription}>프로필 이미지를 설정하세요!</Text>
        <CommonButton title="다음" onPress={onNext} disabled={uploading} style={LoginScreenStyles.commonButton} />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default SetProfileImageScreen;
