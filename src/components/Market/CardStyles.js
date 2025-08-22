import {
  Colors,
  Typography,
  Fontsizes,
  Spacing,
} from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const getCardStyles = (width, height) =>
  StyleSheet.create({
    card: {
      backgroundColor: Colors.white,
      borderRadius: Spacing.lg,
      width: width * 0.4,
      height: height * 0.33,
    },
    cardImage: {
      width: "85%",
      height: height * 0.2,
      marginTop: height * 0.015,
      alignSelf: "center",
      borderRadius: Spacing.sm,
    },
    cardOptions: {
      ...Typography.bamin1,
      fontSize: Fontsizes.sm,
      paddingLeft: width * 0.04,
      paddingTop: height * 0.008,
    },
    pointP: {
      color: Colors.orange,
    },
    cate: {
      color: Colors.graytext,
    },
  });

export default getCardStyles;
