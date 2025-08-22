import axios from "axios";
import useMock from "./useMock";
import { useAuthStore, useUserStore } from "../store/store";
import baseUrl from "./baseUrl";

// 로그인
export const login = async (email, password) => {
  if (useMock) {
    const user = useUserStore.getState().users;

    useAuthStore.getState().setAccessToken("mock-access-token");
    useUserStore.getState().setUser(user);

    return {
      success: true,
      user: {
        email: user.email,
        nickname: user.nickname,
        profile_image: user.profile_image,
      },
      accessToken: "mock-access-token",
      refreshToken: "mock-refresh-token",
    };
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
    // localStorage.removeItem('refreshToken'); // 우리는 DB에서 refresh token 관리

    return res.data;
  } catch (err) {
    console.error("Logout error:", err);
    throw err;
  }
};

// 회원가입
export const register = async (email, password, nickname, profile_image) => {
  if (useMock) {
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
// export const uploadImage = async (imageUri) => {

//   const uriParts = imageUri.split('.');
//   const fileType = uriParts[uriParts.length - 1].toLowerCase();

//   const supportedTypes = ['jpg', 'jpeg', 'png'];
//   const validType = supportedTypes.includes(fileType) ? `image/${fileType}` : 'image/jpeg';

//   const formData = new FormData();
//   formData.append('profile_image', {
//     uri: imageUri,
//     type: validType,
//     name: `profile.${fileType}`,
//   });

//   if (useMock) {return { success: true };}

//   const res = await axios.post(`${baseUrl}/auth/uploadImage`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//     withCredentials: true,
//   });

//   return res.data;
// };
export const uploadImage = async imageUri => {
  if (useMock) {
    return { success: true };
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
