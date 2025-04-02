import { View, Text, Image, TouchableOpacity } from 'react-native';

import CardStyles from './CardStyles';

const Card = ({ image, title, location, tag, navigation }) => {

    return (
        <View style={CardStyles.backgroundStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('AlbumSelect')} style={CardStyles.no}>
                <Image style={CardStyles.albumImage} source={image} />
            </TouchableOpacity>
            <Text style={CardStyles.texts}>{title}</Text>
            <View style={CardStyles.locationRow}>
                <Image style={CardStyles.locationImage} source={require('../../assets/icons/locationIcon.png')} />
                <Text style={CardStyles.locationText}>{location}</Text>
            </View>
            <View style={CardStyles.locationRow}>
                <Text style={CardStyles.tagText}>#{tag}</Text>
            </View>
        </View>
    );
};

export default Card;
