import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import Colors from '../../styles/colors';
import { AppBar, TabBar } from '../../common/commonIndex';
import AlbumScreenStyles from './AlbumScreenStyles';
import Card from '../../components/Album/Card';

import { useGetAlbum } from '../../viewmodels/albumViewModels';
import useAuthStore from '../../store/authStore'; // Zustand 사용

const AlbumScreen = ({ navigation }) => {
  const accessToken = 'mock-access-token'; // TODO: 실제 accessToken 적용 시에는 이거 X (ex. user.accessToken -> 상태 관리 라이브러리로 받아오기)
  // const accessToken = useAuthStore((state) => state.accessToken); // 전역 상태에서 가져오기

  const { albums, loading } = useGetAlbum(accessToken);

  return (
    <>
      <AppBar />
      <View style={AlbumScreenStyles.backgroundStyle}>
        <Text style={AlbumScreenStyles.albumText}>내 추억 앨범</Text>

        <View style={AlbumScreenStyles.albumListsWrapper}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.orange} /> // TODO: 나중에 Skeleton으로 Custom 로딩 화면 만들기
          ) : (
            <FlatList
              contentContainerStyle={AlbumScreenStyles.albumLists}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              columnWrapperStyle={AlbumScreenStyles.albumListsRowColumn}
              data={albums}
              renderItem={({ item }) => (
                <Card
                  navigation={navigation}
                  title={item.album_title}
                  location={item.location}
                  tag={item.album_tag}
                  image={
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
