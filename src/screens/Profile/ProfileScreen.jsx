import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import { AppBar, TabBar } from '../../common/commonIndex';
import ProfileScreenStyles from './ProfileScreenStyles';

const MissionScreen = ( {navigation} ) => {

  return (

    <>
      <AppBar />
      <View style={ProfileScreenStyles.backgroundStyle}>
        <Text style={ProfileScreenStyles.missionText}>주간 미션</Text>
        <View style={ProfileScreenStyles.weeklyNoMission}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
                style={ProfileScreenStyles.plusIcon}
                source={require('../../assets/icons/plusIcon.png')}
            />
          </TouchableOpacity>
          <Text style={ProfileScreenStyles.weeklyNoMissionText}>주간 미션을 만드세요!</Text>
        </View>
        <Text style={ProfileScreenStyles.missionText}>일일 미션</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={ProfileScreenStyles.dailyMissions}>
          <View style={ProfileScreenStyles.dailyMissionWrapper}>
            <Text style={ProfileScreenStyles.dailyMissionText}>무궁화 꽃</Text>
          </View>
          <View style={ProfileScreenStyles.dailyMissionWrapper}>
            <Text style={ProfileScreenStyles.dailyMissionText}>무궁화 꽃</Text>
          </View>
          <View style={ProfileScreenStyles.dailyMissionWrapper}>
            <Text style={ProfileScreenStyles.dailyMissionText}>무궁화 꽃</Text>
          </View>
        </ScrollView>
      </View>
      <TabBar />

    </>
  );
};

export default MissionScreen;
