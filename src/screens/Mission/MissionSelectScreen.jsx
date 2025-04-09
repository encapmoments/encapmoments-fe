import { View, Text, Image, TouchableOpacity } from 'react-native';
import MissionSelectScreenStyles from './MissionSelectScreenStyles';

import { CommonButton, InputText } from '../../common/commonIndex';

const MissionSelectScreen = ({ navigation }) => {

    return (
        <View style={MissionSelectScreenStyles.backgroundStyle}>
            <TouchableOpacity onPress={() => navigation.pop()} style={MissionSelectScreenStyles.touchBackArrow}>
                <Image
                    style={MissionSelectScreenStyles.backArrow}
                    source={require('../../assets/icons/backArrowWrapper.png')}
                />
            </TouchableOpacity>
            <Image
                style={MissionSelectScreenStyles.missionImage}
                source={require('../../assets/AppBarImages/covers/cover2.jpg')}
            />
            <View style={MissionSelectScreenStyles.missionInfo}>
                <Text style={MissionSelectScreenStyles.missionTitle}>기린이랑 사진 찍기</Text>
                <Text style={MissionSelectScreenStyles.missionPoint}>300 <Text style={MissionSelectScreenStyles.missionPointP}>p</Text></Text>
                <Text style={MissionSelectScreenStyles.missionTitle}>설명</Text>
                <Text style={MissionSelectScreenStyles.missionDescription}>
                    동물원에 다같이 가서 기린과 함께 사진을 찍고, 즐거운 추억을 가족 앨범에 남겨보세요!
                </Text>
                <Text style={MissionSelectScreenStyles.missionTitle}>인증 방식</Text>
                <Text style={MissionSelectScreenStyles.missionDescription}>사진을 넣고, 구성원 각자 느낀점을 작성하세요!</Text>
                <View style={MissionSelectScreenStyles.paddings}>
                    <CommonButton
                    title="수행하러 가기"
                    onPress={() => navigation.navigate('Mission')}
                    style={MissionSelectScreenStyles.commonButton}
                />
                </View>
            </View>
        </View>
    );
};

export default MissionSelectScreen;
