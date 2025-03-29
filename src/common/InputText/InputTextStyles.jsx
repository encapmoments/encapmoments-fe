import Colors from '../../styles/colors';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const InputTextStyles = {
    inputText: {
        backgroundColor: Colors.inputtextarea,
        paddingVertical: height * 0.025,
        borderRadius: 14, // 완전 둥글게
        alignItems: 'center',
        marginTop: height * 0.02,

    },

};

export default InputTextStyles;
