import { View, Text, Image, TouchableOpacity } from 'react-native';
import MissionPostScreenStyles from './MissionPostScreenStyles';

import { CommonButton } from '../../common/commonIndex';

const MissionPostScreen = ({ navigation }) => {

    return (
        <View style={MissionPostScreenStyles.backgroundStyle}>
            <TouchableOpacity onPress={() => navigation.pop()} style={MissionPostScreenStyles.touchBackArrow}>
                <Image
                    style={MissionPostScreenStyles.backArrow}
                    source={require('../../assets/icons/backArrowWrapper.png')}
                />
            </TouchableOpacity>
            <Image
                style={MissionPostScreenStyles.missionImage}
                source={require('../../assets/AppBarImages/covers/cover2.jpg')}
            />
            <View style={MissionPostScreenStyles.missionInfo}>
                <CommonButton
                    title="완료"
                    onPress={() => navigation.navigate('AlbumSelect')}
                    style={MissionPostScreenStyles.commonButton}
                />
            </View>
        </View>
    );
};

export default MissionPostScreen;
