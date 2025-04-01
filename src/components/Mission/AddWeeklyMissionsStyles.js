import { Colors, Typography } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height}  = Dimensions.get('window');

const AddWeeklyMissionsStyles = StyleSheet.create({
    weeklyNoMission: {
        marginTop: height * 0.015,
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
});

export default AddWeeklyMissionsStyles;
