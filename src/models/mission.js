import axios from 'axios';
import useMock from './useMock';
import { useMissionStore } from '../store/store';

// 일일 앨범 모두 조회
export const getDailyMissions = async (accessToken) => {
  if (useMock) {
    return useMissionStore.getState().dailyMissions;
  }

  const res = await axios.get('https://api.encapmoments.com/daily_mission', {
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

  const res = await axios.get(`https://api.encapmoments.com/daily_mission/${daily_id}`, {
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

  const res = await axios.get('https://api.encapmoments.com/weekly_mission', {
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

  const res = await axios.get(`https://api.encapmoments.com/weekly_mission/${weekly_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 주간 미션 생성
export const generateWeeklyMission = async (data, accessToken) => {

  if (useMock) {
    const newMission = {
      weekly_id: Math.floor(Math.random() * 10000),
      weekly_title: 'AI 생성 미션',
      weekly_description: data.text,
      weekly_image: require('../assets/mock/mission/mission1.jpg'),
      reward: 300,
      is_completed: false,
    };

    useMissionStore.getState().addWeeklyMission(newMission);

    return newMission;
  }
  const res = await axios.post('https://api.encapmoments.com/weekly_mission/generate', data,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};
