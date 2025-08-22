import {
  Colors,
  Fontsizes,
  Spacing,
  Typography,
} from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const getUpdateModalStyles = (width, height) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: "rgba(96, 64, 41, 0.3)",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 10,
      overflow: "hidden",
    },
    editButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    deleteButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    editText: {
      fontSize: width * 0.035,
      ...Typography.bamin1,
      color: "#1B1E28",
      marginTop: height * 0.02,
    },
    deleteText: {
      fontSize: width * 0.035,
      ...Typography.bamin1,
      color: "#F50000",
      marginBottom: height * 0.02,
    },
  });

export default getUpdateModalStyles;
