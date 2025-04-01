import { StyleSheet, Dimensions } from 'react-native';

import { Colors, Typography } from '../../styles/stylesIndex.js';
const { width, height } = Dimensions.get('window');

const MissionScreenStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.basic,
        flex: 1,
    },
    missionText: {
        ...Typography.bamin1,
        fontSize: 18,
        marginTop: height * 0.03,
        marginLeft: width * 0.05,
    },
    dailyMissions: {
        flexDirection: 'row',
    },
    weeklyMissionTimeRemains: {
        marginLeft:width * 0.6,
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
