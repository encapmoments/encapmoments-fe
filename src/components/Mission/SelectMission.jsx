import React, { useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import SelectMissionStyles from "./SelectMissionStyles";
import SelectButton from "./SelectButton";
import GoalModal from "./GoalModal";
import MissionCategoryModal from "./MissionCategoryModal";

const SelectMission = ({ onGoalSelect, onCategorySelect, selectedGoal, selectedCategory }) => {
    const { width, height } = useWindowDimensions();
    const selectStyles = SelectMissionStyles(width, height);
    const [goalModalVisible, setGoalModalVisible] = useState(false);
    const [categoryModalVisible, setCategoryModalVisible] = useState(false);

    const handleGoalSelect = (goal) => {
        setGoalModalVisible(false);
        if (onGoalSelect) {
            onGoalSelect(goal);
        }
    };

    const handleCategorySelect = (category) => {
        setCategoryModalVisible(false);
        if (onCategorySelect) {
            onCategorySelect(category);
        }
    };

    return (
        <View style={selectStyles.backgroundStyle}>
            <View style={selectStyles.missionSelect}>
                <Text style={selectStyles.missionText}>
                    {selectedGoal || "우리 가족의 이번주 목표는 무엇인가요?"}
                </Text>
                <SelectButton onPress={() => setGoalModalVisible(true)} />
            </View>

            <View style={selectStyles.missionSelect}>
                <Text style={selectStyles.missionText}>
                    {selectedCategory && selectedCategory.length > 0
                        ? `선택한 카테고리: ${selectedCategory.join(', ')}`
                        : "미션의 카테고리를 선택해주세요!"
                    }
                </Text>
                <SelectButton onPress={() => setCategoryModalVisible(true)} />
            </View>

            <GoalModal
                isVisible={goalModalVisible}
                onClose={() => setGoalModalVisible(false)}
                onGoalSelect={handleGoalSelect}
            />

            <MissionCategoryModal
                isVisible={categoryModalVisible}
                onClose={() => setCategoryModalVisible(false)}
                onCategorySelect={handleCategorySelect}
            />
        </View>
    );
};

export default SelectMission;
