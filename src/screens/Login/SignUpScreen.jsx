import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { CommonButton } from '../../common/commonIndex';
import LoginScreenStyles from './LoginStyles';
import InputText from '../../common/InputText/InputText';
import { useRegister } from '../../viewmodels/authViewModels';

const SignUpScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleRegister, loading } = useRegister();

  const onRegister = () => {
    handleRegister(
      nickname,
      email,
      password,
      () => {
        console.log('회원가입 성공 - 바로 이동 시도');
        navigation.replace('Login'); // Alert 없이 바로 이동
      },
      (msg) => {
        Alert.alert('회원가입 실패', msg);
      }
    );
  };

  const safePadding = '5%';

  return (
    <View style={LoginScreenStyles.backgroundStyle}>
        <View style={{padding: safePadding}}>
      <TouchableOpacity onPress={() => navigation.pop()} style={LoginScreenStyles.touchBackArrow}>
        <Image style={LoginScreenStyles.backArrow} source={require('../../assets/icons/backArrowWrapper.png')} />
      </TouchableOpacity>
      <Text style={LoginScreenStyles.loginText}>회원가입</Text>
      <InputText title="닉네임" value={nickname} onChangeText={setNickname} />
      <InputText title="이메일" value={email} onChangeText={setEmail} />
      <InputText title="비밀번호" value={password} onChangeText={setPassword} secureTextEntry />
      <CommonButton title="회원가입하기" onPress={onRegister} disabled={loading} style={LoginScreenStyles.commonButton} />
      <Text style={LoginScreenStyles.donthaveAccount}>계정이 이미 있으신가요?
        <Text style={LoginScreenStyles.signUp} onPress={() => navigation.navigate('Login')}> Sign In</Text>
      </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
