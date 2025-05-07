import { PixelRatio } from 'react-native';

const scaleFont = (size) => size * PixelRatio.getFontScale();

const Fontsizes = {
    // xs: scaleFont(8),
    // sm: scaleFont(10),
    // md: scaleFont(12),
    // mm: scaleFont(16),
    // lg: scaleFont(20),
    // xl: scaleFont(24),
    // xxl: scaleFont(32),

    xs: scaleFont(15),
    sm: scaleFont(18),
    md: scaleFont(22),
    mm: scaleFont(28),
    lg: scaleFont(32),
    // xl: scaleFont(24),
    // xxl: scaleFont(32),
};

export default Fontsizes;
