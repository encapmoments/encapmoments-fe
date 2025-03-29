import Typography from '../../styles/typography';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const CommonButtonStyles = {
    commonButton: {
        backgroundColor: '#4A4434',
        paddingVertical: height * 0.025,
        borderRadius: 999, // 완전 둥글게
        alignItems: 'center',

    },
    commonButtonText: {
        color: 'white',
        fontSize: 14,
        ...Typography.bamin2,
    },
};

export default CommonButtonStyles;
