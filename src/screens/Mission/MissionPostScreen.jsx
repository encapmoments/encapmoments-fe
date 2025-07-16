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
import { SafeAreaView } from 'react-native-safe-area-context';
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
  const [commentComponents, setCommentComponents] = useState([{ id: Date.now(), selectedMember: null }]);
  const { mission_type, album_id, mission_id } = route.params;

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
          setSelectedImage(album.album_image);
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
    setCommentComponents([...commentComponents, { id: Date.now(), selectedMember: null }]);
  };

  const handleRemoveComment = (idToRemove) => {
    setCommentComponents(commentComponents.filter(({ id }) => id !== idToRemove));
  };

  const handleMemberSelect = (commentId, member) => {
    setCommentComponents(commentComponents.map(comment => 
      comment.id === commentId ? { ...comment, selectedMember: member } : comment
    ));
  };

  const handleSubmit = async () => {
    if (!album_title || !selectedImage) {
      Alert.alert('제목과 이미지는 필수입니다.');
      return;
    }

    try {
      let result;

      if (isEditMode) {
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
        result = await postAlbum(
          {
            album_title,
            album_tag,
            album_image: selectedImage,
            location,
            mission_type,
            mission_id,
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
    <SafeAreaView style={MissionPostScreenStyles.safeArea}>
      <View style={MissionPostScreenStyles.backgroundStyle}>
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
              <Image
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

        <KeyboardAvoidingView
          style={MissionPostScreenStyles.missionInfo}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
          <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={false}
            style={MissionPostScreenStyles.scroll}
            contentContainerStyle={MissionPostScreenStyles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <TextInput
              style={MissionPostScreenStyles.titleInput}
              placeholder="제목"
              placeholderTextColor={Colors.white}
              value={album_title}
              onChangeText={setAlbumTitle}
            />
            <TextInput
              style={MissionPostScreenStyles.tagInput}
              placeholder="태그"
              placeholderTextColor={Colors.white}
              value={album_tag}
              onChangeText={setAlbumTag}
            />
            <TextInput
              style={MissionPostScreenStyles.locationInput}
              placeholder="위치"
              placeholderTextColor={Colors.white}
              value={location}
              onChangeText={setLocation}
            />

            {commentComponents.map(({ id, selectedMember }) => (
              <View key={id} style={MissionPostScreenStyles.commentWrapper}>
                <CommentCreate 
                  commentId={id}
                  selectedMember={selectedMember}
                  onMemberSelect={handleMemberSelect}
                />
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
              onPress={handleSubmit}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default MissionPostScreen;
