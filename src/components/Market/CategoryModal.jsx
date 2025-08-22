import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from "react-native";
import getCategoryModalStyles from "./CategoryModalStyles";

const CategoryModal = ({ isVisible, onClose, onCategorySelect }) => {
  const { width, height } = useWindowDimensions();
  const modalStyles = getCategoryModalStyles(width, height);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ["전체", "여행", "운동", "게임", "자연", "예술"];

  const handleCategoryPress = category => {
    setSelectedCategory(category);
  };

  const handleConfirm = () => {
    if (selectedCategory && onCategorySelect) {
      onCategorySelect(selectedCategory);
    }
    setSelectedCategory(null);
    onClose();
  };

  const handleCancel = () => {
    setSelectedCategory(null);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={handleCancel}>
        <View style={modalStyles.overlay}>
          <TouchableWithoutFeedback>
            <View style={modalStyles.modalContainer}>
              <Text style={modalStyles.modalTitle}>카테고리 선택</Text>
              <View style={modalStyles.categoryContainer}>
                {categories.map(category => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      modalStyles.categoryButton,
                      selectedCategory === category &&
                        modalStyles.categoryButtonSelected,
                    ]}
                    onPress={() => handleCategoryPress(category)}>
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
                  style={modalStyles.confirmButton}
                  onPress={handleConfirm}>
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

export default CategoryModal;
