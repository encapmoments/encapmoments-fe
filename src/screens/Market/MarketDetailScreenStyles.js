import { Colors, Typography, Fontsizes } from "../../styles/stylesIndex";

import { StyleSheet } from "react-native";

const getMarketDetailScreenStyles = (width, height) =>
    StyleSheet.create({
        safeArea: {
            flex: 1,
        },
        backgroundStyle: {
            backgroundColor: Colors.basic,
            flex: 1,
        },
        backArrow: {
            width: width * 0.12,
            height: width * 0.12,
            position: "absolute",
            top: height * 0.01,
            left: width * 0.03,
        },
        touchBackArrow: {
            position: "absolute",
            top: height * 0.01,
            left: width * 0.03,
            width: width * 0.12,
            height: width * 0.12,
            zIndex: 10,
        },
    }
);

export default getMarketDetailScreenStyles;
