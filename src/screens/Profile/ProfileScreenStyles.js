import { StyleSheet, Dimensions } from 'react-native';

import { Colors, Typography } from '../../styles/stylesIndex.js';
const { width, height } = Dimensions.get('window');

const ProfileScreenStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.basic,
        flex: 1,
    },

    weeklyNoMission: {
        marginTop: height * 0.03,
        backgroundColor: Colors.missions,
        opacity: 0.7,
        height: height * 0.45,
        alignSelf: 'center',
        width: width * 0.6,
        justifyContent: 'center',
        borderRadius: 14,

    },

    plusIcon: {
         width: width * 0.2,
         height: width * 0.2,
         alignSelf: 'center',
    },

    missionText: {
        ...Typography.bamin1,
        fontSize: 18,
        marginTop: height * 0.03,
        marginLeft: width * 0.05,
    },
    weeklyNoMissionText: {
        ...Typography.bamin1,
        color:Colors.org,
        fontSize: 12,
        alignSelf: 'center',
        marginTop: height * 0.01,
    },
    dailyMissions: {
        flexDirection: 'row',

    },
    dailyMissionWrapper: {
        backgroundColor: Colors.white,
        marginTop: height * 0.03,
        width: width * 0.35,
        height: height * 0.1,
        marginLeft: width * 0.05,
        borderRadius: 14,
        justifyContent: 'center',

    },
    dailyMissionText: {
        ...Typography.bamin2,
        fontSize: 12,
        alignSelf: 'center',

    },
});

export default ProfileScreenStyles;
