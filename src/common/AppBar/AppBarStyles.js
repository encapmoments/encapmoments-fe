import { StyleSheet } from "react-native";
import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";

const getAppBarStyles = (width, height) =>
  StyleSheet.create({
    AppBar: {
      backgroundColor: Colors.basic,
      height: height * 0.15,
      width: width,
      overflow: "hidden",
    },

    AppBarCoverWrapper: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 0,
    },
    AppBarCoverContent: {
      flexDirection: "row",
    },
    AppBarCover: {
      width: width,
      height: height * 0.15,
      resizeMode: "stretch",
      opacity: 0.3,
    },
    logoContainer: {
      position: "absolute",
      left: width * 0.04,
      top: height * 0.03,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
    },
    logoIcon: {
      width: width * 0.12,
      height: width * 0.12,
      resizeMode: "contain",
    },
    logoText: {
      width: width * 0.2,
      height: height * 0.035,
      resizeMode: "contain",
    },
    AppBarAlarmWrapper: {
      position: "absolute",
      left: width * 0.7,
      top: height * 0.05,
      width: width * 0.12,
      height: width * 0.12,
      borderRadius: Spacing.xl,
      backgroundColor: Colors.white,
      borderColor: Colors.white,
      borderWidth: 1,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2,
    },
    AppBarAlarm: {
      width: width * 0.07,
      height: width * 0.07,
      resizeMode: "cover",
    },

    AppBarPersonWrapper: {
      position: "absolute",
      left: width * 0.85,
      top: height * 0.05,
      width: width * 0.12,
      height: width * 0.12,
      borderRadius: Spacing.xl,
      backgroundColor: Colors.white,
      borderColor: Colors.white,
      borderWidth: 1,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2,
    },
    AppBarPerson: {
      width: width * 0.09,
      height: width * 0.09,
      resizeMode: "cover",
    },

    handleBackArrow: {
      zIndex: 2,
    },
  });

export default getAppBarStyles;
