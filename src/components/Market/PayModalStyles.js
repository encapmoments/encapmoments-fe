import { StyleSheet } from "react-native";
import { Colors, Typography, Spacing, Fontsizes } from "../../styles/stylesIndex";

const PayModalStyles = (width, height) => StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        backgroundColor: Colors.white,
        borderRadius: Spacing.lg,
        padding: width * 0.06,
        width: width * 0.8,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        ...Typography.bamin1,
        fontSize: Fontsizes.md,
        color: Colors.black,
        marginBottom: height * 0.02,
        fontWeight: "bold",
    },
    modalMessage: {
        ...Typography.bamin1,
        fontSize: Fontsizes.sm,
        color: Colors.black,
        textAlign: "center",
        marginBottom: height * 0.03,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        gap: width * 0.03,
        marginTop: height * 0.02,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: Colors.graytext,
        borderRadius: Spacing.sm,
        paddingVertical: height * 0.015,
        alignItems: "center",
        justifyContent: "center",
    },
    confirmButton: {
        flex: 1,
        backgroundColor: Colors.orange,
        borderRadius: Spacing.sm,
        paddingVertical: height * 0.015,
        alignItems: "center",
        justifyContent: "center",
    },
    cancelButtonText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.sm,
        color: Colors.white,
    },
    confirmButtonText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.sm,
        color: Colors.white,
    },
});

export default PayModalStyles;
