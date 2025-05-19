import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import Colors from '../../styles/colors';
import { AppBar, TabBar } from '../../common/commonIndex';
import AlbumScreenStyles from './AlbumScreenStyles';
import Card from '../../components/Album/Card';
import { Searchbar } from 'react-native-paper';

import { useGetAlbum, useSearchAlbum } from '../../viewmodels/albumViewModels'; // 🔹 추가
import useAccessToken from '../../models/accessToken';

const AlbumScreen = ({ navigation }) => {
  const accessToken = useAccessToken();
  const [search, setSearch] = useState('');

  const { albums: defaultAlbums, loading: defaultLoading } = useGetAlbum(accessToken);
  const { albums: searchedAlbums, loading: searchLoading } = useSearchAlbum(search, accessToken); // 🔹 추가

  const isSearching = search.trim().length > 0;
  const albumsToDisplay = isSearching ? searchedAlbums : defaultAlbums;
  const loading = isSearching ? searchLoading : defaultLoading;

  return (
    <>
      <AppBar />
      <View style={AlbumScreenStyles.backgroundStyle}>
        <Text style={AlbumScreenStyles.albumText}>내 추억 앨범</Text>
        <Searchbar placeholder="검색" onChangeText={setSearch}
          value={search} icon="favorite" style={AlbumScreenStyles.searchBar}/>
        <View style={AlbumScreenStyles.albumListsWrapper}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.orange} />
          ) : (
            <FlatList
              contentContainerStyle={AlbumScreenStyles.albumLists}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              columnWrapperStyle={AlbumScreenStyles.albumListsRowColumn}
              data={albumsToDisplay}
              renderItem={({ item }) => (
                <Card
                  navigation={navigation}
                  album_id={item.album_id}
                  album_title={item.album_title}
                  location={item.location}
                  album_tag={item.album_tag}
                  album_image={
                    typeof item.album_image === 'string'
                      ? { uri: item.album_image }
                      : item.album_image
                  }
                />
              )}
            />
          )}
        </View>
      </View>
      <TabBar navigation={navigation} />
    </>
  );
};

export default AlbumScreen;
