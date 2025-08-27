import { StyleSheet } from "react-native";
import { Colors, Typography, Spacing, Fontsizes } from "../../styles/stylesIndex";

const ProductStyles = (width, height) => StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        alignItems: 'center',
    },
    productWrapper: {
        display: 'flex',
        backgroundColor: Colors.white,
        width: width * 0.8,
        height: height * 0.67,
        borderRadius: Spacing.lg,
        marginTop: height * 0.11,
    },
    productImage: {
        display: 'flex',
        resizeMode: "cover",
        alignSelf: 'center',
        marginTop: height * 0.02,
        borderRadius: Spacing.lg,
        width: width * 0.66,
        height: height * 0.25,
    },
    productText: {
        ...Typography.bamin1,
        marginLeft: width * 0.05,
        paddingTop: height * 0.02,
        fontSize: Fontsizes.md,
    },
    pointOrange: {
        ...Typography.bamin1,
        color: Colors.orange,
    },
    pointInsufficientOrange: {
        color: Colors.red,
    },
    pointWrapper: {
        backgroundColor: Colors.basic,
        borderRadius: Spacing.lg,
        width: width * 0.65,
        height: height * 0.17,
        alignSelf: 'center',
        gap: height * 0.02,
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.05,
        justifyContent: 'center',
        marginTop: height * 0.035,
    },
    point: {
        ...Typography.bamin1,
        fontSize: Fontsizes.xs,
    },
    pointInsufficient: {
        color: Colors.red,
    },
    pointMinus: {
        ...Typography.bamin1,
        fontSize: Fontsizes.xs,
        opacity: 0.5,
    },
    pointBar: {
        alignSelf: 'center',
        width: width * 0.57,
        borderWidth: 0.3,
        borderStyle: 'solid',
        borderColor: 'black',
    },
});

export default ProductStyles;
