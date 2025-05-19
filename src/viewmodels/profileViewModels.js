import { useState, useEffect } from 'react';
import { getProfileUser, getProfileMissions } from '../models/profile';

// 프로필 조회
export const useGetProfileUser = (accessToken) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ❗ accessToken이 없으면 API 호출하지 않음
    if (!accessToken) {
      setLoading(false);
      return;
    }

    const fetchProfileUser = async () => {
      try {
        const profileUser = await getProfileUser(accessToken);
        setProfile(profileUser);
      } catch (error) {
        console.error('프로필 가져오기 실패:', error); // ← 메시지도 정확히
      } finally {
        setLoading(false);
      }
    };

    fetchProfileUser();
  }, [accessToken]);

  return { profile, loading };
};


// 프로필 수정

// 내 미션 확인
export const useGetProfileMissions = (accessToken) => {
    const [profileDailyMissions, setProfileDailyMissions] = useState([]);
    const [profileWeeklyMissions, setProfileWeeklyMissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMissions = async () => {
            try {
                const { daily, weekly } = await getProfileMissions(accessToken);
                setProfileDailyMissions(daily);
                setProfileWeeklyMissions(weekly);
            } catch (error) {
                console.error('미션 가져오기 실패:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMissions();
    }, [accessToken]);

    return { profileDailyMissions, profileWeeklyMissions, loading };
};
