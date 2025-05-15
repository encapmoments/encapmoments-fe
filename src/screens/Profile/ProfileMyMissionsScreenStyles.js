import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const safePadding = '5%';
const ProfileMyMissionsScreenStyles = StyleSheet.create({
     backgroundStyle: {
            backgroundColor: Colors.basic,
            padding: safePadding,
        },
        backArrow: {
            width: width * 0.12,
            height: width * 0.12,
            position: 'absolute',
            left: width * 0.03,
        },

        touchBackArrow: {
            position: 'absolute',
            left: width * 0.03,
            top: height * 0.03,
            width: width * 0.12,
            height: width * 0.12,
            zIndex: 10,
        },
        topStyle: {
            flexDirection: 'row',
            marginTop: height * 0.025,
        },
        mainText: {
            ...Typography.bamin1,
            fontSize: Fontsizes.mm,
            alignSelf: 'center',
            marginLeft: width * 0.33,
        },
        text: {
            ...Typography.bamin1,
            color: Colors.black,
            fontSize: Fontsizes.mm,
            marginTop: height * 0.04,
            marginLeft: width * 0.1,
        },
        missionWrapper: {
            backgroundColor: Colors.basic,
        },
        weeklyMissionWrapper: {
            marginTop: height * 0.02,
            // backgroundColor: Colors.white,
            width: width * 0.8,
            height: height * 0.3,
            alignSelf: 'center',
            borderRadius: Spacing.md,

        },
        dailyMissionWrapper: {
            marginTop: height * 0.02,
            // backgroundColor: Colors.white,
            width: width * 0.8,
            height: height * 0.6,
            alignSelf: 'center',
            borderRadius: Spacing.md,
        },
});

export default ProfileMyMissionsScreenStyles;
