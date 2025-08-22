import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const getAddWeeklyMissionsStyles = (width, height) =>
  StyleSheet.create({
    weeklyNoMission: {
      marginTop: height * 0.015,
      backgroundColor: Colors.missions,
      opacity: 0.7,
      height: height * 0.45,
      alignSelf: "center",
      width: width * 0.6,
      justifyContent: "center",
      borderRadius: Spacing.lg,
    },

    plusIcon: {
      width: width * 0.2,
      height: width * 0.2,
      alignSelf: "center",
    },
    weeklyNoMissionText: {
      ...Typography.bamin1,
      color: Colors.org,
      fontSize: Fontsizes.sm,
      alignSelf: "center",
      marginTop: height * 0.01,
    },
  });

export default getAddWeeklyMissionsStyles;
