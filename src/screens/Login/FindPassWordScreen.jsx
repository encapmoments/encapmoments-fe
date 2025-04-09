import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { CommonButton } from '../../common/commonIndex';
import LoginScreenStyles from './LoginStyles';
import InputText from '../../common/InputText/InputText';

const FindPassWordScreen = ({ navigation }) => {
  const backgroundStyle = {
    backgroundColor: '#F8F3D9',
    flex: 1,
  };

  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <View style={{padding: safePadding}}>
        <TouchableOpacity onPress={() => navigation.pop()} style={LoginScreenStyles.touchBackArrow}>
          <Image
              style={LoginScreenStyles.backArrow}
              source={require('../../assets/icons/backArrowWrapper.png')}
          />
        </TouchableOpacity>
        <Text style={LoginScreenStyles.loginText}>비밀번호 재설정</Text>
        <Text style={LoginScreenStyles.findPassWordDescription}>이메일에 임시 비밀번호를{'\n'}보내드릴게요!</Text>

        <InputText title="이메일" style={LoginScreenStyles.findPadding} />
        <CommonButton
          title="로그인"
          onPress={() => navigation.navigate('Login')}
          style={LoginScreenStyles.commonButton}
        />

      </View>
    </View>
  );
};

export default FindPassWordScreen;
