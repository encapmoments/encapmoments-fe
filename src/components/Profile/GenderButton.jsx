import { Text, TouchableOpacity, useWindowDimensions } from "react-native";
import getGenderButtonStyles from "./GenderButtonStyles";

const GenderButton = ({ gender, selectedGender, onGenderSelect }) => {
    const { width, height } = useWindowDimensions();
    const genderStyles = getGenderButtonStyles(width, height);

    const isSelected = selectedGender === gender;

    return (
        <TouchableOpacity
            style={[
                genderStyles.genderWrapper,
                isSelected && genderStyles.selectedGenderWrapper,
            ]}
            onPress={() => onGenderSelect(gender)}
        >
            <Text style={[
                genderStyles.genderText,
                isSelected && genderStyles.selectedGenderText,
            ]}>
                {gender}
            </Text>
        </TouchableOpacity>
    );
};

export default GenderButton;
