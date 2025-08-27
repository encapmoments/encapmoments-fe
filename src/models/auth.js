import axios from "axios";
import useMock from "./useMock";
import { useAuthStore, useUserStore, useProfileStore } from "../store/store";
import baseUrl from "./baseUrl";

// 로그인
export const login = async (email, password) => {
  if (useMock) {
    // Mock 사용자 데이터를 profileStore에서 가져오기
    const mockUser = useProfileStore.getState().profileUser;
    if (email === mockUser.email && password === mockUser.password) {
      useAuthStore.getState().setAccessToken("mock-access-token");

      useUserStore.getState().setUser({
        email: mockUser.email,
        nickname: mockUser.nickname,
        profile_image: mockUser.profile_image,
        points: mockUser.points,
      });

      return {
        success: true,
        user: {
          email: mockUser.email,
          nickname: mockUser.nickname,
          profile_image: mockUser.profile_image,
          points: mockUser.points,
        },
        accessToken: "mock-access-token",
        refreshToken: "mock-refresh-token",
      };
    } else {
      throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  }

  const res = await axios.post(
    `${baseUrl}/auth/login`,
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    },
  );
  return res.data;
};

// 로그아웃
export const logout = async () => {
  if (useMock) {
    useAuthStore.getState().resetAccessToken();
    useUserStore.getState().resetUser();
    return { success: true };
  }

  try {
    const accessToken = useAuthStore.getState().accessToken;

    const res = await axios.post(
      `${baseUrl}/auth/logout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      },
    );

    useAuthStore.getState().resetAccessToken();
    useUserStore.getState().resetUser();

    return res.data;
  } catch (err) {
    console.error("Logout error:", err);
    throw err;
  }
};

// 회원가입
export const register = async (email, password, nickname, profile_image) => {
  if (useMock) {
    // Mock 환경에서는 단순히 성공 응답 반환
    return { success: true, message: "Mock 회원가입 성공" };
  }
  const res = await axios.post(
    `${baseUrl}/auth/register`,
    {
      email,
      password,
      nickname,
      profile_image,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    },
  );
  return res.data;
};

// 프로필 이미지 업로드
export const uploadImage = async imageUri => {
  if (useMock) {
    return {
      success: true,
      profile_image_url: imageUri,
    };
  }

  const res = await axios.post(
    `${baseUrl}/auth/uploadImage`,
    { profile_image: imageUri }, // ✅ JSON
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    },
  );

  return res.data;
};
