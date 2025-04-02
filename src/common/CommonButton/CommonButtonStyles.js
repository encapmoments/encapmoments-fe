import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors, Typography} from '../../styles/stylesIndex';

const CommonButtonStyles = {
    commonButton: {
        backgroundColor: '#4A4434',
        paddingVertical: height * 0.02,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
      },

    commonButtonText: {
        color: 'white',
        fontSize: 14,
        ...Typography.bamin2,
    },
};

export default CommonButtonStyles;
