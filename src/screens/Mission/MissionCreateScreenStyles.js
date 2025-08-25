import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";

import { StyleSheet } from "react-native";

const getMissionCreateScreenStyles = (width, height) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: Colors.basic,
    },
    backgroundStyle: {
      flex: 1,
    },
    backArrow: {
      width: width * 0.12,
      height: width * 0.12,
    },
    touchBackArrow: {
      position: "absolute",
      top: height * 0.02,
      left: width * 0.05,
      width: width * 0.12,
      height: width * 0.12,
      zIndex: 10,
    },
    contentContainer: {
      paddingTop: height * 0.08,
      paddingBottom: height * 0.02,
    },
    missionText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.lg,
      textAlign: "center",
      marginTop: height * 0.04,
    },
    commonButton: {
      marginTop: height * 0.05,
      marginHorizontal: "5%",
    },
    loadingContainer: {
      marginTop: height * 0.05,
      alignItems: "center",
      justifyContent: "center",
      height: height * 0.06,
    },
    missionDescriptionText: {
      ...Typography.bamin1,
      marginTop: height * 0.015,
      color: Colors.graytext,
      fontSize: Fontsizes.sm,
      textAlign: "center",
    },
    missionTitleText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.mm,
      marginTop: height * 0.05,
      marginLeft: width * 0.06,
    },
    inputTextWrapper: {
      marginTop: height * 0.02,
      backgroundColor: Colors.missions,
      width: width * 0.8,
      alignSelf: "center",
      borderRadius: Spacing.lg,
      minHeight: height * 0.22,
      paddingVertical: height * 0.02,
    },
    inputText: {
      ...Typography.bamin2,
      fontSize: Fontsizes.sm,
      color: Colors.black,
      backgroundColor: Colors.missionInput,
      alignSelf: "center",
      width: "90%",
      minHeight: height * 0.18,
      textAlignVertical: "top",
      borderRadius: Spacing.lg,
      padding: width * 0.03,
    },
  });

export default getMissionCreateScreenStyles;
