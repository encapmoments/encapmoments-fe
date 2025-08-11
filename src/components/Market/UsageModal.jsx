import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
import getCategoryModalStyles from './CategoryModalStyles';

const UsageModal = ({ isVisible, onClose, onUsageSelect }) => {
    const { width, height } = useWindowDimensions();
    const modalStyles = getCategoryModalStyles(width, height);
    const [selectedUsage, setSelectedUsage] = useState(null);
    const usageOptions = ['전체', '사용 가능', '사용 완료'];

    const handleUsagePress = (usage) => {
        setSelectedUsage(usage);
    };

    const handleConfirm = () => {
        if (selectedUsage && onUsageSelect) {
            onUsageSelect(selectedUsage);
        }
        setSelectedUsage(null);
        onClose();
    };

    const handleCancel = () => {
        setSelectedUsage(null);
        onClose();
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={handleCancel}>
                <View style={modalStyles.overlay}>
                    <TouchableWithoutFeedback>
                        <View style={modalStyles.modalContainer}>
                            <Text style={modalStyles.modalTitle}>사용 여부 선택</Text>
                            <View style={modalStyles.categoryContainer}>
                                {usageOptions.map((usage) => (
                                    <TouchableOpacity
                                        key={usage}
                                        style={[
                                            modalStyles.categoryButton,
                                            selectedUsage === usage && modalStyles.categoryButtonSelected,
                                        ]}
                                        onPress={() => handleUsagePress(usage)}
                                    >
                                        <Text style={modalStyles.categoryButtonText}>
                                            {usage}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={modalStyles.buttonContainer}>
                                <TouchableOpacity
                                    style={modalStyles.cancelButton}
                                    onPress={handleCancel}
                                >
                                    <Text style={modalStyles.buttonText}>취소</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={modalStyles.confirmButton}
                                    onPress={handleConfirm}
                                >
                                    <Text style={modalStyles.buttonText}>확인</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default UsageModal;
