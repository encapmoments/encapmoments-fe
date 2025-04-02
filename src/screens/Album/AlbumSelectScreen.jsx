import { View, Text, Image, TouchableOpacity } from 'react-native';
import AlbumSelectScreenStyles from './AlbumSelectScreenStyles';

const AlbumSelectScreen = ({ navigation }) => {

    return (
        <View style={AlbumSelectScreenStyles.backgroundStyle}>
            <TouchableOpacity onPress={() => navigation.pop()} style={AlbumSelectScreenStyles.touchBackArrow}>
                <Image
                    style={AlbumSelectScreenStyles.backArrow}
                    source={require('../../assets/icons/backArrowWrapper.png')}
                />
            </TouchableOpacity>
            <Image
                style={AlbumSelectScreenStyles.albumImage}
                source={require('../../assets/AppBarImages/covers/cover2.jpg')}
            />
            <View style={AlbumSelectScreenStyles.albumInfo} />
        </View>
    );
};

export default AlbumSelectScreen;
