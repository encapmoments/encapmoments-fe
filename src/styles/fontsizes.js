import { PixelRatio } from 'react-native';

const scaleFont = (size) => size * PixelRatio.getFontScale();

const Fontsizes = {
    xs: scaleFont(8),
    sm: scaleFont(10),
    md: scaleFont(12),
    lg: scaleFont(20),
    xl: scaleFont(24),
    xxl: scaleFont(32),
};

export default Fontsizes;
