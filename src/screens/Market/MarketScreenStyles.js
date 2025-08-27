import { Colors, Typography, Fontsizes } from "../../styles/stylesIndex";

import { StyleSheet } from "react-native";

const getMarketScreenStyles = (width, height) => StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    backgroundStyle: {
      backgroundColor: Colors.basic,
      flex: 1,
    },
    point: {
      ...Typography.bamin1,
      color: Colors.black,
      fontSize: Fontsizes.md,
      padding: height * 0.01,
      paddingTop: height * 0.02,
      marginLeft: width * 0.48,
    },
    pointP: {
      color: Colors.orange,
    },
    category: {
      flexDirection: "row",
      height: height * 0.08,
      justifyContent: "space-between",
      alignSelf: "center",
      gap: 80,
      paddingVertical: 10,
      paddingHorizontal: 30,
      width: width * 0.9,
    },
    cardsWrapper: {
      backgroundColor: Colors.basic,
      alignSelf: "center",
      width: width * 0.9,
      flex: 1,
    },
    cards: {
      justifyContent: "space-between",
      paddingBottom: height * 0.12,
    },
    columnWrapper: {
      justifyContent: "space-between",
      paddingHorizontal: width * 0.02,
      marginBottom: height * 0.02,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 50,
      ...Typography.bamin1,
      color: Colors.black,
      fontSize: Fontsizes.md,
    },
  });

export default getMarketScreenStyles;
