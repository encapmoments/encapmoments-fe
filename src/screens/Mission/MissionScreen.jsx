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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={MissionScreenStyles.dailyMissions}>
          <DailyMission />
          <DailyMission />
          <DailyMission />
          <DailyMission />
          <DailyMission />
          <TouchableOpacity onPress={() => navigation.navigate('MissionSelect')} style={MissionScreenStyles.example}>
            <Text>미션 선택</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={MissionScreenStyles.example2}>
            <Text>로그인창</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
      <TabBar navigation={navigation}/>

    </>
  );
};

export default MissionScreen;
