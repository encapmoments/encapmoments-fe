import { StyleSheet, Dimensions } from 'react-native';

import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex.js';
const { width, height } = Dimensions.get('window');

const MissionScreenStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.basic,
        flex: 1,
    },
    missionText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.lg,
        marginTop: height * 0.03,
        marginLeft: width * 0.05,
    },
    dailyMissions: {
        flexDirection: 'row',
    },
    weeklyMissionTimeRemains: {
        ...Typography.bamin1,
        color: Colors.black,
        marginLeft:width * 0.65,
        fontSize: Fontsizes.sm,
    },
    dailyMissionTimeRemains: {
        ...Typography.bamin1,
        color: Colors.black,
        marginLeft:width * 0.7,
        bottom: height * 0.026,
        marginBottom: height * -0.03,
        fontSize: Fontsizes.sm,
    },

    example: {
        backgroundColor: Colors.black,
        width: width * 0.2,
        opacity: 0.3,
    },
    example2: {
        backgroundColor: Colors.orange,
        width: width * 0.2,
        opacity: 0.3,
    },
});

export default MissionScreenStyles;
