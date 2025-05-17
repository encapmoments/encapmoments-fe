import axios from 'axios';
import useMock from './useMock';
import { useProfileStore } from '../store/store';

// 프로필 조회
export const getProfileUser = async (accessToken) => {
    if (useMock) {
        return useProfileStore.getState().profileUser;
    }

    const res = await axios.get('https://api.encapmoments.com/profile/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
    });

    return res.data;
};

// 프로필 수정
/*
https://api.encapmoments.com/profile
PUT

request
{ "nickname": "변경닉", "profile_image": "url", "email": "new@a.com", "password": "newpass123" }

백엔드 함수 작동
*/

// 내 미션 확인
export const getProfileMissions = async (accessToken) => {
  if (useMock) {
    const { profileDailyMissions, profileWeeklyMissions } = useProfileStore.getState();
    return {
      daily: profileDailyMissions,
      weekly: profileWeeklyMissions,
    };
  }

  const res = await axios.get('https://api.encapmoments.com/profile/missions', {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};
