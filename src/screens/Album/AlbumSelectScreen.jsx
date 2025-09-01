import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import AlbumSelectScreenStyles from "./AlbumSelectScreenStyles";
import { TabBar } from "../../common/commonIndex";
import Comment from "../../components/Album/Comment";
import { useGetAlbum } from "../../viewmodels/albumViewModels";
import useAccessToken from "../../models/accessToken";
import { deleteAlbum, getComments } from "../../models/album";
import { getMembers } from "../../models/profile";
import { SafeAreaView } from "react-native-safe-area-context";

const AlbumSelectScreen = ({ navigation }) => {
  const accessToken = useAccessToken();
  const route = useRoute();
  const { album_id } = route.params;

  const { albums, loading } = useGetAlbum(accessToken);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(() => {
    const loadFamilyMembers = async () => {
      try {
        const members = await getMembers(accessToken);
        console.log("로드된 가족 구성원:", members);
        setFamilyMembers(members);
      } catch (error) {
        console.error("가족 구성원 로드 실패:", error);
        setFamilyMembers([]);
      }
    };

    loadFamilyMembers();
  }, [accessToken]);

  const handleDelete = () => {
    Alert.alert("앨범 삭제", "정말 이 앨범을 삭제하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "삭제",
        style: "destructive",
        onPress: async () => {
          try {
            const result = await deleteAlbum({ album_id }, accessToken);
            if (result.success) {
              Alert.alert("삭제 완료", "앨범이 삭제되었습니다.");
              navigation.navigate("Album");
            } else {
              Alert.alert("삭제 실패", result.message || "다시 시도해주세요.");
            }
          } catch (err) {
            console.error(err);
            Alert.alert("오류 발생", "삭제 중 문제가 발생했습니다.");
          }
        },
      },
    ]);
  };

  const loadComments = useCallback(async () => {
    try {
      setLoadingComments(true);
      const commentsData = await getComments({ album_id }, accessToken);
      console.log("받은 댓글 데이터:", commentsData);

      const enhancedComments = commentsData.map((comment, index) => {
        if (comment.member_name === "알 수 없음" || !comment.member_name) {
          const memberIndex = index % familyMembers.length;
          const assignedMember = familyMembers[memberIndex];
          if (assignedMember) {
            return {
              ...comment,
              member_name: assignedMember.member_name,
              member_image: assignedMember.member_image,
            };
          }
        } else {
          const actualMember = familyMembers.find(member =>
            member.member_name === comment.member_name
          );
          if (actualMember) {
            return {
              ...comment,
              member_image: actualMember.member_image || comment.member_image,
            };
          }
        }
        return comment;
      });

      console.log("매칭된 댓글 데이터:", enhancedComments);
      setComments(enhancedComments);
    } catch (error) {
      console.error("댓글 조회 실패:", error);
      setComments([]);
    } finally {
      setLoadingComments(false);
    }
  }, [album_id, accessToken, familyMembers]);

  // 앨범이 로드되고 가족 구성원 정보가 있을 때 댓글 로드
  useEffect(() => {
    if (!loading && familyMembers.length > 0) {
      const album = albums.find(a => a.album_id === album_id);
      setSelectedAlbum(album);
      if (album) {
        loadComments();
      }
    }
  }, [albums, loading, album_id, familyMembers, loadComments]);

  if (loading || !selectedAlbum) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <SafeAreaView style={AlbumSelectScreenStyles.safeArea}>
        <View style={AlbumSelectScreenStyles.backgroundStyle}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={AlbumSelectScreenStyles.touchBackArrow}>
            <Image
              style={AlbumSelectScreenStyles.backArrow}
              source={require("../../assets/icons/backArrowWrapper.png")}
            />
          </TouchableOpacity>
          <Image
            style={AlbumSelectScreenStyles.albumImage}
            source={
              typeof selectedAlbum.album_image === "string"
                ? { uri: selectedAlbum.album_image }
                : selectedAlbum.album_image
            }
          />
          <View style={AlbumSelectScreenStyles.albumInfo}>
            <Text style={AlbumSelectScreenStyles.albumTitle}>
              {selectedAlbum.album_title}
            </Text>
            <Text style={AlbumSelectScreenStyles.albumTag}>
              #{selectedAlbum.album_tag}
            </Text>
            <Text style={AlbumSelectScreenStyles.albumDate}>
              2025.03.25 (화)
            </Text>

            <View style={AlbumSelectScreenStyles.albumCommentsWrapper}>
              <ScrollView style={AlbumSelectScreenStyles.albumComments}>
                {loadingComments ? (
                  <ActivityIndicator size="small" style={{ marginVertical: 20 }} />
                ) : comments.length > 0 ? (
                  comments.map(comment => (
                    <Comment
                      key={comment.comment_id}
                      memberImage={comment.member_image}
                      memberName={comment.member_name}
                      commentText={comment.comment_text}
                    />
                  ))
                ) : (
                  <Text style={{ textAlign: 'center', marginVertical: 20, color: '#666' }}>
                    아직 댓글이 없습니다.
                  </Text>
                )}
                <View style={AlbumSelectScreenStyles.commentLastText}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("MissionPost", {
                        album_id: album_id,
                        mission_type: selectedAlbum?.mission_type,
                      })
                    }>
                    <Text style={AlbumSelectScreenStyles.commentLastTextUpdate}>
                      수정
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleDelete}>
                    <Text style={AlbumSelectScreenStyles.commentLastTextDelete}>
                      삭제
                    </Text>
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
