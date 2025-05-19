import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AlbumSelectScreenStyles from './AlbumSelectScreenStyles';
import { TabBar } from '../../common/commonIndex';
import Comment from '../../components/Album/Comment';
import { useGetAlbum } from '../../viewmodels/albumViewModels';
import useAccessToken from '../../models/accessToken';

const AlbumSelectScreen = ({ navigation }) => {

  const accessToken = useAccessToken();
  const route = useRoute();
  const { album_id } = route.params;

  const { albums, loading } = useGetAlbum(accessToken);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    if (!loading) {
      const album = albums.find((a) => a.album_id === album_id);
      setSelectedAlbum(album);
    }
  }, [albums, loading, album_id]);

  if (loading || !selectedAlbum) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <View style={AlbumSelectScreenStyles.backgroundStyle}>
        <TouchableOpacity onPress={() => navigation.pop()} style={AlbumSelectScreenStyles.touchBackArrow}>
          <Image
            style={AlbumSelectScreenStyles.backArrow}
            source={require('../../assets/icons/backArrowWrapper.png')}
          />
        </TouchableOpacity>
        <Image
          style={AlbumSelectScreenStyles.albumImage}
          source={
            typeof selectedAlbum.album_image === 'string'
              ? { uri: selectedAlbum.album_image }
              : selectedAlbum.album_image
          }
        />
        <View style={AlbumSelectScreenStyles.albumInfo}>
          <Text style={AlbumSelectScreenStyles.albumTitle}>{selectedAlbum.album_title}</Text>
          <Text style={AlbumSelectScreenStyles.albumTag}>#{selectedAlbum.album_tag}</Text>
          <Text style={AlbumSelectScreenStyles.albumDate}>2025.03.25 (화)</Text>

          <View style={AlbumSelectScreenStyles.albumCommentsWrapper}>
            <ScrollView style={AlbumSelectScreenStyles.albumComments}>
              <Comment image={require('../../assets/AppBarImages/person.png')} member={'아빠'} comment={'재밌어요'} />
              <Comment image={require('../../assets/AppBarImages/person.png')} member={'엄마'} comment={'재미없어요'} />
              <Comment image={require('../../assets/AppBarImages/person.png')} member={'나'} comment={'재밌어요'} />
              <Comment image={require('../../assets/AppBarImages/person.png')} member={'삼촌'} comment={'재미없어요'} />
              <Comment image={require('../../assets/AppBarImages/person.png')} member={'고모'} comment={'재밌어요'} />
              <Comment image={require('../../assets/AppBarImages/person.png')} member={'이모부'} comment={'재미없어요'} />
              <View style={AlbumSelectScreenStyles.commentLastText}>
                <TouchableOpacity onPress={() => navigation.navigate('MissionPost')}>
                  <Text style={AlbumSelectScreenStyles.commentLastTextUpdate}>수정</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={AlbumSelectScreenStyles.commentLastTextDelete}>삭제</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <TabBar navigation={navigation} />
    </>
  );
};

export default AlbumSelectScreen;
