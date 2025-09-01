import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, useWindowDimensions, TouchableWithoutFeedback } from "react-native";
import getCategoryModalStyles from "../Market/CategoryModalStyles";

const MissionCategoryModal = ({ isVisible, onClose, onCategorySelect }) => {
    const { width, height } = useWindowDimensions();
    const modalStyles = getCategoryModalStyles(width, height);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const missionCategories = ["건강", "취미", "학습", "가족", "여가", "창의"];

    const handleCategoryPress = (category) => {
        setSelectedCategories(prev => {
            if (prev.includes(category)) {
                return prev.filter(item => item !== category);
            } else {
                if (prev.length >= 3) {
                    return prev;
                }
            return [...prev, category];
            }
        });
    };

    const handleConfirm = () => {
        if (selectedCategories.length > 0 && onCategorySelect) {
            onCategorySelect(selectedCategories);
        }
        setSelectedCategories([]);
        onClose();
    };

    const handleCancel = () => {
        setSelectedCategories([]);
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
                            <Text style={modalStyles.modalTitle}>
                                미션 카테고리를 선택해주세요!
                            </Text>
                            <Text style={[modalStyles.modalTitle, {
                                fontSize: 14,
                                color: '#666',
                                marginBottom: height * 0.02,
                                marginTop: -height * 0.015,
                                }]}
                            >
                                최대 3개까지 선택 가능 ({selectedCategories.length}/3)
                            </Text>
                            <View style={modalStyles.categoryContainer}>
                                {missionCategories.map(category => (
                                    <TouchableOpacity
                                        key={category}
                                        style={[
                                            modalStyles.categoryButton,
                                            selectedCategories.includes(category) && modalStyles.categoryButtonSelected,
                                            selectedCategories.length >= 3 && !selectedCategories.includes(category) && { opacity: 0.5 }
                                        ]}
                                        onPress={() => handleCategoryPress(category)}
                                        disabled={selectedCategories.length >= 3 && !selectedCategories.includes(category)}
                                    >
                                    <Text style={modalStyles.categoryButtonText}>
                                        {category}
                                            </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={modalStyles.buttonContainer}>
                                <TouchableOpacity
                                    style={modalStyles.cancelButton}
                                    onPress={handleCancel}>
                                    <Text style={modalStyles.buttonText}>취소</Text>
                                </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    modalStyles.confirmButton,
                                    selectedCategories.length === 0 && { backgroundColor: "#CCCCCC" }
                                ]}
                                onPress={handleConfirm}
                                disabled={selectedCategories.length === 0}
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

export default MissionCategoryModal;
