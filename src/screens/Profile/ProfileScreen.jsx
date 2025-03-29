import React from 'react';
import { ScrollView, View } from 'react-native';

import { AppBar, CommonButton } from '../../common/commonIndex';

const MissionScreen = () => {
  const backgroundStyle = {
    backgroundColor: '#F8F3D9',
  };

  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <ScrollView style={backgroundStyle}>
        <View style={{paddingRight: safePadding}}>
          <AppBar />
          <CommonButton
            title="프로필"
            onPress={() => console.log('프로필')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MissionScreen;
