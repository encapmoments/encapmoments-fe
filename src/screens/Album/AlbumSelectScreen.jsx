import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AlbumSelectScreenStyles from './AlbumSelectScreenStyles';
import { TabBar } from '../../common/commonIndex';
import Comment from '../../components/Album/Comment';
import { useGetAlbum } from '../../viewmodels/albumViewModels';
import useAccessToken from '../../models/accessToken';
import { deleteAlbum } from '../../models/album';
import { SafeAreaView } from 'react-native-safe-area-context';


const AlbumSelectScreen = ({ navigation }) => {

  const accessToken = useAccessToken();
  const route = useRoute();
  const { album_id } = route.params;

  const { albums, loading } = useGetAlbum(accessToken);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleDelete = () => {
    Alert.alert(
      '앨범 삭제',
      '정말 이 앨범을 삭제하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          style: 'destructive',
          onPress: async () => {
            try {
              const result = await deleteAlbum({ album_id }, accessToken);
              if (result.success) {
                Alert.alert('삭제 완료', '앨범이 삭제되었습니다.');
                navigation.navigate('Album');
              } else {
                Alert.alert('삭제 실패', result.message || '다시 시도해주세요.');
              }
            } catch (err) {
              console.error(err);
              Alert.alert('오류 발생', '삭제 중 문제가 발생했습니다.');
            }
          },
        },
      ]
    );
  };

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
      <SafeAreaView style={AlbumSelectScreenStyles.safeArea}>
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
                  <TouchableOpacity onPress={() => navigation.navigate('MissionPost', {album_id : album_id, mission_type: selectedAlbum?.mission_type})}>
                    <Text style={AlbumSelectScreenStyles.commentLastTextUpdate}>수정</Text> {/* TODO : MissionPostScreen 으로 넘어가서, 기존 정보 GET해놓기 &  PATCH  */}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleDelete}>
                    <Text style={AlbumSelectScreenStyles.commentLastTextDelete}>삭제</Text> {/* TODO : 해당 album_id 삭제*/}
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <TabBar navigation={navigation} />
    </>
  );
};

export default AlbumSelectScreen;
