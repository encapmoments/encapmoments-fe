import { useState, useEffect } from 'react';
import { getDailyMissions, getDailyMissionDetail, getWeeklyMissions, getWeeklyMissionDetail } from '../models/mission';

// 일일 앨범 모두 조회
export const useGetDailyMissions = (accessToken) => {
    const [dailyMissions, setDailyMissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchDailyMissions = async () => {
        try {
          const data = await getDailyMissions(accessToken);
          setDailyMissions(data);
        } catch (error) {
          console.error('일일 미션 가져오기 실패:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchDailyMissions();
    }, [accessToken]);

    return { dailyMissions, loading };
  };

// 주간 앨범 모두 조회
export const useGetWeeklyMissions = async (accessToken) => {
    const [ weeklyMissions, setDailyMissions ] = useState([]);
    const [ loading, setLoading ] = useState(true);

     useEffect(() => {
            const fetchWeeklyMissions = async () => {
                try {
                    const weekly = await getWeeklyMissions(accessToken);
                    setDailyMissions(weekly);
                } catch (error) {
                    console.error('주간 미션 가져오기 실패:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchWeeklyMissions();

        }, [accessToken]);

    return { weeklyMissions, loading };
};

// 일일 미션 상세 조회
export const useGetDailyMissionDetail = (daily_id, accessToken) => {
    const [mission, setMission] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchDetail = async () => {
        try {
          if (daily_id) {
            const data = await getDailyMissionDetail(daily_id, accessToken);
            setMission(data);
          }
        } catch (error) {
          console.error('일일 미션 상세 조회 실패:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchDetail();
    }, [daily_id, accessToken]);

    return { mission, loading };
  };

// 주간 미션 상세 조회
