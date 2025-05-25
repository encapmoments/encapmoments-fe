import { useEffect, useState, useCallback } from 'react';
import { getDailyMissions, getWeeklyMissions } from '../models/mission';

// 미션 조회
export const useGetMissions = (type, accessToken) => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      if (type === 'daily') {
        const data = await getDailyMissions(accessToken);
        setMissions(data);
      } else {
        const data = await getWeeklyMissions(accessToken);
        setMissions(data);
      }
    } catch (err) {
      console.error('미션 불러오기 실패', err);
    } finally {
      setLoading(false);
    }
  }, [type, accessToken]); // ✅ 의존성 명확하게

  useEffect(() => {
    fetchData();
  }, [fetchData]); // ✅ 안정된 함수만 넣기

  return { missions, loading, refetch: fetchData }; // ✅ 외부에서 수동 호출 가능
};
