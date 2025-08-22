import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import CommentCreateStyles from "./CommentCreateStyles";

export const CommentCreate = ({
  commentId,
  selectedMember,
  onMemberSelect,
}) => {
  const [comment, setComment] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const familyMembers = ["엄마", "아빠"];

  const handleMemberSelect = member => {
    onMemberSelect(commentId, member);
    setModalVisible(false);
  };

  return (
    <View style={CommentCreateStyles.commentCreateWrapper}>
      <TouchableOpacity
        style={CommentCreateStyles.memberSelectButton}
        onPress={() => setModalVisible(true)}>
        <Text style={CommentCreateStyles.commentCreateMember}>
          {selectedMember || "구성원 선택"}
        </Text>
      </TouchableOpacity>
      <TextInput
        style={CommentCreateStyles.commentCreateDescription}
        placeholder="느낀점 작성"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={comment}
        onChangeText={setComment}
        multiline={true}
        numberOfLines={2}
      />

      {/* 구성원 선택 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={CommentCreateStyles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <View style={CommentCreateStyles.modalContainer}>
            <Text style={CommentCreateStyles.modalTitle}>구성원 선택</Text>
            {familyMembers.map(member => (
              <TouchableOpacity
                key={member}
                style={[
                  CommentCreateStyles.memberOption,
                  selectedMember === member &&
                    CommentCreateStyles.selectedMemberOption,
                ]}
                onPress={() => handleMemberSelect(member)}>
                <Text
                  style={[
                    CommentCreateStyles.memberOptionText,
                    selectedMember === member &&
                      CommentCreateStyles.selectedMemberOptionText,
                  ]}>
                  {member}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={CommentCreateStyles.cancelButton}
              onPress={() => setModalVisible(false)}>
              <Text style={CommentCreateStyles.cancelButtonText}>취소</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
