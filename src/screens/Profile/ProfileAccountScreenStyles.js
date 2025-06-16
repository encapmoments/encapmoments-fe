import { Colors, Fontsizes, Typography } from '../../styles/stylesIndex';
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const safePadding = '5%';

const ProfileAccountScreenStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
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
        fontSize: Fontsizes.mm,
        marginTop: height * 0.015,
    },
    optionsWrapper: {
        marginTop: height * 0.02,
    },
    commonButton: {
        marginTop: height * 0.03,
    },
});

export default ProfileAccountScreenStyles;
