import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const getProfileBoxStyles = (width, height) =>
  StyleSheet.create({
    boxWrapper: {
      backgroundColor: Colors.white,
      borderRadius: Spacing.lg,
      alignSelf: "center",
      justifyContent: "center",
      padding: Spacing.xs,
      width: width * 0.8,
      height: height * 0.08,
      marginTop: height * 0.02,
    },
    boxText: {
      ...Typography.bamin2,
      fontSize: Fontsizes.sm,
      alignSelf: "center",
      justifyContent: "center",
    },
    arrow: {
      width: width * 0.05,
      height: width * 0.05,
      position: "absolute",
      left: width * 0.7,
      justifyContent: "center",
      marginTop: height * 0.008,
    },
  });

export default getProfileBoxStyles;
