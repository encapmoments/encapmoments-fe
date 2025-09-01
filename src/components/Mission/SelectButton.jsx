import React from "react";
import { TouchableOpacity, Text, useWindowDimensions } from "react-native";
import SelectButtonStyles from "./SelectButtonStyles";

const SelectButton = ({ onPress }) => {
    const { width, height } = useWindowDimensions();
    const buttonStyles = SelectButtonStyles(width, height);

    return (
        <TouchableOpacity style={buttonStyles.selectWrapper} onPress={onPress}>
            <Text style={buttonStyles.selectText}>선택</Text>
        </TouchableOpacity>
    );
};

export default SelectButton;
