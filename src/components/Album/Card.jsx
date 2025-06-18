import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';

import getCardStyles from './CardStyles';

const Card = ({ album_id, album_image, album_title, location, album_tag, navigation }) => {
    const { width, height } = useWindowDimensions();
    const cardStyles = getCardStyles(width, height);
    return (
        <View style={cardStyles.backgroundStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('AlbumSelect', { album_id })} style={cardStyles.no}>
                <Image style={cardStyles.albumImage} source={album_image} />
            </TouchableOpacity>
            <Text style={cardStyles.texts}>{album_title}</Text>
            <View style={cardStyles.locationRow}>
                <Image style={cardStyles.locationImage} source={require('../../assets/icons/locationIcon.png')} />
                <Text style={cardStyles.locationText}>{location}</Text>
            </View>
            <View style={cardStyles.locationRow}>
                <Text style={cardStyles.tagText}>#{album_tag}</Text>
            </View>
        </View>
    );
};

export default Card;
