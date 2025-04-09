import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const DailyMissionStyles = StyleSheet.create({
    dailyMissionWrapper: {
        backgroundColor: Colors.white,
        marginTop: height * 0.03,
        width: width * 0.35,
        height: height * 0.1,
        marginLeft: width * 0.05,
        borderRadius: Spacing.sm,
        justifyContent: 'center',

    },
    dailyMissionText: {
        ...Typography.bamin2,
        fontSize: Fontsizes.md,
        alignSelf: 'center',

    },
});

export default DailyMissionStyles;
