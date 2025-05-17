import axios from 'axios';
import useMock from './useMock';
import { useProfileStore } from '../store/store';

// 프로필 조회
export const getProfileUser = async (accessToken) => {
    if (useMock) {
        return useProfileStore.getState().profileUser;
    }

    const res = await axios.get('https://api.encapmoments.com/mypage', {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
    });

    return res.data;
};

// 프로필 수정

// 내 미션 확인
export const getProfileMissions = async (accessToken) => {
  if (useMock) {
    const { profileDailyMissions, profileWeeklyMissions } = useProfileStore.getState();
    return {
      daily: profileDailyMissions,
      weekly: profileWeeklyMissions,
    };
  }

  const res = await axios.get('https://api.encapmoments.com/mypage/missions', {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};
