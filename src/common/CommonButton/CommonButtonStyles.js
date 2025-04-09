import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';

const CommonButtonStyles = {
    commonButton: {
        backgroundColor: '#4A4434',
        paddingVertical: Spacing.sm,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
      },

    commonButtonText: {
        color: 'white',
        fontSize: Fontsizes.md,
        ...Typography.bamin2,
    },
};

export default CommonButtonStyles;
