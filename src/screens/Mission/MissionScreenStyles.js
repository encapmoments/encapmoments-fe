import { StyleSheet } from "react-native";

import {
  Colors,
  Typography,
  Fontsizes,
} from "../../styles/stylesIndex.js";

const getMissionScreenStyles = (width, height) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    backgroundStyle: {
      backgroundColor: Colors.basic,
      flex: 1,
    },
    missionText: {
      ...Typography.bamin1,
      fontSize: Fontsizes.lg,
      marginTop: height * 0.03,
      marginLeft: width * 0.05,
    },
    dailyMissions: {
      flexDirection: "row",
      width: width * 0.95,
    },
    weeklyMissionTimeRemains: {
      ...Typography.bamin1,
      color: Colors.black,
      marginLeft: width * 0.65,
      fontSize: Fontsizes.sm,
      bottom: height * 0.026,
    },
    dailyMissionTimeRemains: {
      ...Typography.bamin1,
      color: Colors.black,
      marginLeft: width * 0.7,
      bottom: height * 0.026,
      marginBottom: height * -0.03,
      fontSize: Fontsizes.sm,
    },
    weeklyMissionWrapper: {
      marginTop: height * -0.07,
    },
    weeklyMissionsWraapper: {
      height: height * 0.45,
      marginTop: height * 0.07,
      marginBottom: height * -0.04,
    },
    AddWeeklyMissionsWrapper: {
      marginTop: height * -0.07,
    },

    example: {
      backgroundColor: Colors.black,
      width: width * 0.2,
      opacity: 0.3,
    },
    example2: {
      backgroundColor: Colors.orange,
      width: width * 0.2,
      opacity: 0.3,
    },
  });

export default getMissionScreenStyles;
