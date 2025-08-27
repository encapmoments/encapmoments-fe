import { StyleSheet } from "react-native";
import { Colors, Fontsizes, Spacing, Typography } from "../../styles/stylesIndex";

const PayStyles = (width, height) => StyleSheet.create({
    payWrapper: {
        alignSelf: 'flex-end',
        backgroundColor: Colors.button,
        borderRadius: Spacing.xl,
        width: width * 0.2,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
        marginTop: height * 0.04,
        marginRight: width * 0.08,
    },
    payWrapperDisabled: {
        opacity: 0.7,
    },
    payText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.xs,
        color: Colors.white,
        alignSelf: 'center',
    },
    payTextDisabled: {
        color: Colors.white,
    },
});

export default PayStyles;
