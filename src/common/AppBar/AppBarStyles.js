import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';

const { width, height } = Dimensions.get('window');

const AppBarStyles = StyleSheet.create({
  AppBar: {
    backgroundColor: Colors.basic,
    height: height * 0.15,
    width: width,
    overflow: 'hidden',
  },

  AppBarCoverWrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  AppBarCoverContent: {
    flexDirection: 'row',
  },
  AppBarCover: {
    width: width,
    height: height * 0.15,
    resizeMode: 'stretch',
    opacity: 0.3,
  },

  AppBarText: {
    ...Typography.bamin1,
    marginTop: height * 0.035,
    marginLeft: width * 0.04,
    fontSize: Fontsizes.lg,
    fontWeight: '400',
    color: Colors.black,
    zIndex: 1,
  },

  AppBarAlarmWrapper: {
    position: 'absolute',
    left: width * 0.7,
    top: height * 0.05,
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: Spacing.md,
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  AppBarAlarm: {
    width: width * 0.07,
    height: width * 0.07,
    resizeMode: 'cover',
  },

  AppBarPersonWrapper: {
    position: 'absolute',
    left: width * 0.85,
    top: height * 0.05,
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: Spacing.md,
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
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
