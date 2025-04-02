import { CommonButton } from '../../common/commonIndex';
import { Colors, Typography } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const MissionSelectScreenStyles = StyleSheet.create({
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
        backgroundColor: Colors.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    missionTitle: {
        ...Typography.bamin1,
        marginLeft:width * 0.1,
        marginTop:height * 0.03,
        fontSize:20,
    },
    missionPoint: {
        ...Typography.bamin1,
        fontSize:12,
        marginLeft:width * 0.1,
        marginTop:height * 0.01,
    },
    missionPointP: {
        color: Colors.orange,
    },
    missionDescription: {
        ...Typography.bamin1,
        fontSize: 12,
        marginTop: height * 0.003,
        color: Colors.graytext,
        marginLeft:width * 0.1,
        flexWrap: 'wrap',
    },
    paddings: {
        padding: '5%',
    },
});

export default MissionSelectScreenStyles;
