import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { launchImageLibrary } from "react-native-image-picker";
import MissionPostScreenStyles from "./MissionPostScreenStyles";
import { CommentCreate } from "../../components/Mission/CommentCreate";
import Colors from "../../styles/colors";
import { CommonButton } from "../../common/commonIndex";
import useAccessToken from "../../models/accessToken";
import { postAlbum, updateAlbum, getAlbums, createComment } from "../../models/album";
import { getMembers } from "../../models/profile";
import { useGetAlbum } from "../../viewmodels/albumViewModels";

const MissionPostScreen = ({ navigation, route }) => {
  const accessToken = useAccessToken();
  const [album_title, setAlbumTitle] = useState("");
  const [album_tag, setAlbumTag] = useState("");
  const [location, setLocation] = useState("");
  const [familyMembers, setFamilyMembers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(true);

  const [selectedImage, setSelectedImage] = useState(null);
  const [commentComponents, setCommentComponents] = useState([
    { id: Date.now(), selectedMember: null, commentText: "" },
  ]);
  const { mission_type, album_id, mission_id } = route.params;

  const { albums, loading } = useGetAlbum(accessToken);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const isEditMode = !!album_id;

  // 가족 구성원 데이터 로드
  useEffect(() => {
    const loadFamilyMembers = async () => {
      try {
        setLoadingMembers(true);
        const members = await getMembers(accessToken);
        const memberNames = members.map(member => member.member_name);
        setFamilyMembers(memberNames);
      } catch (error) {
        console.error("가족 구성원 로드 실패:", error);
        setFamilyMembers(["구성원1", "구성원2"]);
      } finally {
        setLoadingMembers(false);
      }
    };

    loadFamilyMembers();
  }, [accessToken]);

  useEffect(() => {
    if (!loading && isEditMode) {
      const album = albums.find(a => a.album_id === album_id);
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
        mediaType: "photo",
        quality: 1,
      },
      response => {
        if (!response.didCancel && !response.errorCode) {
          const uri = response.assets?.[0]?.uri;
          if (uri) {
            setSelectedImage(uri);
          }
        }
      },
    );
  };

  const handleAddComment = () => {
    console.log("Adding comment...", commentComponents.length);
    setCommentComponents([
      ...commentComponents,
      { id: Date.now(), selectedMember: null, commentText: "" },
    ]);
  };

  const handleRemoveComment = idToRemove => {
    setCommentComponents(
      commentComponents.filter(({ id }) => id !== idToRemove),
    );
  };

  const handleMemberSelect = (commentId, member) => {
    setCommentComponents(
      commentComponents.map(comment =>
        comment.id === commentId
          ? { ...comment, selectedMember: member }
          : comment,
      ),
    );
  };

  const handleCommentTextChange = (commentId, text) => {
    setCommentComponents(
      commentComponents.map(comment =>
        comment.id === commentId
          ? { ...comment, commentText: text }
          : comment,
      ),
    );
  };

  const handleSubmit = async () => {
  if (!album_title || !selectedImage) {
    Alert.alert("제목과 이미지는 필수입니다.");
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
        accessToken,
      );
    } else {
      // 1. 앨범 생성
      result = await postAlbum(
        {
          album_title,
          album_tag,
          album_image: selectedImage,
          location,
          mission_type,
          mission_id,
        },
        accessToken,
      );

      // 2. 앨범 생성 성공 시, 댓글들도 함께 추가
      if (result.success) {
        try {
          let createdAlbumId;

          // mock일 때는 직접 반환된 album_id 사용, 아닐 때는 검색
          if (result.album_id) {
            createdAlbumId = result.album_id;
          } else {
            const createdAlbums = await getAlbums(accessToken);
            const createdAlbum = createdAlbums.find(album =>
              album.album_title === album_title &&
              album.album_tag === album_tag &&
              album.location === location
            );
            createdAlbumId = createdAlbum?.album_id;
          }

          if (createdAlbumId) {
            const commentsToAdd = commentComponents
              .filter(comment => comment.selectedMember && comment.commentText.trim())
              .map(comment => ({
                member_name: comment.selectedMember,
                comment_text: comment.commentText,
              }));

            console.log("댓글 추가 시작:", commentsToAdd);

            for (const comment of commentsToAdd) {
              try {
                await createComment({
                  album_id: createdAlbumId,
                  member_name: comment.member_name,
                  comment_text: comment.comment_text,
                }, accessToken);
                console.log("댓글 추가 성공:", comment);
              } catch (commentError) {
                console.error("댓글 추가 실패:", commentError);
              }
            }
          }
        } catch (error) {
          console.error("앨범 ID 찾기 실패:", error);
        }
      }
    }

    if (result.success) {
      navigation.navigate("Album");
    } else {
      Alert.alert("업로드 실패", result.message || "다시 시도해보세요");
    }
  } catch (err) {
    console.error(err);
    Alert.alert("오류가 발생했습니다");
  }
};

  return (
    <SafeAreaView style={MissionPostScreenStyles.safeArea}>
      <View style={MissionPostScreenStyles.backgroundStyle}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={MissionPostScreenStyles.touchBackArrow}>
          <Image
            style={MissionPostScreenStyles.backArrow}
            source={require("../../assets/icons/backArrowWrapper.png")}
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
                style={MissionPostScreenStyles.pencilIconWrapper}>
                <Image
                  source={require("../../assets/icons/pencil.png")}
                  style={MissionPostScreenStyles.pencilIcon}
                />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={handleImagePick}>
              <Image
                style={MissionPostScreenStyles.plusIcon}
                source={require("../../assets/icons/plusIcon.png")}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={MissionPostScreenStyles.missionInfo}>
          <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={false}
            style={MissionPostScreenStyles.scroll}
            contentContainerStyle={MissionPostScreenStyles.scrollContent}
            keyboardShouldPersistTaps="handled">
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

            {loadingMembers ? (
              <View style={MissionPostScreenStyles.loadingContainer}>
                <ActivityIndicator size="small" color="#666" />
                <Text style={MissionPostScreenStyles.loadingText}>
                  구성원 정보를 불러오는 중...
                </Text>
              </View>
            ) : (
              commentComponents.map(({ id, selectedMember }) => (
                <View key={id} style={MissionPostScreenStyles.commentWrapper}>
                  <View style={{ flex: 1 }}>
                    <CommentCreate
                      commentId={id}
                      selectedMember={selectedMember}
                      onMemberSelect={handleMemberSelect}
                      onCommentTextChange={handleCommentTextChange}
                      familyMembers={familyMembers}
                    />
                  </View>
                  {commentComponents.length > 1 && (
                    <TouchableOpacity
                      onPress={() => handleRemoveComment(id)}
                      style={MissionPostScreenStyles.deleteButtonWrapper}>
                      <Text style={MissionPostScreenStyles.deleteButton}>삭제</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))
            )}

            <TouchableOpacity onPress={handleAddComment}>
              <Image
                style={MissionPostScreenStyles.plusIconForComments}
                source={require("../../assets/icons/plusIcon.png")}
              />
            </TouchableOpacity>

            <View style={MissionPostScreenStyles.commonButton}>
              <CommonButton
                title="완료"
                onPress={handleSubmit}
                disabled={loadingMembers}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MissionPostScreen;
