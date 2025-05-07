import React from 'react';
import { View, Text,ScrollView, ActivityIndicator } from 'react-native';

import { AppBar, TabBar } from '../../common/commonIndex';
import MissionScreenStyles from './MissionScreenStyles';
import { AddWeeklyMissions, DailyMission } from '../../components/Mission/missionIndex';
import { useGetDailyMissions } from '../../viewmodels/missionViewModels';
import Colors from '../../styles/colors';

const MissionScreen = ({ navigation }) => {
  // const accessToken = useAuthStore((state) => state.accessToken);
  const accessToken = 'mock-access-token';
  const { dailyMissions, loading } = useGetDailyMissions(accessToken);

  return (
    <>
      <AppBar />
      <View style={MissionScreenStyles.backgroundStyle}>
        <Text style={MissionScreenStyles.missionText}>주간 미션</Text>
        <Text style={MissionScreenStyles.weeklyMissionTimeRemains}>6:13:20:19</Text>
        <AddWeeklyMissions navigation={navigation} />
        {/* 미션이 없으면 AddWeeklyMissions만, 미션이 있으면 ScrollView에 씌워서 위치 조정 후 3개 만들기*/}

        <Text style={MissionScreenStyles.missionText}>일일 미션</Text>
        <Text style={MissionScreenStyles.dailyMissionTimeRemains}>11:09:19</Text>
        {loading ? (
          <ActivityIndicator size="small" color={Colors.orange} />
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={MissionScreenStyles.dailyMissions}>
            {dailyMissions.map((mission, index) => (
              <DailyMission
                key={index}
                navigation={navigation}
                title={mission.mission_title}
                daily_id={mission.daily_id}
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
