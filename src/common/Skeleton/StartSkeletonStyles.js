import { StyleSheet } from "react-native";
import { Colors, Typography, Fontsizes } from "../../styles/stylesIndex";

const getStartSkeletonStyles = (width, height) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.basic,
    },
    backgroundStyle: {
        flex: 1,
        backgroundColor: Colors.basic,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
    },
    logoText: {
        width: width * 0.6,
    },
    logoIcon: {
        width: width * 0.6,
        resizeMode: 'contain',
        marginTop: height * 0.02,
        marginBlock: height * 0.04,
    },
    subText: {
        color: Colors.graytext,
        ...Typography.bamin1,
        marginTop: height * 0.02,
        fontSize: Fontsizes.sm,
    },
    commonButton: {
        marginHorizontal: width * 0.05,
        marginBottom: height * 0.02,
    },
});

export default getStartSkeletonStyles;
