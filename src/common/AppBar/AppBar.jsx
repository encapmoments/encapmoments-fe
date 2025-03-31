import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import AppBarStyles from './AppBarStyles';

const AppBar = () => {
  return (
    <View style={AppBarStyles.AppBar}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={AppBarStyles.AppBarCoverWrapper}
        contentContainerStyle={AppBarStyles.AppBarCoverContent}
      >
        <Image
          style={AppBarStyles.AppBarCover}
          source={require('../../assets/AppBarImages/covers/cover1.jpg')}
        />
        <Image
          style={AppBarStyles.AppBarCover}
          source={require('../../assets/AppBarImages/covers/cover2.jpg')}
        />
      </ScrollView>
      <Text style={AppBarStyles.AppBarText}>  Encap{'\n'}Moments</Text>

      <View style={AppBarStyles.AppBarAlarmWrapper}>
        <Image
          style={AppBarStyles.AppBarAlarm}
          source={require('../../assets/AppBarImages/alarm.png')}
        />
      </View>
      <View style={AppBarStyles.AppBarPersonWrapper}>
        <Image
          style={AppBarStyles.AppBarPerson}
          source={require('../../assets/AppBarImages/person.png')}
        />
      </View>
    </View>
  );
};

export default AppBar;
