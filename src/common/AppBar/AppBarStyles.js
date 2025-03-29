import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Typography } from '../../styles/stylesIndex';

const { width, height } = Dimensions.get('window');

const AppBarStyles = StyleSheet.create({

    AppBar: {
        backgroundColor: '#F8F3D9',
        height: height * 0.15,
        width: width * 1.0,
    },
    AppBarText: {
        ...Typography.bamin1,
        marginTop: height * 0.03,
        marginLeft: width * 0.04,
        fontSize: 24,
        fontWeight: '400',
        color: Colors.white,
    },

    AppBarCover: {
        width: width * 1.0,
        height: height * 0.15,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0.3,
        resizeMode: 'stretch',
    },

    AppBarAlarm: {
        width: width * 0.07,
        height: width * 0.07,
        resizeMode: 'cover',
    },
    AppBarAlarmWrapper: {
        marginLeft: width * 0.7,
        marginTop: height * 0.05,
        width: width * 0.12,
        height:  width * 0.12,
        position: 'absolute',
        borderRadius: 18,
        backgroundColor: Colors.white,
        borderColor: Colors.white,
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    AppBarPersonWrapper: {
        marginLeft: width * 0.85,
        marginTop: height * 0.05,
        width: width * 0.12,
        height: width * 0.12,
        position: 'absolute',
        borderRadius: 18,
        backgroundColor: Colors.white,
        borderColor: Colors.white,
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
    AppBarPerson: {
        width: width * 0.09,
        height: width * 0.09,
        resizeMode: 'cover',

    },
    handleBackArrow: {
        zIndex: 1,
    },

});

export default AppBarStyles;
