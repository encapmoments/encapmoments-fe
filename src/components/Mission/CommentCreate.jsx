import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import CommentCreateStyles from "./CommentCreateStyles";

export const CommentCreate = ({
  commentId,
  selectedMember,
  onMemberSelect,
  familyMembers = [],
}) => {
  const [comment, setComment] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // Props로 받은 familyMembers가 없거나 비어있을 경우 기본값 설정
  const memberList = familyMembers.length > 0 ? familyMembers : ["구성원1", "구성원2"];

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
            {memberList.map(member => (
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
