import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CommonButton } from "../../common/commonIndex";
import getMissionCreateScreenStyles from "./MissionCreateScreenStyles";
import { CreateMissionMembers } from "../../components/Mission/missionIndex";
import { generateWeeklyMission } from "../../models/mission";
import useAccessToken from "../../models/accessToken";

import { ActivityIndicator } from "react-native";

const MissionCreateScreen = ({ navigation }) => {
  const [members, setMembers] = useState([{ age: "", gender: "" }]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowDimensions();
  const createStyles = getMissionCreateScreenStyles(width, height);

  const accessToken = useAccessToken();
  const safePadding = "5%";

  const handleGenerateMission = async () => {
    try {
      setLoading(true);
      const requestData = {
        text: description,
        members: members.map(m => ({
          age: parseInt(m.age, 10),
          gender: m.gender,
        })),
      };

      const result = await generateWeeklyMission(requestData, accessToken);

      Alert.alert("미션 생성 성공", "AI가 미션을 생성했어요!");
      navigation.navigate("Mission");
    } catch (error) {
      Alert.alert(
        "오류",
        error.response?.data?.message || "미션 생성에 실패했습니다.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={createStyles.safeArea}>
      <KeyboardAvoidingView style={createStyles.backgroundStyle}>
        <ScrollView
          contentContainerStyle={createStyles.scroll}
          keyboardShouldPersistTaps="handled">
          <View style={{ padding: safePadding }}>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={createStyles.touchBackArrow}>
              <Image
                style={createStyles.backArrow}
                source={require("../../assets/icons/backArrowWrapper.png")}
              />
            </TouchableOpacity>

            <Text style={createStyles.missionText}>주간 미션 추천</Text>
            <Text style={createStyles.missionDescriptionText}>
              원하는 사항을 입력하세요!
            </Text>
            <Text style={createStyles.missionDescriptionText}>
              AI가 요구사항에 맞게 미션을 추천해드립니다! 😀
            </Text>

            {/* 구성원 선택 */}
            <Text style={createStyles.missionTitleText}>구성원 선택</Text>
            <View style={createStyles.inputTextWrapper}>
              {/* <CreateMissionMembers members={members} setMembers={setMembers} /> */}
            </View>

            {/* 부가 설명 */}
            <Text style={createStyles.missionTitleText}>부가 설명</Text>
            <View style={createStyles.inputTextWrapper}>
              <TextInput
                multiline
                style={createStyles.inputText}
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
                style={createStyles.commonButton}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MissionCreateScreen;
