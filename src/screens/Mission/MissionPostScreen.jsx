import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import MissionPostScreenStyles from './MissionPostScreenStyles';
import { CommentCreate } from '../../components/Mission/CommentCreate';
import Colors from '../../styles/colors';
import { CommonButton } from '../../common/commonIndex';
import useAccessToken from '../../models/accessToken';
import { postAlbum, updateAlbum } from '../../models/album';
import { useGetAlbum } from '../../viewmodels/albumViewModels';

const MissionPostScreen = ({ navigation, route }) => {

  const accessToken = useAccessToken();
  const [album_title, setAlbumTitle] = useState('');
  const [album_tag, setAlbumTag] = useState('');
  const [location, setLocation] = useState('');

  const [selectedImage, setSelectedImage] = useState(null);
  const [commentComponents, setCommentComponents] = useState([{ id: Date.now() }]);
  const { mission_type, album_id } = route.params;

    const { albums, loading } = useGetAlbum(accessToken);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const isEditMode = !!album_id;

    useEffect(() => {

      if (!loading && isEditMode) {
        const album = albums.find((a) => a.album_id === album_id);
        if (album) {
          setSelectedAlbum(album);
          setAlbumTitle(album.album_title);
          setAlbumTag(album.album_tag);
          setLocation(album.location);
          setSelectedImage(album.album_image); // string일 경우 uri 처리 필요
        }
      }
    }, [albums, loading, album_id, isEditMode]);

  const handleImagePick = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response) => {
        if (!response.didCancel && !response.errorCode) {
          const uri = response.assets?.[0]?.uri;
          if (uri) {
            setSelectedImage(uri);
          }
        }
      }
    );
  };

  const handleAddComment = () => {
    setCommentComponents([...commentComponents, { id: Date.now() }]);
  };

  const handleRemoveComment = (idToRemove) => {
    setCommentComponents(commentComponents.filter(({ id }) => id !== idToRemove));
  };


  const handleSubmit = async () => {
    if (!album_title || !selectedImage) {
      Alert.alert('제목과 이미지는 필수입니다.');
      return;
    }

    try {
      let result;

      if (isEditMode) {
        // 수정 요청 (PATCH)
        result = await updateAlbum(
          {
            album_id,
            album_title,
            album_tag,
            album_image: selectedImage,
            location,
          },
          accessToken
        );
      } else {
        // 생성 요청 (POST)
        result = await postAlbum(
          {
            album_title,
            album_tag,
            album_image: selectedImage,
            location,
            mission_type,
          },
          accessToken
        );
      }

      if (result.success) {
        navigation.navigate('Album');
      } else {
        Alert.alert('업로드 실패', result.message || '다시 시도해보세요');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('오류가 발생했습니다');
    }
  };


  return (
    <KeyboardAvoidingView
      style={MissionPostScreenStyles.backgroundStyle}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={MissionPostScreenStyles.touchBackArrow}
      >
        <Image
          style={MissionPostScreenStyles.backArrow}
          source={require('../../assets/icons/backArrowWrapper.png')}
        />
      </TouchableOpacity>

      <View style={MissionPostScreenStyles.missionImageWrapper}>
        {selectedImage ? (
          <>
            <Image // album_image
              source={{ uri: selectedImage }}
              style={MissionPostScreenStyles.uploadedImage}
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={handleImagePick}
              style={MissionPostScreenStyles.pencilIconWrapper}
            >
              <Image
                source={require('../../assets/icons/pencil.png')}
                style={MissionPostScreenStyles.pencilIcon}
              />
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <Image
              style={MissionPostScreenStyles.plusIcon}
              source={require('../../assets/icons/plusIcon.png')}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={MissionPostScreenStyles.missionInfo}>
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={MissionPostScreenStyles.scroll}
        >
          <TextInput // album_title
            style={MissionPostScreenStyles.titleInput}
            placeholder="제목"
            placeholderTextColor={Colors.white}
            value={album_title}
            onChangeText={setAlbumTitle}
          />
          <TextInput // album_tag
            style={MissionPostScreenStyles.tagInput}
            placeholder="태그"
            placeholderTextColor={Colors.white}
            value={album_tag}
            onChangeText={setAlbumTag}
          />
          <TextInput // location
            style={MissionPostScreenStyles.locationInput}
            placeholder="위치"
            placeholderTextColor={Colors.white}
            value={location}
            onChangeText={setLocation}
          />


        {commentComponents.map(({ id }) => (
            <View key={id} style={MissionPostScreenStyles.commentWrapper}>
                <CommentCreate />
                <TouchableOpacity
                onPress={() => handleRemoveComment(id)}
                style={MissionPostScreenStyles.deleteButtonWrapper}
                >
                <Text style={MissionPostScreenStyles.deleteButton}>삭제</Text>
                </TouchableOpacity>
            </View>
        ))}

          <TouchableOpacity onPress={handleAddComment}>
            <Image
              style={MissionPostScreenStyles.plusIconForComments}
              source={require('../../assets/icons/plusIcon.png')}
            />
          </TouchableOpacity>
        </ScrollView>

        <View style={MissionPostScreenStyles.commonButton}>
          <CommonButton
            title="완료"
            onPress={handleSubmit} // TODO : 멤버 수정
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MissionPostScreen;
