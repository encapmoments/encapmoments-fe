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
  const [email, setEmail] = useState(useMock ? "a@a.com" : "");
  const [password, setPassword] = useState(useMock ? "1234" : "");
  const { handleLogin, loading } = useLogin();

  const { width, height } = useWindowDimensions();
  const loginStyles = getLoginScreenStyles(width, height);

  const onLogin = () => {
    if (useMock) {
      // Mock 환경에서는 handleLogin을 사용하여 스토어에 데이터 저장
      handleLogin(
        email,
        password,
        () => {
          navigation.replace("Mission");
        },
        msg => Alert.alert("로그인 실패", msg),
      );
    } else {
      if (!email.trim() || !password.trim()) {
        Alert.alert("입력 오류", "이메일과 비밀번호를 입력해주세요.");
        return;
      }

      handleLogin(
        email,
        password,
        () => navigation.replace("Mission"),
        msg => Alert.alert("로그인 실패", msg),
      );
    }
  };

  return (
    <SafeAreaView style={loginStyles.safeArea}>
      <View style={loginStyles.backgroundStyle}>
        <View style={loginStyles.safePadding}>
          <Text style={loginStyles.loginText}>로그인</Text>

          {useMock && (
            <View style={{ padding: 10, backgroundColor: '#f0f8ff', marginBottom: 20, borderRadius: 8 }}>
              <Text style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
                🎯 Mock 모드: 테스트 계정이 자동 입력됩니다
              </Text>
            </View>
          )}

          <InputText
            title="이메일"
            value={email}
            onChangeText={setEmail}
            placeholder={useMock ? "Mock: a@a.com" : "이메일을 입력하세요"}
          />
          <InputText
            title="비밀번호"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder={useMock ? "Mock: 1234" : "비밀번호를 입력하세요"}
          />

          <Text
            style={loginStyles.forgotPW}
            onPress={() => navigation.navigate("FindPW")}>
            Forgot password?
          </Text>

          <CommonButton
            title={useMock ? "Mock 로그인" : "로그인"}
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

          {useMock && (
            <View style={{ marginTop: 20, padding: 10, backgroundColor: '#fff3cd', borderRadius: 8 }}>
              <Text style={{ fontSize: 12, color: '#856404', textAlign: 'center' }}>
                Mock 사용자: 이강룡 ({email})
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
