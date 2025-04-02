import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { CommonButton } from '../../common/commonIndex';
import LoginScreenStyles from './LoginStyles';
import InputText from '../../common/InputText/InputText';

const SignUpScreen = ({ navigation }) => {
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
        <Text style={LoginScreenStyles.loginText}>회원가입</Text>
        <InputText title="닉네임" style={LoginScreenStyles.inputText}/>
        <InputText title="이메일" style={LoginScreenStyles.inputText}/>
        <InputText title="비밀번호" style={LoginScreenStyles.inputText} secureTextEntry={true}/>
        <CommonButton
          title="완료"
          onPress={() => navigation.navigate('SetProfileImage')}
          style={LoginScreenStyles.commonButton}
        />
        <Text style={LoginScreenStyles.donthaveAccount}>계정이 이미 있으신가요?{'    '}
          <Text style={LoginScreenStyles.signUp} onPress={() => navigation.navigate('Login')}>Sign In</Text>
        </Text>
        <Text style={LoginScreenStyles.donthaveAccount}>Or Connect</Text>

      </View>
    </View>
  );
};

export default SignUpScreen;
