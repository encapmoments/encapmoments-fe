import axios from "axios";
import useMock from "./useMock";
import { useProfileStore } from "../store/store";
import baseUrl from "./baseUrl";

// 프로필 조회
export const getProfileUser = async accessToken => {
  if (useMock) {
    return useProfileStore.getState().profileUser;
  }

  const res = await axios.get(`${baseUrl}/profile/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 프로필 수정
export const updateProfile = async (accessToken, data) => {
  if (useMock) {
    return;
  }

  const res = await axios.put(`${baseUrl}/profile`, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 내 미션 확인
export const getProfileMissions = async accessToken => {
  if (useMock) {
    const { profileDailyMissions, profileWeeklyMissions } =
      useProfileStore.getState();
    return {
      daily: profileDailyMissions,
      weekly: profileWeeklyMissions,
    };
  }

  const res = await axios.get(`${baseUrl}/mypage/missions`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};
