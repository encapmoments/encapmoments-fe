import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { CommonButton } from '../../common/commonIndex';
import LoginScreenStyles from './LoginStyles';

const SetProfileImageScreen = ({ navigation }) => {
  const backgroundStyle = {
    backgroundColor: '#F8F3D9',
    flex: 1,
  };

  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <View style={{padding: safePadding}}>
        <TouchableOpacity onPress={() => navigation.pop()}  style={LoginScreenStyles.touchBackArrow}>
          <Image
              style={LoginScreenStyles.backArrow}
              source={require('../../assets/icons/backArrowWrapper.png')}
          />
        </TouchableOpacity>
        <Text style={LoginScreenStyles.loginText}>회원가입</Text>
        <View style={LoginScreenStyles.setProfileImageWrapper}>
                <Image style={LoginScreenStyles.setProfileImage} source={require('../../assets/AppBarImages/person.png')} />
            </View>
        <Text style={LoginScreenStyles.donthaveAccount}>프로필 이미지를 설정하세요!</Text>
        <CommonButton
          title="회원가입하기"
          onPress={() => navigation.navigate('Mission')}
          style={LoginScreenStyles.commonButton}
        />
      </View>
    </View>
  );
};

export default SetProfileImageScreen;
