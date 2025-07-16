import { Dimensions } from 'react-native';
import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';

const { width, height } = Dimensions.get('window');

const InputTextStyles = {
    inputText: {
        ...Typography.sf,
        backgroundColor: Colors.missionInput,
        paddingVertical: Spacing.input,
        borderRadius: Spacing.input,
        alignItems: 'center',
        fontSize: Fontsizes.sm,
        marginTop: height * 0.02,

    },

};

export default InputTextStyles;
