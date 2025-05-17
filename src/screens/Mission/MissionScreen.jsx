import React from 'react';
import { View, Text,ScrollView, ActivityIndicator } from 'react-native';

import { AppBar, TabBar } from '../../common/commonIndex';
import MissionScreenStyles from './MissionScreenStyles';
import { AddWeeklyMissions, DailyMission, WeeklyMission } from '../../components/Mission/missionIndex';
import { useGetMissions } from '../../viewmodels/missionViewModels';
import Colors from '../../styles/colors';

const MissionScreen = ({ navigation }) => {
  // const accessToken = useAuthStore((state) => state.accessToken);
  const accessToken = 'mock-access-token';
  const { missions: dailyMissions, loading: dailyLoading } = useGetMissions('daily', accessToken);
  const { missions: weeklyMissions, loading: weeklyLoading } = useGetMissions('weekly', accessToken);

  const hasMissions = true; // weekly_time 조건 불충족시 false, 충족 시 true

  return (
    <>
      <AppBar />
      <View style={MissionScreenStyles.backgroundStyle}>
        <Text style={MissionScreenStyles.missionText}>주간 미션</Text>
        <Text style={MissionScreenStyles.weeklyMissionTimeRemains}>6:13:20:19</Text>

      <View style={MissionScreenStyles.weeklyMissionsWraapper}>
          {weeklyLoading ? (
            <ActivityIndicator size="small" color={Colors.orange} />
          ) : !hasMissions ? (
            <View style={MissionScreenStyles.AddWeeklyMissionsWrapper}>
              <AddWeeklyMissions navigation={navigation} />
            </View>
          ) : (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={MissionScreenStyles.weeklyMissionWrapper}
            >
              {weeklyMissions.map((mission, index) => (
                <WeeklyMission
                  key={mission.weekly_id ?? index}
                  navigation={navigation}
                  {...mission}
                />
              ))}
            </ScrollView>
          )}
        </View>

        <Text style={MissionScreenStyles.missionText}>일일 미션</Text>
        <Text style={MissionScreenStyles.dailyMissionTimeRemains}>11:09:19</Text>
        {dailyLoading ? (
          <ActivityIndicator size="small" color={Colors.orange} />
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={MissionScreenStyles.dailyMissions}>
              {dailyMissions.map((mission) => (
              <DailyMission
                key={mission.daily_id}
                navigation={navigation}
                {...mission}
              />
              ))}
          </ScrollView>
        )}
      </View>
      <TabBar navigation={navigation}/>

    </>
  );
};

export default MissionScreen;
