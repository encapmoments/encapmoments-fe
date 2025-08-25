import { Colors, Typography, Spacing, Fontsizes } from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const SelectButtonStyles = (width, height) => StyleSheet.create({
    selectWrapper: {
        width: width * 0.15,
        height: height * 0.03,
        borderRadius: Spacing.xs,
        backgroundColor: Colors.button,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectText: {
        color: Colors.white,
        fontSize: Fontsizes.xs,
        ...Typography.bamin1,
        textAlign: 'center',
    },
});

export default SelectButtonStyles;
