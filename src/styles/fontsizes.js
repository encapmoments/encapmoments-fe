import { PixelRatio } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const scaleFont = (size) => size * PixelRatio.getFontScale();

const Fontsizes = {
    xs: moderateScale(12),
    sm: moderateScale(14),
    md: moderateScale(16),
    mdm: moderateScale(18),
    mm: moderateScale(20),
    lg: moderateScale(24),
    xl: scaleFont(24),
    xxl: scaleFont(32),
};

export default Fontsizes;
