import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const getMissionSelectScreenStyles = (width, height) =>
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
    missionImage: {
      width: width * 1.0,
      height: height * 0.55,
    },
    missionInfo: {
      height: height * 0.7,
      backgroundColor: Colors.white,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    missionTitle: {
      ...Typography.bamin1,
      marginLeft: width * 0.1,
      marginTop: height * 0.03,
      fontSize: Fontsizes.lg,
    },
    missionSubTitle1: {
      ...Typography.bamin1,
      marginLeft: width * 0.1,
      marginTop: height * 0.03,
      fontSize: Fontsizes.mm,
    },
    missionSubTitle2: {
      ...Typography.bamin1,
      marginLeft: width * 0.1,
      marginTop: height * 0.1,
      fontSize: Fontsizes.mm,
    },
    missionPoint: {
      ...Typography.bamin1,
      fontSize: Fontsizes.sm,
      marginLeft: width * 0.1,
      marginTop: height * 0.01,
    },
    missionPointP: {
      color: Colors.orange,
    },
    missionDescription: {
      width: width * 0.65,
      ...Typography.bamin1,
      fontSize: Fontsizes.sm,
      marginTop: height * 0.008,
      color: Colors.graytext,
      marginLeft: width * 0.1,
      lineHeight: Spacing.input,
    },
    paddings: {
      padding: "5%",
    },
    // commonButton: {
    //     position: 'absolute',
    //     alignSelf: 'center',
    //     justifyContent: 'center',
    //     width: width * 0.9,
    // }
  });

export default getMissionSelectScreenStyles;
