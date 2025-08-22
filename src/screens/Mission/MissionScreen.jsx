import React, { useMemo, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppBar, TabBar } from "../../common/commonIndex";
import {
  AddWeeklyMissions,
  DailyMission,
  WeeklyMission,
} from "../../components/Mission/missionIndex";
import { useGetMissions } from "../../viewmodels/missionViewModels";
import useAccessToken from "../../models/accessToken";
import Colors from "../../styles/colors";
import getMissionScreenStyles from "./MissionScreenStyles";
import useMock from "../../models/useMock";

const MissionScreen = ({ navigation }) => {
  const accessToken = useAccessToken();
  const { width, height } = useWindowDimensions();
  const missionScreenStyles = getMissionScreenStyles(width, height);

  const { missions: dailyMissions, loading: dailyLoading } = useGetMissions(
    "daily",
    accessToken,
  );
  const { missions: weeklyMissions, loading: weeklyLoading } = useGetMissions(
    "weekly",
    accessToken,
  );
  const [weeklyRemainTime, setWeeklyRemainTime] = useState("");
  const [dailyRemainTime, setDailyRemainTime] = useState("");

  // const hasMissions = true; // weekly_time 조건 불충족시 false, 충족 시 true
  const hasMissions = useMemo(() => {
    if (useMock) {
      return false;
    }
    if (weeklyLoading) {
      return true;
    } // 로딩 중엔 true 처리
    const now = new Date();

    return weeklyMissions.some(mission => {
      if (!mission.expires_at) {
        return false;
      }
      return new Date(mission.expires_at) > now;
    });
  }, [weeklyMissions, weeklyLoading]);

  const getTimeDiffString = futureDate => {
    const now = new Date();
    const diff = new Date(futureDate) - now;

    if (diff <= 0) {
      return "0:00:00:00";
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${days}:${String(hours).padStart(2, "0")}:${String(
      minutes,
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (weeklyMissions.length === 0) {
      return;
    }

    const validMissions = weeklyMissions.filter(m => m.expires_at);
    if (validMissions.length === 0) {
      return;
    }

    const latestExpire = new Date(
      Math.max(...validMissions.map(m => new Date(m.expires_at))),
    );

    const interval = setInterval(() => {
      setWeeklyRemainTime(getTimeDiffString(latestExpire));
    }, 1000);

    // 초기 값 한번 세팅
    setWeeklyRemainTime(getTimeDiffString(latestExpire));

    return () => clearInterval(interval);
  }, [weeklyMissions]);

  useEffect(() => {
    if (dailyMissions.length === 0) {
      return;
    }

    const firstValid = dailyMissions.find(m => m.expires_at);
    if (!firstValid) {
      return;
    }

    const expireAt = new Date(firstValid.expires_at);

    const interval = setInterval(() => {
      setDailyRemainTime(getTimeDiffString(expireAt));
    }, 1000);

    setDailyRemainTime(getTimeDiffString(expireAt));

    return () => clearInterval(interval);
  }, [dailyMissions]);

  return (
    <>
      <AppBar />
      <SafeAreaView style={missionScreenStyles.safeArea}>
        <View style={missionScreenStyles.backgroundStyle}>
          <Text style={missionScreenStyles.missionText}>주간 미션</Text>
          <Text style={missionScreenStyles.weeklyMissionTimeRemains}>
            {weeklyRemainTime || "로딩 중..."}
          </Text>
          <View style={missionScreenStyles.weeklyMissionsWraapper}>
            {weeklyLoading ? (
              <ActivityIndicator size="small" color={Colors.orange} />
            ) : !hasMissions ? (
              <View style={missionScreenStyles.AddWeeklyMissionsWrapper}>
                <AddWeeklyMissions navigation={navigation} />
              </View>
            ) : (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={missionScreenStyles.weeklyMissionWrapper}>
                {weeklyMissions.map((mission, index) => (
                  <WeeklyMission
                    // key={mission.weekly_id ?? index}
                    key={mission.id ?? mission.weekly_id ?? index}
                    navigation={navigation}
                    type="weekly"
                    {...mission}
                  />
                ))}
              </ScrollView>
            )}
          </View>

          <Text style={missionScreenStyles.missionText}>일일 미션</Text>
          <Text style={missionScreenStyles.dailyMissionTimeRemains}>
            {dailyRemainTime || "로딩 중..."}
          </Text>
          {dailyLoading ? (
            <ActivityIndicator size="small" color={Colors.orange} />
          ) : (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={missionScreenStyles.dailyMissions}>
              {dailyMissions.map((mission, index) => (
                <DailyMission
                  key={mission.daily_id ?? index}
                  navigation={navigation}
                  type="daily"
                  {...mission}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
      <TabBar navigation={navigation} />
    </>
  );
};

export default MissionScreen;
