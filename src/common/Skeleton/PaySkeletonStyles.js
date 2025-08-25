import { StyleSheet } from "react-native";
import { Colors, Typography, Spacing, Fontsizes } from "../../styles/stylesIndex";

const PaySkeletonStyles = (width, height) => StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    modalContainer: {
        backgroundColor: Colors.white,
        borderRadius: Spacing.lg,
        padding: width * 0.08,
        width: width * 0.75,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    },
    iconContainer: {
        marginBottom: height * 0.03,
    },
    paymentIcon: {
        width: width * 0.16,
        height: width * 0.16,
        borderRadius: width * 0.08,
        backgroundColor: "#F0F8FF",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#4A4434",
    },
    paymentIconCompleted: {
        backgroundColor: "#E8F5E8",
        borderColor: "#4CAF50",
    },
    iconText: {
        fontSize: width * 0.08,
    },
    loadingIndicator: {
        marginBottom: height * 0.02,
    },
    loadingText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.md,
        color: Colors.black,
        marginBottom: height * 0.03,
        fontWeight: "600",
    },
    progressContainer: {
        width: "100%",
        marginBottom: height * 0.02,
    },
    progressBar: {
        height: 6,
        backgroundColor: "#E0E0E0",
        borderRadius: 3,
        overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#4A4434",
        borderRadius: 3,
    },
    subText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.sm,
        color: Colors.graytext,
        textAlign: "center",
        marginTop: height * 0.01,
    },
});

export default PaySkeletonStyles;
