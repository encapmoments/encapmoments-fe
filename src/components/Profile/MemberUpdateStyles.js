import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";
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
      width: width * 0.5,
      height: width * 0.5,
      borderRadius: width * 0.3,
      backgroundColor: Colors.missionInput,
      borderColor: Colors.basic,
      borderWidth: 1,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      marginTop: height * 0.12,
    },
    updateMemberImage: {
      width: width * 0.5,
      height: width * 0.5,
      resizeMode: "cover",
    },
    commonButton: {
      marginTop: height * 0.12,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: width * 0.05,
      width: width * 0.8,
      alignItems: "center",
    },
    modalTitle: {
      ...Typography.bamin1,
      fontSize: Fontsizes.md,
      marginBottom: height * 0.02,
    },
    modalInput: {
      ...Typography.bamin2,
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 10,
      padding: width * 0.04,
      fontSize: Fontsizes.sm,
      marginBottom: height * 0.02,
      textAlign: "center",
      minHeight: height * 0.05,
      width: "100%",
    },
    modalButtonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: height * 0.01,
      width: "100%",
    },
    modalCancelButton: {
      flex: 1,
      backgroundColor: "#F0F0F0",
      borderRadius: 10,
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.03,
      marginRight: width * 0.02,
      alignItems: "center",
      minHeight: height * 0.045,
      justifyContent: "center",
    },
    modalSaveButton: {
      flex: 1,
      backgroundColor: "#007AFF",
      borderRadius: 10,
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.03,
      marginLeft: width * 0.02,
      alignItems: "center",
      minHeight: height * 0.045,
      justifyContent: "center",
    },
    modalCancelText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.sm,
      color: "#666",
    },
    modalSaveText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.sm,
      color: "white",
    },
  });

export default getMemberUpdateStyles;
