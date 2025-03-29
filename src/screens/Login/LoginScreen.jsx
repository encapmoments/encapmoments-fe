import React from 'react';
import { ScrollView, View } from 'react-native';

import { AppBar, CommonButton, TabBar } from '../../common/commonIndex';

const LoginScreen = () => {
  const backgroundStyle = {
    backgroundColor: '#F8F3D9',
    flex: 1,
  };

  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <ScrollView style={backgroundStyle}>
        <View style={{paddingRight: safePadding}}>
          <AppBar />
          <CommonButton
            title="로그인"
            onPress={() => console.log('로그인')}
          />
        </View>
      </ScrollView>
      <TabBar />
    </View>
  );
};

export default LoginScreen;
