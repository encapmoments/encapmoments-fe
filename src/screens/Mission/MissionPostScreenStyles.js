import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
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
    missionImageWrapper: {
        width: width * 1.0,
        height: height * 0.55,
        backgroundColor: Colors.missions,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusIcon: {
        width: width * 0.2,
        height: width * 0.2,
        opacity: 0.7,
   },
    missionInfo: {
        height:height * 0.5,
    },

    titleInput: {
        ...Typography.bamin2,
        marginTop: height * 0.02,
        backgroundColor: Colors.inputtext,
        width: width * 0.9,
        height: height * 0.08,
        borderRadius: Spacing.lg,
        alignSelf: 'center',
        paddingLeft: Spacing.sm,
        fontSize: Fontsizes.mm,
        color: Colors.white,
    },
    tagInput: {
        ...Typography.bamin2,
        marginTop: height * 0.02,
        backgroundColor: Colors.inputtext,
        width: width * 0.6,
        height: height * 0.06,
        borderRadius: Spacing.lg,
        textAlignVertical: 'center',
        paddingLeft: Spacing.sm,
        fontSize: Fontsizes.md,
        color: Colors.white,
        marginLeft: width * 0.05,
    },
    plusIconForComments: {
        width: width * 0.1,
        height: width * 0.1,
        opacity: 0.7,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: height * 0.02,
    },
    commonButton: {
        padding: '5%',
    },
    scroll: {
        flex: 1,
        paddingBottom: 80,
    },
});

export default MissionPostScreenStyles;
