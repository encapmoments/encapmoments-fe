import { useState, useEffect } from 'react';
import {
  getDailyMissions,
  getWeeklyMissions,
  getDailyMissionDetail,
  getWeeklyMissionDetail,
} from '../models/mission';

// 전체 미션 조회
export const useGetMissions = (type, accessToken) => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        if (type === 'daily') {
          const data = await getDailyMissions(accessToken);
          setMissions(data);
        } else if (type === 'weekly') {
          const data = await getWeeklyMissions(accessToken);
          setMissions(data);
        } else {
          throw new Error(`Invalid mission type: ${type}`);
        }
      } catch (error) {
        console.error(`${type} 미션 가져오기 실패:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, [type, accessToken]);

  return { missions, loading };
};

// 상세 미션 조회
export const useGetMissionDetail = (type, id, accessToken) => {
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        if (!id) { return; }
        if (type === 'daily') {
          const data = await getDailyMissionDetail(id, accessToken);
          setMission(data);
        } else if (type === 'weekly') {
          const data = await getWeeklyMissionDetail(id, accessToken);
          setMission(data);
        } else {
          throw new Error(`Invalid mission type: ${type}`);
        }
      } catch (error) {
        console.error(`${type} 미션 상세 조회 실패:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [type, id, accessToken]);

  return { mission, loading };
};
