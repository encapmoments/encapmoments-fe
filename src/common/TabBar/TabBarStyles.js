import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import Colors from '../../styles/colors';

const TabBarStyles = StyleSheet.create({
    tabBarWrapper: {
        width: width * 1.0,
        height:  height * 0.15,
        position: 'absolute',
        borderRadius: 18,
        backgroundColor: Colors.white,
        borderColor: Colors.white,
        bottom: 0,
    },
    tabBarIcon: {
        color: Colors.black,
        position: 'absolute',
        bottom: height * 0.05,
        overflow: 'hidden',
        resizeMode: 'cover',


    },

});

export default TabBarStyles;
