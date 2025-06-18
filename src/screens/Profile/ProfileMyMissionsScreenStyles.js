import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { StyleSheet } from 'react-native';

const safePadding = '5%';
const getProfileMyMissionsScreenStyles = (width, height) => StyleSheet.create({
    safeArea: {
        flex: 1,
    },
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
        overflow: 'hidden',
    },
    weeklyMissionWrapper: {
        marginTop: height * -0.02,
        height: height * 0.25,
    },
    dailyMissionWrapper: {
        height: height * 0.6,
    },
    missionWrapperWrapper: {
        borderRadius: Spacing.lg,
        overflow: 'hidden', // ⭐️ 이거 추가
        alignSelf: 'center', // 위치 맞춤도 여기로 옮겨도 좋음
        width: width * 0.8,
        marginTop: height*0.01,
    },
});

export default getProfileMyMissionsScreenStyles;
