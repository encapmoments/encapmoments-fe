import { Colors, Typography } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const MissionPostScreenStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.basic,
        flex: 1,
    },
    backArrow: {
        width: width * 0.12,
        height: width * 0.12,
        position: 'absolute',
        top: height * 0.03,
        left: width * 0.03,
    },

    touchBackArrow: {
        position: 'absolute',
        top: height * 0.03,
        left: width * 0.03,
        width: width * 0.12,
        height: width * 0.12,
        zIndex: 10,
    },
    missionImage: {
        width: width * 1.0,
        height: height * 0.55,

    },
    missionInfo: {
        height:height * 0.7,
        padding: '5%',

    },
});

export default MissionPostScreenStyles;
