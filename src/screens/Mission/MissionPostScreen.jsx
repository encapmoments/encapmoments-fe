import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import MissionPostScreenStyles from './MissionPostScreenStyles';
import { CommentCreate } from '../../components/Mission/CommentCreate';
import Colors from '../../styles/colors';
import { CommonButton } from '../../common/commonIndex';
import { PixelRatio } from 'react-native';

const MissionPostScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [commentComponents, setCommentComponents] = useState([{ id: Date.now() }]);

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

      <View style={MissionPostScreenStyles.missionInfo}>
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={MissionPostScreenStyles.scroll}
        >
          <TextInput
            style={MissionPostScreenStyles.titleInput}
            placeholder="제목"
            placeholderTextColor={Colors.white}
          />
          <TextInput
            style={MissionPostScreenStyles.tagInput}
            placeholder="태그"
            placeholderTextColor={Colors.white}
          />
          <TextInput
            style={MissionPostScreenStyles.locationInput}
            placeholder="위치"
            placeholderTextColor={Colors.white}
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
            onPress={() => navigation.navigate('Album')}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MissionPostScreen;
