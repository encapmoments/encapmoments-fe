import {
  Colors,
  Fontsizes,
  Spacing,
  Typography,
} from "../../styles/stylesIndex";

import { StyleSheet } from "react-native";

const getCardStyles = (width, height) =>
  StyleSheet.create({
    backgroundStyle: {
      paddingLeft: width * 0.02,
      paddingRight: width * 0.02,
      backgroundColor: Colors.white,
      width: width * 0.4,
      borderRadius: 14,
      height: height * 0.33,
    },
    texts: {
      ...Typography.bamin1,
      fontSize: Fontsizes.sm,
      textAlign: "left",
      marginLeft: width * 0.03,
      marginTop: height * 0.01,
    },
    albumImage: {
      marginTop: height * 0.01,
      width: width * 0.32,
      height: width * 0.32,
      alignSelf: "center",
      borderRadius: Spacing.sm,
      resizeMode: "cover",
    },
    locationRow: {
      flexDirection: "row",
    },
    locationImage: {
      width: width * 0.03,
      height: width * 0.03,
      marginLeft: width * 0.02,
      marginTop: height * 0.01,
    },
    locationText: {
      color: Colors.graytext,
      ...Typography.bamin1,
      fontSize: Fontsizes.xs,
      marginLeft: width * 0.01,
      marginTop: height * 0.01,
    },
    tagText: {
      color: Colors.graytext,
      ...Typography.bamin1,
      fontSize: Fontsizes.xs,
      marginLeft: width * 0.025,
      marginTop: height * 0.01,
    },
  });

export default getCardStyles;
