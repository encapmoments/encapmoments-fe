import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { CommonButton } from "../../common/commonIndex";
import getLoginScreenStyles from "./LoginStyles";
import InputText from "../../common/InputText/InputText";
import { useLogin } from "../../viewmodels/authViewModels";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import useMock from "../../models/useMock";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, loading } = useLogin();

  const { width, height } = useWindowDimensions();
  const loginStyles = getLoginScreenStyles(width, height);

  const onLogin = () => {
    if (useMock) {
      navigation.replace("Mission");
      return;
    }
    handleLogin(
      email,
      password,
      () => navigation.replace("Mission"),
      msg => Alert.alert("로그인 실패", msg),
    );
  };

  return (
    <SafeAreaView style={loginStyles.safeArea}>
      <View style={loginStyles.backgroundStyle}>
        <View style={loginStyles.safePadding}>
          <Text style={loginStyles.loginText}>로그인</Text>

          <InputText title="이메일" value={email} onChangeText={setEmail} />
          <InputText
            title="비밀번호"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text
            style={loginStyles.forgotPW}
            onPress={() => navigation.navigate("FindPW")}>
            Forgot password?
          </Text>

          <CommonButton
            title="로그인"
            onPress={onLogin}
            disabled={loading}
            style={loginStyles.commonButton}
          />

          <Text style={loginStyles.donthaveAccount}>
            계정이 없으신가요?{"    "}
            <Text
              style={loginStyles.signUp}
              onPress={() => navigation.navigate("SetProfileImage")}>
              Sign Up
            </Text>
          </Text>

          <Text style={loginStyles.orConnect}>Or Connect</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
