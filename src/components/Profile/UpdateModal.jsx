import React from 'react';
import { Modal, TouchableOpacity, View, Text, Pressable } from 'react-native';
import getUpdateModalStyles from './UpdateModalStyles';

const UpdateModal = ({ 
    visible, 
    onClose, 
    onEdit, 
    onDelete, 
    position = { x: 200, y: 400 },
    width,
    height 
}) => {
    const popupWidth = width * 0.3;
    const popupHeight = height * 0.1;
    const styles = getUpdateModalStyles(width, height);
    
    const adjustedX = Math.min(position.x, width - popupWidth - 20);
    const adjustedY = Math.min(position.y, height - popupHeight - 100);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <Pressable 
                style={{ flex: 1 }} 
                onPress={onClose}
            >
                <View style={[{ 
                    position: 'absolute', 
                    left: adjustedX, 
                    top: adjustedY,
                    width: popupWidth,
                    height: popupHeight,
                }, styles.modalContainer]}>
                    <TouchableOpacity 
                        style={styles.editButton}
                        onPress={() => {
                            onEdit();
                            onClose();
                        }}
                    >
                        <Text style={styles.editText}>
                            수정하기
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.deleteButton}
                        onPress={() => {
                            onDelete();
                            onClose();
                        }}
                    >
                        <Text style={styles.deleteText}>
                            삭제하기
                        </Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </Modal>
    );
};

export default UpdateModal;