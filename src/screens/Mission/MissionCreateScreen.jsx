import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonButton } from "../../common/commonIndex";
import getMissionCreateScreenStyles from "./MissionCreateScreenStyles";
import { SelectMember, SelectMission } from "../../components/Mission/missionIndex";
import { generateWeeklyMission } from "../../models/mission";
import useAccessToken from "../../models/accessToken";
import { ActivityIndicator } from "react-native";

const MissionCreateScreen = ({ navigation }) => {
  const [members, setMembers] = useState([
    {
      id: 1,
      memberImage: require("../../assets/mock/album/album1.jpg"),
      memberName: "아빠",
      selected: false,
      age: "",
      gender: "",
    },
    {
      id: 2,
      memberImage: require("../../assets/mock/album/album2.jpg"),
      memberName: "엄마",
      selected: false,
      age: "",
      gender: "",
    },
    {
      id: 3,
      memberImage: require("../../assets/mock/album/album3.png"),
      memberName: "아들",
      selected: false,
      age: "",
      gender: "",
    },
    {
      id: 4,
      memberImage: require("../../assets/mock/album/album4.jpg"),
      memberName: "딸",
      selected: false,
      age: "",
      gender: "",
    },
  ]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowDimensions();
  const createStyles = getMissionCreateScreenStyles(width, height);

  const accessToken = useAccessToken();

  const handleGenerateMission = async () => {
    try {
      setLoading(true);
      const selectedMembers = members.filter(member => member.selected);
      if (selectedMembers.length === 0) {
        Alert.alert("알림", "최소 1명의 구성원을 선택해주세요.");
        return;
      }

      const requestData = {
        text: description,
        members: selectedMembers.map(m => ({
          age: parseInt(m.age, 10) || 0,
          gender: m.gender || "미정",
          name: m.memberName,
        })),
      };

      const result = await generateWeeklyMission(requestData, accessToken);

      Alert.alert("미션 생성 성공", "AI가 미션을 생성했어요!");
      navigation.navigate("Mission");
    } catch (error) {
      console.error("미션 생성 에러:", error);
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
      <View style={createStyles.backgroundStyle}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={createStyles.touchBackArrow}>
          <Image
            style={createStyles.backArrow}
            source={require("../../assets/icons/backArrowWrapper.png")}
          />
        </TouchableOpacity>
        <View style={createStyles.contentContainer}>
          <Text style={createStyles.missionText}>주간 미션 추천</Text>
          <Text style={createStyles.missionDescriptionText}>
            원하는 사항을 입력하세요!
          </Text>
          <Text style={createStyles.missionDescriptionText}>
            AI가 요구사항에 맞게 미션을 추천해드립니다! 😀
          </Text>

          <Text style={createStyles.missionTitleText}>구성원 선택</Text>
          <View style={createStyles.inputTextWrapper}>
            <SelectMember members={members} setMembers={setMembers} />
          </View>

          <Text style={createStyles.missionTitleText}>미션 선택</Text>
          <View style={createStyles.inputTextWrapper}>
            <SelectMission />
          </View>

          {loading ? (
            <View style={createStyles.loadingContainer}>
              <ActivityIndicator size="large" color="#f2ed" />
              <Text style={createStyles.loadingText}>미션을 생성하고 있어요...</Text>
            </View>
          ) : (
            <CommonButton
              title="미션 만들기"
              onPress={handleGenerateMission}
              style={createStyles.commonButton}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MissionCreateScreen;
