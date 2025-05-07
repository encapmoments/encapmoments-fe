import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const WeeklyMissionStyles = StyleSheet.create({
    weeklyMissionWrapper: {
        marginTop: height * 0.015,
        backgroundColor: Colors.missions,
        height: height * 0.45,
        alignSelf: 'center',
        width: width * 0.6,
        justifyContent: 'center',
        borderRadius: Spacing.md,
    },
    weeklyMissionImage: {

    },
    weeklyMissionTitle: {

    },
    weeklyMissionReward: {

    },

});

export default WeeklyMissionStyles;


