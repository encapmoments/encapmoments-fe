import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import { CommonButton } from '../../common/commonIndex';
import MissionCreateScreenStyles from './MissionCreateScreenStyles';

const MissionCreateScreen = ({ navigation }) => {

    const safePadding = '5%';

    return (
        <View style={MissionCreateScreenStyles.backgroundStyle}>
                <View style={{padding: safePadding}}>
                <TouchableOpacity onPress={() => navigation.pop()} style={MissionCreateScreenStyles.touchBackArrow}>
                    <Image
                        style={MissionCreateScreenStyles.backArrow}
                        source={require('../../assets/icons/backArrowWrapper.png')}
                    />
                </TouchableOpacity>
                <Text style={MissionCreateScreenStyles.missionText}>주간 미션 추천</Text>
                <Text style={MissionCreateScreenStyles.missionDescriptionText}>원하는 사항을 입력하세요!</Text>
                <Text style={MissionCreateScreenStyles.missionDescriptionText}>AI가 요구사항에 맞게 미션을 추천해드립니다! 😀</Text>
                <View style={MissionCreateScreenStyles.inputTextWrapper}>
                    <TextInput multiline style={MissionCreateScreenStyles.inputText} />
                </View>
                <CommonButton
                title="완료"
                onPress={() => navigation.navigate('Mission')}
                style={MissionCreateScreenStyles.commonButton}
                />
            </View>
        </View>
    );
};

export default MissionCreateScreen;
