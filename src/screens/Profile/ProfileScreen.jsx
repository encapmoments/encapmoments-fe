import React from 'react';
import { View, Text } from 'react-native';

import { TabBar } from '../../common/commonIndex';
import ProfileScreenStyles from './ProfileScreenStyles';

const ProfileScreen = ({ navigation }) => {

  return (
    <View style={ProfileScreenStyles.backgroundStyle}>
      <TabBar />
    </View>
  );
};

export default ProfileScreen;
