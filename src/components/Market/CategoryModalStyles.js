import { StyleSheet } from "react-native";
import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";

const getCategoryModalStyles = (width, height) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      backgroundColor: Colors.white,
      borderRadius: Spacing.lg,
      padding: width * 0.06,
      width: width * 0.85,
      maxHeight: height * 0.75,
    },
    modalTitle: {
      ...Typography.bamin1,
      fontSize: Fontsizes.lg,
      color: Colors.black,
      textAlign: "center",
      marginBottom: height * 0.03,
    },
    categoryContainer: {
      marginBottom: height * 0.02,
    },
    categoryButton: {
      backgroundColor: Colors.button,
      borderRadius: Spacing.lg,
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.05,
      marginBottom: height * 0.015,
      alignItems: "center",
    },
    categoryButtonSelected: {
      backgroundColor: Colors.orange,
    },
    categoryButtonText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.md,
      color: Colors.white,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: height * 0.02,
    },
    cancelButton: {
      backgroundColor: Colors.graytext,
      borderRadius: Spacing.lg,
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.08,
      alignItems: "center",
      flex: 1,
      marginRight: width * 0.02,
    },
    confirmButton: {
      backgroundColor: Colors.orange,
      borderRadius: Spacing.lg,
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.08,
      alignItems: "center",
      flex: 1,
      marginLeft: width * 0.02,
    },
    buttonText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.md,
      color: Colors.white,
    },
  });

export default getCategoryModalStyles;
