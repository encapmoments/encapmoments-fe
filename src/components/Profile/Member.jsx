import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, useWindowDimensions, Modal, TextInput, Alert } from 'react-native';
import UpdateModal from './UpdateModal';

const Member = ({ members, setMembers, styles, navigation }) => {
    const { width, height } = useWindowDimensions();
    const [modalVisible, setModalVisible] = useState(false);
    const [editingMember, setEditingMember] = useState(null);
    const [tempName, setTempName] = useState('');
    const [actionModalVisible, setActionModalVisible] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

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
        navigation.navigate('Member', {
            member: newMember,
            isNewMember: true,
            onUpdate: (updatedMember) => {
                setMembers(prev => prev.map(member =>
                    member.id === updatedMember.id ? updatedMember : member
                ));
            },
            onCancel: () => {
                setMembers(prev => prev.filter(member => member.id !== newMember.id));
            },
        });
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
                    onPress: () => {
                        setMembers(members.filter(member => member.id !== id));
                    },
                },
            ]
        );
    };

    const openActionModal = (member, event) => {
        // 터치한 Member 원의 정확한 위치를 기준으로 완전 오른쪽, 완전 위에 모달 표시
        const touchX = event.nativeEvent.pageX || width / 2;
        const touchY = event.nativeEvent.pageY || height / 2;

        setModalPosition({ 
            x: touchX, 
            y: touchY 
        });
        setSelectedMember(member);
        setActionModalVisible(true);
        };

    const handleEdit = () => {
        navigation.navigate('Member', {
            member: selectedMember,
            onUpdate: (updatedMember) => {
                setMembers(members.map(member =>
                    member.id === updatedMember.id ? updatedMember : member
                ));
            },
        });
    };

    const handleDelete = () => {
        removeMember(selectedMember.id);
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
                contentContainerStyle={styles.membersScrollContent}
            >
                {members.map((member) => (
                    <View key={member.id} style={styles.memberItem}>
                        <TouchableOpacity
                            style={[styles.memberCircle, { backgroundColor: member.backgroundColor }]}
                            onPress={(event) => openActionModal(member, event)}
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