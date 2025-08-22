import { StyleSheet } from "react-native";
import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";

// const { width, height } = Dimensions.get('window');

const getLoginScreenStyles = (width, height) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "red",
    },
    safePadding: {
      padding: "5%",
    },
    commonButton: {
      marginTop: height * 0.06,
    },
    backgroundStyle: {
      backgroundColor: Colors.basic,
      flex: 1,
    },

    loginText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.lg,
      alignItems: "center",
      alignSelf: "center",
      marginTop: height * 0.15,
      marginBottom: height * 0.02,
    },

    forgotPW: {
      ...Typography.bamin1,
      color: Colors.orange,
      marginTop: height * 0.02,
      marginLeft: width * 0.63,
      fontSize: Fontsizes.xs,
    },
    donthaveAccount: {
      ...Typography.bamin1,
      color: Colors.graytext2,
      marginTop: height * 0.08,
      alignSelf: "center",
      fontSize: Fontsizes.sm,
    },
    signUp: {
      ...Typography.bamin1,
      color: Colors.orange,
      fontSize: Fontsizes.sm,
    },
    orConnect: {
      ...Typography.bamin1,
      color: Colors.graytext2,
      marginTop: height * 0.03,
      alignSelf: "center",
      fontSize: Fontsizes.sm,
    },

    findPassWordDescription: {
      color: Colors.graytext2,
      alignSelf: "center",
      marginBottom: height * 0.04,
      textAlign: "center",
      fontSize: Fontsizes.sm,
    },
    findPadding: {},

    setProfileImageWrapper: {
      alignSelf: "center",
      width: width * 0.6,
      height: width * 0.6,
      borderRadius: width * 0.5,
      backgroundColor: Colors.missionInput,
      borderColor: Colors.basic,
      borderWidth: 1,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    setProfileImage: {
      width: width * 0.6,
      height: width * 0.6,
      resizeMode: "cover",
    },
    pencilIconWrapper: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: [
        { translateX: -((width * 0.08) / 2) },
        { translateY: -((width * 0.08) / 2) },
      ],
      width: width * 0.08,
      height: width * 0.08,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: Spacing.md,
    },
    pencilIcon: {
      width: width * 0.08,
      height: width * 0.08,
      opacity: 0.5,
    },
    setProfileImageDescription: {
      ...Typography.bamin1,
      color: Colors.graytext2,
      fontSize: Fontsizes.sm,
      textAlign: "center",
      marginTop: height * 0.02,
      marginBottom: height * -0.02,
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
    plusIcon: {
      opacity: 0.5,
      width: width * 0.15,
      height: width * 0.15,
    },
    paddings: {
      padding: "5%",
    },
  });

export default getLoginScreenStyles;
