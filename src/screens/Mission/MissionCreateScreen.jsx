import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';

import { CommonButton } from '../../common/commonIndex';
import MissionCreateScreenStyles from './MissionCreateScreenStyles';
import { CreateMissionMembers } from '../../components/Mission/missionIndex';
import { generateWeeklyMission } from '../../models/mission';
import useAuthStore from '../../store/store';

const MissionCreateScreen = ({ navigation }) => {
  const [members, setMembers] = useState([{ age: '', gender: '' }]);
  const [description, setDescription] = useState('');

  const { accessToken } = useAuthStore(); // 상태에서 accessToken 가져오기

  const handleGenerateMission = async () => {
    try {
      const requestData = {
        text: description,
        members: members.map((m) => ({
          age: m.age,
          gender: m.gender,
        })),
      };

      const result = await generateWeeklyMission(requestData, accessToken);
      console.log(result);

      Alert.alert('미션 생성 성공', 'AI가 미션을 생성했어요!');
      navigation.navigate('Mission');
    } catch (error) {
      console.error('미션 생성 실패:', error);
      Alert.alert('오류', '미션 생성에 실패했습니다.');
    }
  };

  const safePadding = '5%';

  return (
    <View style={MissionCreateScreenStyles.backgroundStyle}>
      <View style={{ padding: safePadding }}>
        <TouchableOpacity onPress={() => navigation.pop()} style={MissionCreateScreenStyles.touchBackArrow}>
          <Image
            style={MissionCreateScreenStyles.backArrow}
            source={require('../../assets/icons/backArrowWrapper.png')}
          />
        </TouchableOpacity>
        <Text style={MissionCreateScreenStyles.missionText}>주간 미션 추천</Text>
        <Text style={MissionCreateScreenStyles.missionDescriptionText}>원하는 사항을 입력하세요!</Text>
        <Text style={MissionCreateScreenStyles.missionDescriptionText}>AI가 요구사항에 맞게 미션을 추천해드립니다! 😀</Text>
        <Text style={MissionCreateScreenStyles.missionTitleText}>구성원 선택</Text>
        <View style={MissionCreateScreenStyles.inputTextWrapper}>
          <CreateMissionMembers members={members} setMembers={setMembers} />
        </View>
        <Text style={MissionCreateScreenStyles.missionTitleText}>부가 설명</Text>
        <View style={MissionCreateScreenStyles.inputTextWrapper}>
          <TextInput
            multiline
            style={MissionCreateScreenStyles.inputText}
            value={description}
            onChangeText={setDescription}
            placeholder="부가 설명"
          />
        </View>
        <CommonButton
          title="미션 만들기"
          onPress={handleGenerateMission}
          style={MissionCreateScreenStyles.commonButton}
        />
      </View>
    </View>
  );
};

export default MissionCreateScreen;
