import React from 'react';
import { View } from 'react-native';

import { AppBar, CommonButton } from '../../common/commonIndex';

const MissionScreen = ( {navigation} ) => {
  const backgroundStyle = {
    backgroundColor: '#F8F3D9',
  };


  return (
    <View style={backgroundStyle}>
      <AppBar />
      <CommonButton
        title="프로필"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default MissionScreen;
