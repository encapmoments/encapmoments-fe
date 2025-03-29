import React from 'react';
import { ScrollView, View } from 'react-native';

import { AppBar, CommonButton, TabBar } from '../../common/commonIndex';

const MissionScreen = ({ navigation }) => {
  const backgroundStyle = {
    backgroundColor: '#F8F3D9',
    flex: 1,
  };

  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <AppBar />
      <TabBar />
      <ScrollView style={{paddingRight: safePadding}}>
        <CommonButton
          title="미션"
          onPress={() => navigation.navigate('Profile')}
        />
      </ScrollView>
    </View>
  );
};

export default MissionScreen;
