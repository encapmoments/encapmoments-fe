import { StyleSheet, Dimensions } from 'react-native';
import Typography from '../../styles/typography';
const { width, height } = Dimensions.get('window');

import Colors from '../../styles/colors';

const LoginScreenStyles = StyleSheet.create({
    commonButton: {
        marginTop: height * 0.06,
    },

    loginText: {
        ...Typography.bamin1,
        fontSize: 24,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: height * 0.1,
        marginBottom: height * 0.06,
    },

    inputText: {
        ...Typography.bamin1,
        color: Colors.black,
        marginTop: height * 0.02,
    },

    forgotPW: {
        ...Typography.bamin1,
        color: Colors.orange,
        marginTop: height * 0.02,
        marginLeft: width * 0.6,
        fontSize: 12,
    },
    donthaveAccount: {
        ...Typography.bamin1,
        color: Colors.black,
        marginTop: height * 0.04,
        alignSelf: 'center',
        fontSize: 12,
    },
    signUp: {
        ...Typography.bamin1,
        color: Colors.orange,
        fontSize: 12,
    },

    loginTextForFinding: {
        ...Typography.bamin1,
        fontSize: 24,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: height * 0.1,
        marginBottom: height * 0.02,
    },
    findPassWordDescription: {
        color: Colors.graytext,
        alignSelf: 'center',
        marginBottom: height * 0.1,
        textAlign: 'center',
    },
    spacingVertical: {
        marginBottom: height * 0.05,
    },
    setProfileImageWrapper: {
        alignSelf: 'center',
        width: width * 0.4,
        height: width * 0.4,
        borderRadius: width * 0.5,
        backgroundColor: Colors.white,
        borderColor: Colors.white,
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
    setProfileImage: {
        width: width * 0.4,
        height: width * 0.4,
        resizeMode: 'cover',

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
