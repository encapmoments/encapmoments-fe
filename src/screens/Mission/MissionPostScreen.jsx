import { View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import MissionPostScreenStyles from './MissionPostScreenStyles';
import CommentCreate from '../../components/Mission/CommentCreate';
import Colors from '../../styles/colors';
import { CommonButton } from '../../common/commonIndex';

import { PixelRatio } from 'react-native';

const MissionPostScreen = ({ navigation }) => {

    return (
        <KeyboardAvoidingView style={MissionPostScreenStyles.backgroundStyle}>
            <TouchableOpacity onPress={() => navigation.pop()} style={MissionPostScreenStyles.touchBackArrow}>
                <Image
                    style={MissionPostScreenStyles.backArrow}
                    source={require('../../assets/icons/backArrowWrapper.png')}
                />
            </TouchableOpacity>
            <View style={MissionPostScreenStyles.missionImageWrapper}>
            <TouchableOpacity>
                <Image
                    style={MissionPostScreenStyles.plusIcon}
                    source={require('../../assets/icons/plusIcon.png')}
                />
            </TouchableOpacity>
            </View>
            <View style={MissionPostScreenStyles.missionInfo}>
                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} style={MissionPostScreenStyles.scroll}>
                    <TextInput style={MissionPostScreenStyles.titleInput} placeholder="제목" placeholderTextColor={Colors.white} />
                    <TextInput style={MissionPostScreenStyles.tagInput} placeholder="태그" placeholderTextColor={Colors.white} />

                    {/* 여기는 추가될 comments */}
                        <CommentCreate />
                    {/* 여기까지 */}

                    <TouchableOpacity
                    onPress={() => {
                        const scale = PixelRatio.getFontScale();
                        console.log('🔥 Font Scale 눌림:', scale);
                      }}
                    >
                    <Image
                        style={MissionPostScreenStyles.plusIconForComments}
                        source={require('../../assets/icons/plusIcon.png')}
                    />
                    </TouchableOpacity>
                </ScrollView>
                <View/>
                <View style={MissionPostScreenStyles.commonButton}>
                    <CommonButton
                        title="완료"
                        onPress={() => navigation.navigate('Album')}
                    />
                </View>
            </View>

        </KeyboardAvoidingView>
    );
};

export default MissionPostScreen;
