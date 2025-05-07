import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';


const { width, height } = Dimensions.get('window');

const LoginScreenStyles = StyleSheet.create({
    commonButton: {
        marginTop: height * 0.06,
    },

    loginText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.lg,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: height * 0.15,
        marginBottom: height * 0.06,
    },

    forgotPW: {
        ...Typography.bamin1,
        color: Colors.orange,
        marginTop: height * 0.02,
        marginLeft: width * 0.63,
        fontSize: Fontsizes.sm,
    },
    donthaveAccount: {
        ...Typography.bamin1,
        color: Colors.graytext2,
        marginTop: height * 0.08,
        alignSelf: 'center',
        fontSize: Fontsizes.sm,
    },
    signUp: {
        ...Typography.bamin1,
        color: Colors.orange,
        fontSize: Fontsizes.sm,
    },
    orConnect: {
        ...Typography.bamin1,
        color: Colors.graytext2,
        marginTop: height * 0.03,
        alignSelf: 'center',
        fontSize: Fontsizes.sm,
    },

    findPassWordDescription: {
        color: Colors.graytext2,
        alignSelf: 'center',
        marginBottom: height * 0.04,
        textAlign: 'center',
        marginTop: height * -0.04,
        fontSize: Fontsizes.sm,
    },
    findPadding: {
        marginBottom: height * -0.02,
    },

    setProfileImageWrapper: {
        alignSelf: 'center',
        width: width * 0.5,
        height: width * 0.5,
        borderRadius: width * 0.5,
        backgroundColor: Colors.white,
        borderColor: Colors.white,
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
    setProfileImage: {
        width: width * 0.5,
        height: width * 0.5,
        resizeMode: 'cover',
    },
    setProfileImageDescription : {
        ...Typography.bamin1,
        color: Colors.graytext2,
        fontSize: Fontsizes.md,
        textAlign: 'center',
        marginTop: height * 0.02,
        marginBottom: height * -0.02,
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


});

export default LoginScreenStyles;
