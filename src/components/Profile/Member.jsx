import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, useWindowDimensions, Modal, TextInput, Alert } from 'react-native';

const Member = ({ members, setMembers, styles }) => {
    const { width, height } = useWindowDimensions();
    const [modalVisible, setModalVisible] = useState(false);
    const [editingMember, setEditingMember] = useState(null);
    const [tempName, setTempName] = useState('');

    const backgroundColors = [
        '#FFB3BA',
        '#BAFFC9',
        '#BAE1FF',
        '#FFFFBA',
        '#FFDFBA',
        '#E0BBE4',
        '#FFB3E6',
        '#B3E5D1',
    ];

    const getRandomColor = () => {
        return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    };

    const addMember = () => {
        const newMember = {
            id: Date.now(),
            name: '',
            backgroundColor: getRandomColor(),
        };
        setMembers([...members, newMember]);
        openEditModal(newMember);
    };

    const removeMember = (id) => {
        if (members.length <= 1) {
            Alert.alert('알림', '최소 1명의 구성원이 필요합니다.');
            return;
        }
        Alert.alert(
            '구성원 삭제',
            '이 구성원을 삭제하시겠습니까?',
            [
                { text: '취소', style: 'cancel' },
                {
                    text: '삭제',
                    onPress: () => setMembers(members.filter(member => member.id !== id)),
                },
            ]
        );
    };

    const openEditModal = (member) => {
        setEditingMember(member);
        setTempName(member.name);
        setModalVisible(true);
    };

    const saveNameEdit = () => {
        if (tempName.trim() === '') {
            Alert.alert('알림', '이름을 입력해주세요.');
            return;
        }
        setMembers(members.map(member =>
            member.id === editingMember.id ? { ...member, name: tempName.trim() } : member
        ));
        setModalVisible(false);
        setEditingMember(null);
        setTempName('');
    };

    const cancelEdit = () => {
        setModalVisible(false);
        setEditingMember(null);
        setTempName('');
    };

    return (
        <View style={styles.membersContainer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.membersScrollView}
                contentContainerStyle={styles.membersScrollContent}
            >
                {members.map((member) => (
                    <View key={member.id} style={styles.memberItem}>
                        <TouchableOpacity
                            style={[styles.memberCircle, { backgroundColor: member.backgroundColor }]}
                            onPress={() => openEditModal(member)}
                            onLongPress={() => removeMember(member.id)}
                        >
                            <Text
                                style={styles.memberText}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {member.name || '이름'}
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

            {/* 이름 편집 모달 */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={cancelEdit}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>구성원 이름 입력</Text>
                        <TextInput
                            style={styles.modalInput}
                            value={tempName}
                            onChangeText={setTempName}
                            placeholder="이름을 입력하세요"
                            autoFocus={true}
                            maxLength={10}
                        />
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.modalCancelButton} onPress={cancelEdit}>
                                <Text style={styles.modalCancelText}>취소</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalSaveButton} onPress={saveNameEdit}>
                                <Text style={styles.modalSaveText}>저장</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Member;
