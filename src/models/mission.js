import axios from 'axios';
import useMock from './useMock';
import { useMissionStore } from '../store/store';
import baseUrl from './baseUrl';

// 일일 앨범 모두 조회
export const getDailyMissions = async (accessToken) => {
  if (useMock) {
    return useMissionStore.getState().dailyMissions;
  }

  const res = await axios.get(`${baseUrl}/daily_mission`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 일일 미션 상세 조회
export const getDailyMissionDetail = async (daily_id, accessToken) => {
  if (useMock) {
    return useMissionStore.getState().getDailyDetail(daily_id);
  }

  const res = await axios.get(`${baseUrl}/daily_mission/${daily_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 주간 미션 모두 조회
export const getWeeklyMissions = async (accessToken) => {
  if (useMock) {
    return useMissionStore.getState().weeklyMissions;
  }

  const res = await axios.get(`${baseUrl}/weekly_mission`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 주간 미션 상세 조회
export const getWeeklyMissionDetail = async (weekly_id, accessToken) => {
  if (useMock) {
    return useMissionStore.getState().getWeeklyDetail(weekly_id);
  }

  const res = await axios.get(`${baseUrl}/weekly_mission/${weekly_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 주간 미션 생성
export const generateWeeklyMission = async (data, accessToken) => {
  // data: { topic: "string" } 그대로 전달
  const res = await axios.post(`${baseUrl}/weekly_mission/generate`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  return res.data;
};
