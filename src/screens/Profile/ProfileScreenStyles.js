import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const boxText = {
  ...Typography.bamin2,
  color: Colors.orange,
  alignSelf: "center",
  justifyContent: "center",
};

const getProfileScreenStyles = (width, height) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    backgroundStyle: {
      backgroundColor: Colors.basic,
      flex: 1,
    },
    topStyle: {
      flexDirection: "row",
      marginTop: height * 0.055,
      justifyContent: "center",
      alignItems: "center",
    },
    mainText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.mm,
      textAlign: "center",
    },
    profileImageWrapper: {
      alignSelf: "center",
      width: width * 0.24,
      height: width * 0.24,
      borderRadius: width * 0.24,
      marginTop: height * 0.05,
      backgroundColor: Colors.white,
      borderColor: Colors.white,
      borderWidth: 1,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    profileImage: {
      width: width * 0.24,
      height: width * 0.24,
      resizeMode: "cover",
    },
    nicknameText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.mm,
      textAlign: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginTop: height * 0.02,
    },
    boxWrapper: {
      backgroundColor: Colors.white,
      borderRadius: Spacing.lg,
      alignSelf: "center",
      justifyContent: "center",
      padding: Spacing.xs,
      width: width * 0.8,
      height: height * 0.11,
      marginTop: height * 0.05,
      marginBottom: height * 0.03,
    },
    boxText1: {
      ...Typography.bamin2,
      fontSize: Fontsizes.md,
      color: Colors.black,
      alignSelf: "center",
      justifyContent: "center",
    },

    boxText2: {
      ...boxText,
      fontSize: Fontsizes.mdm,
      marginTop: height * -0.01,
    },
    boxText2_2: {
      ...boxText,
      fontSize: Fontsizes.md,
      marginTop: height * -0.01,
    },
    box: {
      flexDirection: "row",
      alignSelf: "center",
    },
  });

export default getProfileScreenStyles;
