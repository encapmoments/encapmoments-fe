import { TouchableOpacity, Text, Image } from 'react-native';
import ProfileBoxStyles from './ProfileBoxStyles';

const ProfileBox = ({ navigation, title, route, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress ? onPress : () => navigation.navigate(route)} style={ProfileBoxStyles.boxWrapper}>
            <Text style={ProfileBoxStyles.boxText}>{title}</Text>
            <Image style={ProfileBoxStyles.arrow} source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
    );
};

export default ProfileBox;
