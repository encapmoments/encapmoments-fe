import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { AppBar, TabBar } from '../../common/commonIndex';
import AlbumScreenStyles from './AlbumScreenStyles';

const AlbumScreen = ({ navigation }) => {

  return (

    <>
      <AppBar />
      <View style={AlbumScreenStyles.backgroundStyle} />
      <TabBar navigation={navigation}/>

    </>
  );
};

export default AlbumScreen;
