import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const DailyMissionStyles = StyleSheet.create({
  dailyMissionWrapper: {
    backgroundColor: Colors.white,
    marginTop: height * 0.03,
    width: width * 0.35,
    height: height * 0.1,
    marginLeft: width * 0.05,
    borderRadius: Spacing.sm,
    justifyContent: "center",
  },
  dailyMissionText: {
    ...Typography.bamin2,
    fontSize: Fontsizes.sm,
    alignSelf: "center",
  },
  dailyMissionPoint: {
    ...Typography.bamin1,
    marginLeft: width * 0.27,
    marginBottom: height * -0.01,
    fontSize: Fontsizes.xs,
  },
  dailyMissionPointP: {
    ...Typography.bamin1,
    color: Colors.orange,
    fontSize: Fontsizes.xs,
  },
  completedWrapper: {
    opacity: 0.3,
  },
  wrapper: {
    position: "relative",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Spacing.sm,
    pointerEvents: "none",
  },
  overlayText: {
    ...Typography.bamin1,
    fontSize: Fontsizes.mdm,
    color: Colors.red,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: width * 0.03,
    marginTop: height * 0.035,
  },
});

export default DailyMissionStyles;
