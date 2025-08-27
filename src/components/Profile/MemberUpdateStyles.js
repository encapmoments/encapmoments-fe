import { Colors, Typography, Fontsizes, Spacing } from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const getMemberUpdateStyles = (width, height) =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: Colors.basic,
      flex: 1,
    },
    backArrow: {
      width: width * 0.12,
      height: width * 0.12,
      position: "absolute",
      left: width * 0.03,
    },
    touchBackArrow: {
      position: "absolute",
      left: width * 0.03,
      top: height * 0.03,
      width: width * 0.12,
      height: width * 0.12,
      zIndex: 10,
    },
    scrollWrapper: {
      flex: 1,
    },
    scroll: {
      flexGrow: 1,
      justifyContent: "space-between",
      paddingBottom: height * 0.15,
    },
    topStyle: {
      flexDirection: "row",
      marginTop: height * 0.025,
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    mainText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.mm,
      flex: 1,
      textAlign: "center",
      marginTop: height * 0.06,
    },
    updateContainer: {
      flex: 1,
      padding: "5%",
    },
    updateMember: {
      ...Typography.bamin1,
      fontSize: Fontsizes.mm,
      display: "flex",
      alignSelf: "center",
      marginTop: height * 0.02,
    },
    updateMemberImageWrapper: {
      alignSelf: "center",
      width: width * 0.4,
      height: width * 0.4,
      borderRadius: width * 0.3,
      backgroundColor: Colors.missionInput,
      borderColor: Colors.basic,
      borderWidth: 1,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      marginTop: height * 0.05,
    },
    updateMemberImage: {
      width: width * 0.4,
      height: width * 0.4,
      resizeMode: "cover",
    },
    commonButton: {
      marginTop: height * 0.05,
    },
    memberInfo: {
      marginTop: height * 0,
    },
    memberInfoItem: {
      marginTop: height * 0.01,
    },
    memberText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.md,
      marginTop: height * 0.02,
      marginLeft: width * 0.04,
    },
    memberGender: {
      flexDirection: 'row',
      marginLeft: width * 0.04,
      gap: width * 0.04,
      marginTop: height * 0.02,
      backgroundColor: Colors.missionInput,
      paddingVertical: Spacing.input,
    },
  });

export default getMemberUpdateStyles;
