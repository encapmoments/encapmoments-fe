import React from "react";
import { TouchableOpacity, Text } from "react-native";
import CommonButtonStyles from "./CommonButtonStyles";

const CommonButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[CommonButtonStyles.commonButton, style]}>
      <Text style={CommonButtonStyles.commonButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
