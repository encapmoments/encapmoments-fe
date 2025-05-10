import axios from 'axios';
import useMock from './useMock';
import { useUserStore } from '../store/store';

// 로그인
export const loginAPI = async (email, password) => {
  if (useMock) {
    console.log('MOCK LOGIN');

    const user = useUserStore.getState().users;

    // const user = mockUsers.find((u) => u.email === email && u.password === password);
    // if (!user) {
    //   return {
    //     success: false,
    //     message: '이메일 또는 비밀번호가 올바르지 않습니다.',
    //   };
    // }

    return {
      success: true,
      user: {
        email: user.email,
        nickname: user.nickname,
        profile_image: user.profile_image,
      },
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
    };
  }

  const res = await axios.post(
    'https://api.encapmoments.com/auth/login',
    { email, password },
    { withCredentials: true }
  );
  return res.data;
};

// 로그아웃
export const logoutAPI = async () => {
  if (useMock) {
    console.log('MOCK LOGOUT');
    return { success: true };
  }

  const res = await axios.post(
    'https://api.encapmoments.com/auth/logout',
    {},
    { withCredentials: true }
  );
  return res.data;
};

// 회원가입
export const registerAPI = async (email, password, nickname, profile_image) => {
  // if (useMock) {
  //   console.log('MOCK REGISTER');

  //   // const exists = mockUsers.find((u) => u.email === email);
  //   // if (exists) {
  //   //   return { success: false, message: '이미 존재하는 이메일입니다.' };
  //   // }

  //   const newUser = { email, password, nickname, profile_image };
  //   mockUsers.push(newUser);

  //   return {
  //     success: true,
  //     user: {
  //       email,
  //       nickname,
  //       profile_image,
  //     },
  //   };
  // }

  const res = await axios.post('https://api.encapmoments.com/auth/register', {
    email,
    password,
    nickname,
    profile_image,
  });
  return res.data;
};
