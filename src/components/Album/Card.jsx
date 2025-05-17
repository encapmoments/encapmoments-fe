import { View, Text, Image, TouchableOpacity } from 'react-native';

import CardStyles from './CardStyles';

const Card = ({ album_id, album_image, album_title, location, album_tag, navigation }) => {

    return (
        <View style={CardStyles.backgroundStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('AlbumSelect', { album_id })} style={CardStyles.no}>
                <Image style={CardStyles.albumImage} source={album_image} />
            </TouchableOpacity>
            <Text style={CardStyles.texts}>{album_title}</Text>
            <View style={CardStyles.locationRow}>
                <Image style={CardStyles.locationImage} source={require('../../assets/icons/locationIcon.png')} />
                <Text style={CardStyles.locationText}>{location}</Text>
            </View>
            <View style={CardStyles.locationRow}>
                <Text style={CardStyles.tagText}>#{album_tag}</Text>
            </View>
        </View>
    );
};

export default Card;
