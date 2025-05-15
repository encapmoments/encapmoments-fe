import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const DailyStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.white,
        width: width * 0.8,
        height: height * 0.1,
        borderRadius: Spacing.md,
        marginBottom: height * 0.02,
    },
    dailyTitle: {
        ...Typography.bamin1,
        color: Colors.black,
        fontSize: Fontsizes.md,
        marginTop: height * 0.025,
        marginLeft: width * 0.05,

    },
    dailyPoint: {
        ...Typography.bamin1,
        color: Colors.black,
        fontSize: Fontsizes.xs,
        marginTop: height * 0.01,
        marginLeft: width * 0.05,

    },
    dailyPointP: {
        ...Typography.bamin1,
        color: Colors.orange,
        fontSize: Fontsizes.xs,

    },
});

export default DailyStyles;
