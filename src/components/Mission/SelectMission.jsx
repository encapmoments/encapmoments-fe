import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import SelectMissionStyles from "./SelectMissionStyles";
import useModal from "../../hooks/useModal";
import SelectButton from "./SelectButton";

const SelectMission = () => {
    const { width, height } = useWindowDimensions();
    const selectStyles = SelectMissionStyles(width, height);

    return (
        <View style={selectStyles.backgroundStyle}>
            <View style={selectStyles.missionSelect}>
                <Text style={selectStyles.missionText}>우리 가족의 이번주 목표는 무엇인가요?</Text>
                <SelectButton />
            </View>
            <View style={selectStyles.missionSelect}>
                <Text style={selectStyles.missionText}>미션의 1차 카테고리를 선택해주세요!</Text>
                <SelectButton />
            </View>
            <View style={selectStyles.missionSelect}>
                <Text style={selectStyles.missionText}>미션의 2차 카테고리를 선택해주세요!</Text>
                <SelectButton />
            </View>
        </View>
    );
};

export default SelectMission;
