import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Fontsizes } from '../../styles/stylesIndex';

import { Colors, Typography } from '../../styles/stylesIndex';

const TabBarStyles = StyleSheet.create({
    tabBar: {
      backgroundColor: Colors.basic,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      alignItems: 'center',
    },
    tabBarWrapper: {
      width: '100%',
      height: height * 0.1,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      backgroundColor: Colors.white,
      borderColor: Colors.white,
      position: 'absolute',
      bottom: 0,
      zIndex: 0,
    },
    tabBarIcons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '90%',
      height: height * 0.1,
      zIndex: 1,
    },
    tabBarMissionIcon: {
      width: width * 0.07,
      height: width * 0.07,
      resizeMode: 'contain',
    },
    tabBarText: {
        ...Typography.bamin1,
        alignSelf: 'center',
        fontSize: Fontsizes.sm,
        marginTop: height * 0.01,
        color: Colors.graytext,
    },
  });

export default TabBarStyles;
