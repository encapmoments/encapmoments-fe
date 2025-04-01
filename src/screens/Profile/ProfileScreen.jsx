import React from 'react';
import { ScrollView, View } from 'react-native';

import { AppBar, CommonButton, TabBar } from '../../common/commonIndex';

const ProfileScreen = ({ navigation }) => {
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
          title="프로필"
          onPress={() => navigation.navigate('Mission')}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
