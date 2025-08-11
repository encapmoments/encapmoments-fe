import { StyleSheet } from "react-native";
import { Colors, Spacing, Typography, Fontsizes } from '../../styles/stylesIndex';

const getCategoryStyles = (width, height) => StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.button,
        flex: 1,
        justifyContent: 'center',
        borderRadius: Spacing.lg,
    },
    categoryText: {
        ...Typography.bamin1,
        color: Colors.white,
        textAlign: 'center',
        fontSize: Fontsizes.md,
    },
});

export default getCategoryStyles;
