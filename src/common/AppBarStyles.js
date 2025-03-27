import { StyleSheet } from 'react-native';


const AppBarStyles = StyleSheet.create({

    AppBar: {
        backgroundColor: '#F8F3D9',
        height: 110,
        width: 420,
    },
    AppBarText: {
        marginTop: 40,
        marginLeft: 20,
        fontSize: 24,
        fontWeight: '400',
        color: '#ffffff',
        fontFamily: 'BMJUA_ttf',
    },

    AppBarCover: {
        width: 420,
        height: 110,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0.3,
        resizeMode: 'stretch',
    },

    AppBarAlarm: {
        width: 26,
        height: 26,
        resizeMode: 'cover',
    },
    AppBarAlarmWrapper: {
        marginLeft: 290,
        marginTop: 50,
        width: 36,
        height: 36,
        position: 'absolute',
        borderRadius: 18,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    AppBarPersonWrapper: {
        marginLeft: 350,
        marginTop: 50,
        width: 36,
        height: 36,
        position: 'absolute',
        borderRadius: 18,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
    AppBarPerson: {
        width: 28,
        height: 28,
        resizeMode: 'cover',

    },

});

export default AppBarStyles;
