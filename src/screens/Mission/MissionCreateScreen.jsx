import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../styles/stylesIndex';

import { CommonButton } from '../../common/commonIndex';
import MissionCreateScreenStyles from './MissionCreateScreenStyles';
import { CreateMissionMembers } from '../../components/Mission/missionIndex';
import { generateWeeklyMission } from '../../models/mission';
import useAccessToken from '../../models/accessToken';

import { ActivityIndicator } from 'react-native';

const MissionCreateScreen = ({ navigation }) => {
  const [members, setMembers] = useState([{ age: '', gender: '' }]);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const accessToken = useAccessToken();
  const safePadding = '5%';

  // const handleGenerateMission = async () => {
  //   try {
  //     setLoading(true);
  //     const requestData = {
  //       topic: `설명: ${description}\n구성원:\n` +
  //             members.map((m, i) => `- ${i + 1}번째: ${m.age}세 ${m.gender === '남자' ? '남성' : '여성'}`).join('\n'),
  //     };

  //     const result = await generateWeeklyMission(requestData, accessToken);

  //     Alert.alert('미션 생성 성공', 'AI가 미션을 생성했어요!');
  //     navigation.navigate('Mission');
  //   } catch (error) {
  //     console.error('❌ 미션 생성 실패:', error.response?.data || error.message);
  //     Alert.alert('오류', error.response?.data?.message || '미션 생성에 실패했습니다.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleGenerateMission = async () => {
  try {
    setLoading(true);
      const requestData = {
        text: description,
        members: members.map((m) => ({
          age: parseInt(m.age, 10),
          gender: m.gender,
        })),
      };

      // console.log('📤 전송할 데이터:', requestData);

      const result = await generateWeeklyMission(requestData, accessToken);
      // console.log('✅ 생성된 미션:', result);

      Alert.alert('미션 생성 성공', 'AI가 미션을 생성했어요!');
      navigation.navigate('Mission');
    } catch (error) {
      // console.error('❌ 미션 생성 실패:', error.response?.data || error.message);
      Alert.alert('오류', error.response?.data?.message || '미션 생성에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={MissionCreateScreenStyles.safeArea}>
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

          {/* 구성원 선택 */}
          <Text style={MissionCreateScreenStyles.missionTitleText}>구성원 선택</Text>
          <View style={MissionCreateScreenStyles.inputTextWrapper}>
            <CreateMissionMembers members={members} setMembers={setMembers} />
          </View>

          {/* 부가 설명 */}
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

          {/* 제출 버튼 */}
          {loading ? (
            <ActivityIndicator size="large" color="#f2ed" />
          ) : (
            <CommonButton
              title="미션 만들기"
              onPress={handleGenerateMission}
              style={MissionCreateScreenStyles.commonButton}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MissionCreateScreen;
