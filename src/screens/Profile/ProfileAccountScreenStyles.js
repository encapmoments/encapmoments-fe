import { Colors, Typography } from '../../styles/stylesIndex';
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const ProfileAccountScreenStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.basic,
        flex: 1,
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
        marginTop: height * 0.05,
    },
    mainText: {
        ...Typography.bamin1,
        fontSize: 18,
        alignSelf: 'center',
        marginLeft: width * 0.38,
    },
    doneText: {
        ...Typography.bamin1,
        fontSize: 18,
        color: Colors.orange,
        marginLeft: width * 0.25,


    },
    setProfileImageWrapper: {
        alignSelf: 'center',
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: width * 0.5,
        marginTop: height * 0.04,
        backgroundColor: Colors.white,
        borderColor: Colors.white,
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
    setProfileImage: {
        width: width * 0.2,
        height: width * 0.2,
        resizeMode: 'cover',
    },
});

export default ProfileAccountScreenStyles;
