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
        marginLeft: width * 0.02,
    },
    genderText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.md,
        color: Colors.white,
        textAlign: 'center',
    },
});

export default getGenderButtonStyles;
