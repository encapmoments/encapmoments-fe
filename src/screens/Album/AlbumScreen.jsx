import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { AppBar, TabBar } from '../../common/commonIndex';
import AlbumScreenStyles from './AlbumScreenStyles';
import Card from '../../components/Album/Card';

const AlbumScreen = ({ navigation }) => {

  return (

    <>
      <AppBar />
      <View style={AlbumScreenStyles.backgroundStyle}>
      <Text style={AlbumScreenStyles.albumText}>내 추억 앨범</Text>
        <View style={AlbumScreenStyles.albumListsWrapper}>
          <FlatList
            contentContainerStyle={AlbumScreenStyles.albumLists}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            columnWrapperStyle={AlbumScreenStyles.albumListsRowColumn}
            data={[
              { title: '첫 번째', location: '경주', tag: '경주빵', image: require('../../assets/AppBarImages/person.png')},
              { title: '두 번째', location: '부산', tag: '경주빵', image: require('../../assets/images/example_image.png')},
              { title: '세 번째', location: '서울', tag: '경주빵', image: require('../../assets/AppBarImages/person.png')},
              { title: '세 번째', location: '의정부', tag: '경주빵', image: require('../../assets/AppBarImages/person.png')},
              { title: '세 번째', location: '속초', tag: '경주빵', image: require('../../assets/AppBarImages/person.png')}]}
            renderItem={({ item }) => (
              <Card navigation={navigation} title={item.title} location={item.location} tag={item.tag} image={item.image} />
            )}
          />
        </View>
      </View>
      <TabBar navigation={navigation}/>

    </>
  );
};

export default AlbumScreen;
