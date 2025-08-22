import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const getWeeklyStyles = (width, height) =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: Colors.white,
      width: width * 0.8,
      height: height * 0.23,
      borderRadius: Spacing.lg,
      marginBlock: height * 0.02,
    },
    weeklyImage: {
      width: width * 0.3,
      height: height * 0.2,
      borderRadius: Spacing.lg,
      marginLeft: width * 0.02,
      marginTop: height * 0.012,
    },
    weeklyTitle: {
      position: "absolute",
      marginLeft: width * 0.36,
      marginTop: height * 0.03,
      ...Typography.bamin1,
      fontSize: Fontsizes.md,
    },
    weeklyPoint: {
      position: "absolute",
      marginLeft: width * 0.36,
      marginTop: height * 0.08,
      ...Typography.bamin1,
      fontSize: Fontsizes.sm,
      color: Colors.black,
    },
    weeklyPointP: {
      position: "absolute",
      marginLeft: width * 0.25,
      ...Typography.bamin1,
      fontSize: Fontsizes.sm,
      color: Colors.orange,
    },
  });

export default getWeeklyStyles;
