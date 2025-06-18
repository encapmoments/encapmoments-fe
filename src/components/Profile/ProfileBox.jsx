import { TouchableOpacity, Text, Image, useWindowDimensions } from 'react-native';
import getProfileBoxStyles from './ProfileBoxStyles';

const ProfileBox = ({ navigation, title, route, onPress }) => {
    const { width, height } = useWindowDimensions();
    const pbStyles = getProfileBoxStyles(width, height);
    return (
        <TouchableOpacity onPress={onPress ? onPress : () => navigation.navigate(route)} style={pbStyles.boxWrapper}>
            <Text style={pbStyles.boxText}>{title}</Text>
            <Image style={pbStyles.arrow} source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
    );
};

export default ProfileBox;
