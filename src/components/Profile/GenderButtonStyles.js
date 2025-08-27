import { Colors, Spacing, Fontsizes, Typography }  from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const getGenderButtonStyles = (width, height) => StyleSheet.create({
    genderWrapper: {
        borderRadius: Spacing.sm,
        backgroundColor: Colors.button,
        justifyContent: 'center',
        alignSelf: 'center',
        width: width * 0.18,
        height: height * 0.055,
        marginLeft: width * 0.04,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedGenderWrapper: {
        backgroundColor: Colors.orange,
        borderColor: Colors.orange,
    },
    genderText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.md,
        color: Colors.white,
        textAlign: 'center',
    },
    selectedGenderText: {
        color: Colors.white,
    },
});

export default getGenderButtonStyles;
