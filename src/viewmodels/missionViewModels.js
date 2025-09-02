import { useEffect, useState, useCallback } from "react";
import { getDailyMissions, getWeeklyMissions } from "../models/mission";

// 미션 조회
export const useGetMissions = (type, accessToken) => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    if (!accessToken) {
      setMissions([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      if (type === "daily") {
        const data = await getDailyMissions(accessToken);
        setMissions(data);
      } else {
        const data = await getWeeklyMissions(accessToken);
        setMissions(data);
      }
    } catch (err) {
      if (err.response?.status === 403 || err.response?.status === 401) {
        console.log("인증 토큰이 만료되거나 유효하지 않음");
        setMissions([]);
      } else {
        console.error("미션 불러오기 실패", err);
      }
    } finally {
      setLoading(false);
    }
  }, [type, accessToken]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { missions, loading, refetch: fetchData };
};
