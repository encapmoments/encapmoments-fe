import { Colors, Fontsizes, Typography } from '../../styles/stylesIndex';
import { StyleSheet } from 'react-native';

const safePadding = '5%';

const getProfileAccountScreenStyles = (width, height) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.basic,
    },
    backgroundStyle: {
        backgroundColor: Colors.basic,
        flex: 1,
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
    scrollWrapper: {
        flex: 1,
    },
    scroll: {
        flexGrow: 1, // ✅ 내용이 적어도 아래로 늘어남
        justifyContent: 'space-between',
        paddingBottom: height * 0.05, // 키보드/버튼 공간 확보
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

    setProfileImageWrapper: {
        alignSelf: 'center',
        width: width * 0.24,
        height: width * 0.24,
        borderRadius: width * 0.5,
        marginTop: height * 0.05,
        backgroundColor: Colors.white,
        borderColor: Colors.white,
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    setProfileImage: {
        width: width * 0.24,
        height: width * 0.24,
        resizeMode: 'cover',
    },
    options: {
        ...Typography.bamin1,
        color: Colors.black,
        fontSize: Fontsizes.mdm,
        marginTop: height * 0.03,
    },
    optionsWrapper: {
        marginTop: height * 0.02,
        height: height * 0.5,
    },
    commonButton: {
        marginTop: height * 0.11,
    },
    paddings: {
        marginTop: height * 0.01,
    },
});

export default getProfileAccountScreenStyles;
