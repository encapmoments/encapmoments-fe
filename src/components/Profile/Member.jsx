import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  Alert,
} from "react-native";
import { deleteMembers } from "../../models/profile";
import { useFocusEffect } from "@react-navigation/native";
import UpdateModal from "./UpdateModal";

const Member = ({ members, setMembers, styles, navigation, accessToken }) => {
  const { width, height } = useWindowDimensions();

  const [actionModalVisible, setActionModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [pendingNewMember, setPendingNewMember] = useState(null);

  const backgroundColors = [
    "#FFB3BA",
    "#BAFFC9",
    "#BAE1FF",
    "#FFFFBA",
    "#FFDFBA",
    "#E0BBE4",
    "#FFB3E6",
    "#B3E5D1",
  ];

  const getRandomColor = () => {
    return backgroundColors[
      Math.floor(Math.random() * backgroundColors.length)
    ];
  };

  // Member 화면에서 돌아올 때
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // route params에서 확인
        const route = navigation.getState()?.routes?.find(r => r.name === 'ProfileAccount');
        if (route?.params?.memberResult) {
          const { type, member: updatedMember } = route.params.memberResult;
          if (type === 'update' && updatedMember) {
            setMembers(prev =>
              prev.map(member =>
                member.id === updatedMember.id ? updatedMember : member,
              ),
            );
          } else if (type === 'cancel' && pendingNewMember) {
            setMembers(prev => prev.filter(member => member.id !== pendingNewMember.id));
          }

          navigation.setParams({ memberResult: undefined });
          setPendingNewMember(null);
        }
      });

      return unsubscribe;
    }, [navigation, setMembers, pendingNewMember])
  );

  const addMember = () => {
    const newMember = {
      id: Date.now(),
      name: "",
      image: null,
      gender: "",
      age: "",
      backgroundColor: getRandomColor(),
      isNewMember: true,
    };
    setMembers([...members, newMember]);
    setPendingNewMember(newMember);
    navigation.navigate("Member", {
      member: {
        id: newMember.id,
        name: newMember.name,
        image: newMember.image,
        gender: newMember.gender,
        age: newMember.age,
      },
      isNewMember: true,
      accessToken: accessToken,
    });
  };

  const removeMember = async (memberId) => {
    if (members.length <= 1) {
      Alert.alert("알림", "최소 1명의 구성원이 필요합니다.");
      return;
    }

    const member = members.find(m => m.id === memberId);
    if (!member) { return; }

    Alert.alert("구성원 삭제", "이 구성원을 삭제하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "삭제",
        onPress: async () => {
          try {
            if (!member.isNewMember && member.member_id) {
              await deleteMembers(member.member_id, accessToken);
            }
            setMembers(members.filter(m => m.id !== memberId));
            Alert.alert("성공", "구성원이 삭제되었습니다.");
          } catch (error) {
            console.error("구성원 삭제 실패:", error);
            Alert.alert("오류", "구성원 삭제에 실패했습니다.");
          }
        },
      },
    ]);
  };

  const openActionModal = (member, event) => {
    // modal 위치 지정
    const touchX = event.nativeEvent.pageX || width / 2;
    const touchY = event.nativeEvent.pageY || height / 2;

    setModalPosition({
      x: touchX,
      y: touchY,
    });
    setSelectedMember(member);
    setActionModalVisible(true);
  };

  const handleEdit = () => {
    navigation.navigate("Member", {
      member: {
        id: selectedMember.id,
        name: selectedMember.name,
        image: selectedMember.image,
        gender: selectedMember.gender,
        age: selectedMember.age,
        member_id: selectedMember.member_id,
      },
      isNewMember: false,
      accessToken: accessToken,
    });
    setActionModalVisible(false);
  };

  const handleDelete = () => {
    setActionModalVisible(false);
    removeMember(selectedMember.id);
  };



  const cancelAction = () => {
    setActionModalVisible(false);
    setSelectedMember(null);
  };

  return (
    <View style={styles.membersContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.membersScrollView}
        contentContainerStyle={styles.membersScrollContent}>
        {members.map(member => (
          <View key={member.id} style={styles.memberItem}>
            <TouchableOpacity
              style={[
                styles.memberCircle,
                { backgroundColor: member.backgroundColor },
              ]}
              onPress={event => openActionModal(member, event)}
              onLongPress={() => removeMember(member.id)}>
              <Text
                style={styles.memberText}
                numberOfLines={1}
                ellipsizeMode="tail">
                {member.name || "이름"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} onPress={addMember}>
          <View style={styles.addButtonCircle}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <UpdateModal
        visible={actionModalVisible}
        onClose={cancelAction}
        onEdit={handleEdit}
        onDelete={handleDelete}
        memberName={selectedMember?.name}
        position={modalPosition}
        width={width}
        height={height}
      />


    </View>
  );
};

export default Member;
