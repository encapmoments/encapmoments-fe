import { Text, TouchableOpacity, useWindowDimensions } from "react-native";
import getGenderButtonStyles from "./GenderButtonStyles";

const GenderButton = ({ gender }) => {
    const { width, height } = useWindowDimensions();
    const genderStyles = getGenderButtonStyles(width, height);

    return (
        <TouchableOpacity style={genderStyles.genderWrapper}>
            <Text style={genderStyles.genderText}>{gender}</Text>
        </TouchableOpacity>
    );
};

export default GenderButton;
