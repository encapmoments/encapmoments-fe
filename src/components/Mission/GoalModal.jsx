import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import getCategoryModalStyles from "../Market/CategoryModalStyles";

const GoalModal = ({ isVisible, onClose, onGoalSelect }) => {
  const { width, height } = useWindowDimensions();
  const modalStyles = getCategoryModalStyles(width, height);
  const [step, setStep] = useState(1); // 1: 선택 방식, 2: 직접 입력 또는 목표 선택
  const [inputType, setInputType] = useState(null); // "direct" 또는 "preset"
  const [customGoal, setCustomGoal] = useState("");
  const [selectedPreset, setSelectedPreset] = useState(null);
  
  const presetGoals = [
    "재미있게 보내기",
    "몸과 마음을 건강하게",
    "창의적인 활동하기", 
    "가족 관계 강화하기",
    "편안하게 보내기"
  ];

  const handleInputTypeSelect = (type) => {
    setInputType(type);
    setStep(2);
  };

  const handlePresetSelect = (goal) => {
    setSelectedPreset(goal);
  };

  const handleConfirm = () => {
    let selectedGoal = null;
    
    if (inputType === "direct" && customGoal.trim()) {
      selectedGoal = customGoal.trim();
    } else if (inputType === "preset" && selectedPreset) {
      selectedGoal = selectedPreset;
    }
    
    if (selectedGoal && onGoalSelect) {
      onGoalSelect(selectedGoal);
    }
    handleReset();
    onClose();
  };

  const handleCancel = () => {
    handleReset();
    onClose();
  };

  const handleBack = () => {
    setStep(1);
    setInputType(null);
    setCustomGoal("");
    setSelectedPreset(null);
  };

  const handleReset = () => {
    setStep(1);
    setInputType(null);
    setCustomGoal("");
    setSelectedPreset(null);
  };

  const canConfirm = () => {
    if (inputType === "direct") {
      return customGoal.trim().length > 0;
    } else if (inputType === "preset") {
      return selectedPreset !== null;
    }
    return false;
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleCancel}>
      <TouchableWithoutFeedback onPress={handleCancel}>
        <View style={modalStyles.overlay}>
          <TouchableWithoutFeedback>
            <View style={modalStyles.modalContainer}>
              {step === 1 && (
                <>
                  <Text style={modalStyles.modalTitle}>목표 설정 방식</Text>
                  <View style={modalStyles.categoryContainer}>
                    <TouchableOpacity
                      style={modalStyles.categoryButton}
                      onPress={() => handleInputTypeSelect("direct")}>
                      <Text style={modalStyles.categoryButtonText}>직접 입력</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={modalStyles.categoryButton}
                      onPress={() => handleInputTypeSelect("preset")}>
                      <Text style={modalStyles.categoryButtonText}>목표 선택</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={modalStyles.buttonContainer}>
                    <TouchableOpacity
                      style={modalStyles.cancelButton}
                      onPress={handleCancel}>
                      <Text style={modalStyles.buttonText}>취소</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}

              {step === 2 && inputType === "direct" && (
                <>
                  <Text style={modalStyles.modalTitle}>목표를 입력해주세요</Text>
                  <View style={[modalStyles.categoryContainer, { marginBottom: height * 0.02 }]}>
                    <TextInput
                      style={{
                        borderWidth: 1,
                        borderColor: "#E0E0E0",
                        borderRadius: 10,
                        padding: width * 0.03,
                        fontSize: 16,
                        minHeight: height * 0.06,
                        textAlignVertical: "top",
                      }}
                      placeholder="우리 가족의 목표를 입력해주세요"
                      value={customGoal}
                      onChangeText={setCustomGoal}
                      multiline
                      maxLength={50}
                    />
                  </View>
                  <View style={modalStyles.buttonContainer}>
                    <TouchableOpacity
                      style={modalStyles.cancelButton}
                      onPress={handleBack}>
                      <Text style={modalStyles.buttonText}>이전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        modalStyles.confirmButton,
                        !canConfirm() && { backgroundColor: "#CCCCCC" }
                      ]}
                      onPress={handleConfirm}
                      disabled={!canConfirm()}>
                      <Text style={modalStyles.buttonText}>완료</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}

              {step === 2 && inputType === "preset" && (
                <>
                  <Text style={modalStyles.modalTitle}>목표를 선택해주세요</Text>
                  <View style={modalStyles.categoryContainer}>
                    {presetGoals.map(goal => (
                      <TouchableOpacity
                        key={goal}
                        style={[
                          modalStyles.categoryButton,
                          selectedPreset === goal && modalStyles.categoryButtonSelected,
                        ]}
                        onPress={() => handlePresetSelect(goal)}>
                        <Text style={modalStyles.categoryButtonText}>{goal}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View style={modalStyles.buttonContainer}>
                    <TouchableOpacity
                      style={modalStyles.cancelButton}
                      onPress={handleBack}>
                      <Text style={modalStyles.buttonText}>이전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        modalStyles.confirmButton,
                        !canConfirm() && { backgroundColor: "#CCCCCC" }
                      ]}
                      onPress={handleConfirm}
                      disabled={!canConfirm()}>
                      <Text style={modalStyles.buttonText}>확인</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default GoalModal;