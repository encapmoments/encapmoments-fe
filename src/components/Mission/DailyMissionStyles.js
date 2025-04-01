import { Colors, Typography } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const DailyMissionStyles = StyleSheet.create({
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

export default DailyMissionStyles;
