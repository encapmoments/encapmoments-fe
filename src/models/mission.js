import axios from 'axios';
import useMock from './useMock';

// mock data
const mockDailyAlbums = [
  { daily_id: 1, mission_title: '일일미션1', reward: 100 },
  { daily_id: 2, mission_title: '일일미션2', reward: 100 },
  { daily_id: 3, mission_title: '일일미션3', reward: 100 },
  { daily_id: 4, mission_title: '일일미션4', reward: 100 },
  { daily_id: 5, mission_title: '일일미션5', reward: 100 },
  { daily_id: 6, mission_title: '일일미션6', reward: 100 },
  { daily_id: 7, mission_title: '일일미션7', reward: 100 },
];


const mockDailyDetails = {
  1: {
    daily_id: 1,
    mission_image: require('../assets/mock/mission/mission1.jpg'),
    mission_title: '일일미션1',
    mission_description: '일일미션설명1',
    reward: 100,
  },
  2: {
    daily_id: 2,
    mission_image: require('../assets/mock/mission/mission2.jpg'),
    mission_title: '일일미션2',
    mission_description: '일일미션설명2',
    reward: 100,
  },
  3: {
    daily_id: 3,
    mission_image: require('../assets/mock/mission/mission3.jpg'),
    mission_title: '일일미션3',
    mission_description: '일일미션설명3',
    reward: 100,
  },
  4: {
    daily_id: 4,
    mission_image: require('../assets/mock/mission/mission4.jpg'),
    mission_title: '일일미션4',
    mission_description: '일일미션설명4',
    reward: 100,
  },
  5: {
    daily_id: 5,
    mission_image: require('../assets/mock/mission/mission5.jpg'),
    mission_title: '일일미션5',
    mission_description: '일일미션설명5',
    reward: 100,
  },
  6: {
    daily_id: 6,
    mission_image: require('../assets/mock/mission/mission6.jpg'),
    mission_title: '일일미션6',
    mission_description: '일일미션설명6',
    reward: 100,
  },
  7: {
    daily_id: 7,
    mission_image: require('../assets/mock/mission/mission7.jpg'),
    mission_title: '일일미션7',
    mission_description: '일일미션설명7',
    reward: 100,
  },
};

const mockWeeklyAlbums = [
  { mission_image: 'https://example.com/weekly1.png', mission_title: '가족 산책', reward: 300 },
  { mission_image: 'https://example.com/weekly2.png', mission_title: '가족 게임', reward: 300 },
];

const mockWeeklyDetails = {
  1: {
    mission_image: require('../assets/mock/mission/mission1.jpg'),
    mission_title: '주간미션1',
    mission_description: '주간미션설명1',
    reward: 300,
  },
  2: {
    mission_image: require('../assets/mock/mission/mission2.jpg'),
    mission_title: '주간미션2',
    mission_description: '주간미션설명2',
    reward: 300,
  },
  3: {
    mission_image: require('../assets/mock/mission/mission3.jpg'),
    mission_title: '주간미션3',
    mission_description: '주간미션설명3',
    reward: 300,
  },
};


// 일일 앨범 모두 조회
export const getDailyMissions = async (accessToken) => {
  if (useMock) {
    return mockDailyAlbums;
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
    return mockDailyDetails[daily_id];
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
    return mockWeeklyAlbums;
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
    return mockWeeklyDetails[weekly_id];
  }

  const res = await axios.get(`https://api.encapmoments.com/mission/weekly_detail/${weekly_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};
