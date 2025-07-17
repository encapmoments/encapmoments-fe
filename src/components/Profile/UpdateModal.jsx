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
    height,
}) => {
    const popupWidth = width * 0.22;
    const popupHeight = height * 0.09;
    const styles = getUpdateModalStyles(width, height);

    const adjustedX = Math.min(position.x + width * 0.02, width - popupWidth - 10);
    const adjustedY = Math.max(position.y - height * 0.1, 10);

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
