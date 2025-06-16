import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { CommonButton } from '../../common/commonIndex';
import LoginScreenStyles from './LoginStyles';
import InputText from '../../common/InputText/InputText';
import { useLogin } from '../../viewmodels/authViewModels';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, loading } = useLogin();

  const backgroundStyle = {
    backgroundColor: '#F8F3D9',
    flex: 1,
  };

  const safePadding = '5%';

  const onLogin = () => {
    handleLogin(
      email,
      password,
      () => navigation.replace('Mission'),
      (msg) => Alert.alert('로그인 실패', msg)
    );
  };

  return (
    <SafeAreaView style={LoginScreenStyles.safeArea}>
      <View style={backgroundStyle}>
        <View style={{ padding: safePadding }}>
          <Text style={LoginScreenStyles.loginText}>로그인</Text>

          <InputText title="이메일" value={email} onChangeText={setEmail} />
          <InputText
            title="비밀번호"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text
            style={LoginScreenStyles.forgotPW}
            onPress={() => navigation.navigate('FindPW')}
          >
            Forgot password?
          </Text>

          <CommonButton
            title="로그인"
            onPress={onLogin}
            disabled={loading}
            style={LoginScreenStyles.commonButton}
          />

          <Text style={LoginScreenStyles.donthaveAccount}>
            계정이 없으신가요?{'    '}
            <Text
              style={LoginScreenStyles.signUp}
              onPress={() => navigation.navigate('SetProfileImage')}
            >
              Sign Up
            </Text>
          </Text>

          <Text style={LoginScreenStyles.orConnect}>Or Connect</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
