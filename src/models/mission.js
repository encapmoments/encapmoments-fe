import axios from 'axios';
import useMock from './useMock';
import { useMissionStore } from '../store/store';

// 일일 앨범 모두 조회
export const getDailyMissions = async (accessToken) => {
  if (useMock) {
    return useMissionStore.getState().dailyMissions;
  }

  const res = await axios.get('https://api.encapmoments.com/mission/daily', {
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

  const res = await axios.get(`https://api.encapmoments.com/mission/daily_detail/${daily_id}`, {
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

  const res = await axios.get('https://api.encapmoments.com/mission/weekly', {
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

  const res = await axios.get(`https://api.encapmoments.com/mission/weekly_detail/${weekly_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

