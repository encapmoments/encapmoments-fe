import axios from 'axios';
import useMock from './useMock';

// mock data
const mockDailyAlbums = [
  { mission_title: '물 마시기', reward: 100 },
  { mission_title: '엄마 도와주기', reward: 100 },
];

const mockDailyDetails = {
  1: {
    mission_image: 'https://example.com/daily1.png',
    mission_title: '물 마시기',
    mission_description: '하루에 5잔 이상의 물을 마셔보세요!',
    reward: 100,
  },
  2: {
    mission_image: 'https://example.com/daily2.png',
    mission_title: '엄마 도와주기',
    mission_description: '설거지나 청소를 도와주세요!',
    reward: 100,
  },
};

const mockWeeklyAlbums = [
  { mission_image: 'https://example.com/weekly1.png', mission_title: '가족 산책', reward: 300 },
  { mission_image: 'https://example.com/weekly2.png', mission_title: '가족 게임', reward: 300 },
];

const mockWeeklyDetails = {
  1: {
    mission_image: 'https://example.com/weekly1.png',
    mission_title: '가족 산책',
    mission_description: '가족과 함께 공원을 산책하며 대화 나누기',
    reward: 300,
  },
  2: {
    mission_image: 'https://example.com/weekly2.png',
    mission_title: '가족 게임',
    mission_description: '가족이 함께 보드게임을 즐겨보세요',
    reward: 300,
  },
};


// 일일 앨범 모두 조회
export const getDailyMissionsAPI = async (accessToken) => {
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
export const getDailyMissionDetailAPI = async (daily_id, accessToken) => {
  if (useMock) {
    return mockDailyDetails[daily_id];
  }

  const res = await axios.get(`https://api.encapmoments.com/mission/daily_detail/${daily_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 주간 앨범 모두 조회
export const getWeeklyMissionsAPI = async (accessToken) => {
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
export const getWeeklyMissionDetailAPI = async (weekly_id, accessToken) => {
  if (useMock) {
    return mockWeeklyDetails[weekly_id];
  }

  const res = await axios.get(`https://api.encapmoments.com/mission/weekly_detail/${weekly_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};
