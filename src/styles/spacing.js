import { PixelRatio } from 'react-native';

const scaleDP = (size) => size * PixelRatio.get();

const Spacing = {
    xs: scaleDP(4),
    sm: scaleDP(8),
    input: scaleDP(10),
    md: scaleDP(12),
    lg: scaleDP(16),
    xl: scaleDP(24),
    xxl: scaleDP(32),
};

export default Spacing;
