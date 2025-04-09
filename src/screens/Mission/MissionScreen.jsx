import React from 'react';
import { View, Text,ScrollView, TouchableOpacity } from 'react-native';

import { AppBar, TabBar } from '../../common/commonIndex';
import MissionScreenStyles from './MissionScreenStyles';
import { AddWeeklyMissions, DailyMission } from '../../components/Mission/missionIndex';

const MissionScreen = ({ navigation }) => {

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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={MissionScreenStyles.dailyMissions}>
          <DailyMission navigation={navigation} title={'하이'} />
          <DailyMission navigation={navigation} title={'하삼'} />
          <DailyMission navigation={navigation} title={'하사'} />
          <DailyMission navigation={navigation} title={'하오'} />
          <DailyMission navigation={navigation} title={'하육'} />
        </ScrollView>
      </View>
      <TabBar navigation={navigation}/>

    </>
  );
};

export default MissionScreen;
