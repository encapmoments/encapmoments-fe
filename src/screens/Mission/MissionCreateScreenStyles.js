import { Colors, Typography } from '../../styles/stylesIndex';

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const MissionCreateScreenStyles = StyleSheet.create({
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
    missionText: {
        ...Typography.bamin1,
        fontSize: 24,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: height * 0.12,
    },
    commonButton: {
        marginTop: height * 0.05,
    },
    missionDescriptionText: {
        marginTop: height * 0.015,
        color: Colors.graytext,
        fontSize: 12,
        alignSelf: 'center',
    },
    inputTextWrapper: {
        marginTop:height * 0.07,
        backgroundColor: Colors.missions,
        width: width * 0.8,
        alignSelf: 'center',
        borderRadius:14,
        height:height * 0.45,
    },
    inputText: {
        backgroundColor: Colors.missionInput,
        marginTop: height * 0.05,
        width: width * 0.65,
        height:height * 0.35,
        alignSelf: 'center',
         textAlignVertical: 'top',
    },
});

export default MissionCreateScreenStyles;
