import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');



const WeeklyMissionStyles = StyleSheet.create({
    weeklyMissionWrapper: {
        marginTop: height * -0.05,
        marginBottom: height * 0.02,
        backgroundColor: Colors.white,
        height: height * 0.45,
        alignSelf: 'center',
        width: width * 0.6,
        justifyContent: 'center',
        borderRadius: Spacing.md,
        marginLeft: width * 0.05,
    },
    weeklyMissionImage: {
        marginTop: height * -0.02,
        width: width * 0.5,
        height: height * 0.33,
        borderRadius: Spacing.md,
        resizeMode: 'cover',
        alignSelf: 'center',


    },
    weeklyMissionTitle: {
        ...Typography.bamin1,
        fontSize: Fontsizes.mdm,
        marginLeft: width * 0.05,
        marginTop: height * 0.02,

    },
    rewardRow: {
        flexDirection: 'row',
        marginTop: height * -0.025,
        marginLeft: width * 0.45,
        alignItems: 'flex-end',
      },
      weeklyMissionReward: {
        ...Typography.bamin1,
        fontSize: Fontsizes.xs,
      },
      weeklyMissionRewardP: {
        ...Typography.bamin1,
        fontSize: Fontsizes.xs,
        color: Colors.orange,
      },

      wrapper: {
        marginTop: height * 0.06,
      },

      completedWrapper: {
        opacity: 0.3,
      },

      overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Spacing.md,
        zIndex: 1,
        pointerEvents: 'none',
      },

      overlayText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.mm,
        color: Colors.red,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: height * 0.1,
      },

});

export default WeeklyMissionStyles;


