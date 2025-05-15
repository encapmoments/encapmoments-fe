import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const WeeklyStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.white,
        width: width * 0.8,
        height: height * 0.25,
        borderRadius: Spacing.md,
        marginBlock: height * 0.02,
    },
    weeklyImage: {
        width: width * 0.3,
        height: height * 0.23,
        borderRadius: Spacing.md,
        marginLeft: width * 0.02,
    },
    weeklyTitle: {
        position: 'absolute',
        marginLeft: width * 0.36,
        marginTop: height * 0.05,
        ...Typography.bamin1,
        fontSize: Fontsizes.md,


    },
    weeklyPoint: {
        position: 'absolute',
        marginLeft: width * 0.36,
        marginTop: height * 0.1,
        ...Typography.bamin1,
        fontSize: Fontsizes.sm,
        color: Colors.black,

    },
    weeklyPointP: {
        position: 'absolute',
        marginLeft: width * 0.25,
        ...Typography.bamin1,
        fontSize:Fontsizes.sm,
        color: Colors.orange,

    },
});

export default WeeklyStyles;
