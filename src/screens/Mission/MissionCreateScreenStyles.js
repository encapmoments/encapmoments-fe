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
    },
    backgroundStyle: {
      backgroundColor: Colors.basic,
      flex: 1,
    },
    backArrow: {
      width: width * 0.12,
      height: width * 0.12,
      position: "absolute",
      top: height * 0.03,
      left: width * 0.03,
    },

    touchBackArrow: {
      position: "absolute",
      top: height * 0.03,
      left: width * 0.03,
      width: width * 0.12,
      height: width * 0.12,
      zIndex: 10,
    },
    missionText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.lg,
      alignItems: "center",
      alignSelf: "center",
      marginTop: height * 0.12,
    },
    commonButton: {
      marginTop: height * 0.05,
    },
    missionDescriptionText: {
      ...Typography.bamin1,
      marginTop: height * 0.015,
      color: Colors.graytext,
      fontSize: Fontsizes.sm,
      alignSelf: "center",
    },
    missionTitleText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.mm,
      marginBottom: height * -0.04,
      marginTop: height * 0.05,
      marginLeft: width * 0.06,
    },
    inputTextWrapper: {
      marginTop: height * 0.05,
      backgroundColor: Colors.missions,
      width: width * 0.8,
      alignSelf: "center",
      borderRadius: Spacing.lg,
      height: height * 0.22,
    },
    inputText: {
      ...Typography.bamin2,
      fontSize: Fontsizes.sm,
      color: Colors.black,
      backgroundColor: Colors.missionInput,
      marginTop: height * 0.019,
      justifyContent: "center",
      alignSelf: "center",
      width: "90%",
      height: height * 0.18,
      textAlignVertical: "top",
      borderRadius: Spacing.lg,
    },
    scroll: {
      flexGrow: 1,
      padding: "5%",
      justifyContent: "flex-start", // 필요한 경우 'space-between'으로 변경 가능
    },
  });

export default getMissionCreateScreenStyles;
