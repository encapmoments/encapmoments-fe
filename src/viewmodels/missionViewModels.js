import { useEffect, useState } from 'react';
import { getDailyMissions, getWeeklyMissions } from '../models/mission';

// 미션 조회
export const useGetMissions = (type, accessToken) => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (type === 'daily') {
        const data = await getDailyMissions(accessToken);
        setMissions(data);
      } else {
        const data = await getWeeklyMissions(accessToken);
        setMissions(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [type, accessToken]);

  return { missions, loading };
};

// 주간 미션 생성

