import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, useWindowDimensions } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { CommonButton } from '../../common/commonIndex';
import getLoginScreenStyles from './LoginStyles';
import { useUploadProfileImage } from '../../viewmodels/authViewModels';
import { SafeAreaView } from 'react-native-safe-area-context';



const SetProfileImageScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { handleUpload, uploading } = useUploadProfileImage();
  const { width, height } = useWindowDimensions();
  const loginStyles = getLoginScreenStyles(width, height);

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
    <SafeAreaView style={loginStyles.safeArea}>
      <View style={loginStyles.backgroundStyle}>
        <View style={{padding: safePadding}}>
        <TouchableOpacity onPress={() => navigation.pop()} style={loginStyles.touchBackArrow}>
          <Image style={loginStyles.backArrow} source={require('../../assets/icons/backArrowWrapper.png')} />
        </TouchableOpacity>
        <Text style={loginStyles.loginText}>회원가입</Text>
        <View style={loginStyles.setProfileImageWrapper}>
          <TouchableOpacity onPress={handleImagePick}>
            {selectedImage ? (
              <>
                <Image style={loginStyles.setProfileImage} source={{ uri: selectedImage }} resizeMode="cover" />
                <View style={loginStyles.pencilIconWrapper}>
                  <Image style={loginStyles.pencilIcon} source={require('../../assets/icons/pencil.png')} />
                </View>
              </>
            ) : (
              <Image style={loginStyles.plusIcon} source={require('../../assets/icons/plusIcon.png')} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={loginStyles.setProfileImageDescription}>프로필 이미지를 설정하세요!</Text>
        <CommonButton title="다음" onPress={onNext} disabled={uploading} style={loginStyles.commonButton} />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default SetProfileImageScreen;
