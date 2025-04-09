import React from 'react';
import { View, Text } from 'react-native';

import { CommonButton } from '../../common/commonIndex';
import LoginScreenStyles from './LoginStyles';
import InputText from '../../common/InputText/InputText';

const LoginScreen = ({ navigation }) => {
  const backgroundStyle = {
    backgroundColor: '#F8F3D9',
    flex: 1,
  };

  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <View style={{padding: safePadding}}>
        <Text style={LoginScreenStyles.loginText}>로그인</Text>
        <InputText title="이메일" />
        <InputText title="비밀번호" secureTextEntry={true}/>
        <Text style={LoginScreenStyles.forgotPW} onPress={() => navigation.navigate('FindPW')}>Forgot password?</Text>
        <CommonButton
          title="로그인"
          onPress={() => navigation.navigate('Mission')}
          style={LoginScreenStyles.commonButton}
        />
        <Text style={LoginScreenStyles.donthaveAccount}>계정이 없으신가요?{'    '}
          <Text style={LoginScreenStyles.signUp} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </Text>
        <Text style={LoginScreenStyles.orConnect}>Or Connect</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
