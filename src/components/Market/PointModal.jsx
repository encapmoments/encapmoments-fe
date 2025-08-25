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

const PointModal = ({ isVisible, onClose, onPointSelect }) => {
  const { width, height } = useWindowDimensions();
  const modalStyles = getCategoryModalStyles(width, height);
  const [selectedUsage, setSelectedUsage] = useState(null);
  const usageOptions = ["~1000p", "1001~2000p", "2000~3000p", "3000p~"];

  const handlePointPress = usage => {
    setSelectedUsage(usage);
  };

  const handleConfirm = () => {
    if (selectedUsage && onPointSelect) {
      onPointSelect(selectedUsage);
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
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={handleCancel}>
        <View style={modalStyles.overlay}>
          <TouchableWithoutFeedback>
            <View style={modalStyles.modalContainer}>
              <Text style={modalStyles.modalTitle}>포인트 범위 선택</Text>
              <View style={modalStyles.categoryContainer}>
                {usageOptions.map(usage => (
                  <TouchableOpacity
                    key={usage}
                    style={[
                      modalStyles.categoryButton,
                      selectedUsage === usage &&
                        modalStyles.categoryButtonSelected,
                    ]}
                    onPress={() => handlePointPress(usage)}>
                    <Text style={modalStyles.categoryButtonText}>{usage}</Text>
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

export default PointModal;
