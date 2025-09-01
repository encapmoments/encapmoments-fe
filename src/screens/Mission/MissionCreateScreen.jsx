import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonButton } from "../../common/commonIndex";
import getMissionCreateScreenStyles from "./MissionCreateScreenStyles";
import { SelectMember, SelectMission } from "../../components/Mission/missionIndex";
import { generateWeeklyMission } from "../../models/mission";
import { getMembers } from "../../models/profile";
import useAccessToken from "../../models/accessToken";
import { ActivityIndicator } from "react-native";

const MissionCreateScreen = ({ navigation }) => {
  const [members, setMembers] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedGoal, setSelectedGoal] = useState(""); // 가족 목표
  const [selectedCategory, setSelectedCategory] = useState([]); // 미션 카테고리 (배열로 변경)
  const [loading, setLoading] = useState(false);
  const [loadingMembers, setLoadingMembers] = useState(true);
  const { width, height } = useWindowDimensions();
  const createStyles = getMissionCreateScreenStyles(width, height);

  const accessToken = useAccessToken();

  useEffect(() => {
    const loadFamilyMembers = async () => {
      try {
        setLoadingMembers(true);
        const familyMembers = await getMembers(accessToken);
        const formattedMembers = familyMembers.map(member => {
          let memberImage;
          if (typeof member.member_image === 'string' && member.member_image.trim() !== '') {
            memberImage = { uri: member.member_image };
          } else if (typeof member.member_image === 'number') {
            memberImage = member.member_image; // require() 형태
          } else {
            memberImage = require("../../assets/AppBarImages/person.png"); // 기본 이미지
          }

          let gender = member.member_gender;
          if (gender === "남자") {
            gender = "남";
          } else if (gender === "여자") {
            gender = "여";
          }

          return {
            id: member.member_id || member.id,
            memberImage: memberImage,
            memberName: member.member_name,
            selected: false,
            age: member.member_age ? member.member_age.toString() : "",
            gender: gender || "",
          };
        });

        setMembers(formattedMembers);
      } catch (error) {
        console.error("가족 구성원 로드 실패:", error);
        Alert.alert("오류", "가족 구성원 정보를 불러오는데 실패했습니다.");
        // 실패시 기본 데이터
        setMembers([
          {
            id: 1,
            memberImage: require("../../assets/AppBarImages/person.png"),
            memberName: "구성원1",
            selected: false,
            age: "",
            gender: "",
          },
        ]);
      } finally {
        setLoadingMembers(false);
      }
    };

    loadFamilyMembers();
  }, [accessToken]);

  const handleGenerateMission = async () => {
    try {
      setLoading(true);
      const selectedMembers = members.filter(member => member.selected);
      if (selectedMembers.length === 0) {
        Alert.alert("알림", "최소 1명의 구성원을 선택해주세요.");
        return;
      }

      let finalDescription = "";
      if (selectedGoal) {
        finalDescription += `가족 목표: ${selectedGoal}`;
      }
      if (selectedCategory && selectedCategory.length > 0) {
        finalDescription += selectedGoal ? `, 카테고리: ${selectedCategory.join(', ')}` : `카테고리: ${selectedCategory.join(', ')}`;
      }
      if (description) {
        finalDescription += (selectedGoal || (selectedCategory && selectedCategory.length > 0)) ? `, 추가 요청사항: ${description}` : description;
      }

      const requestData = {
        text: finalDescription || "우리 가족을 위한 재미있는 주간 미션을 만들어주세요.",
        members: selectedMembers.map(m => ({
          age: parseInt(m.age, 10) || 0,
          gender: m.gender || "미정",
          name: m.memberName,
        })),
      };

      console.log("미션 생성 요청 데이터:", requestData);

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

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
            AI가 요구사항에 맞게 미션을 추천해드립니다!
          </Text>

          <Text style={createStyles.missionTitleText}>구성원 선택</Text>
          <View style={createStyles.inputTextWrapper}>
            {loadingMembers ? (
              <View style={createStyles.loadingContainer}>
                <ActivityIndicator size="small" color="#666" />
                <Text style={createStyles.loadingText}>구성원 정보를 불러오는 중...</Text>
              </View>
            ) : (
              <SelectMember members={members} setMembers={setMembers} />
            )}
          </View>

          <Text style={createStyles.missionTitleText}>미션 선택</Text>
          <View style={createStyles.inputTextWrapper}>
            <SelectMission 
              onGoalSelect={handleGoalSelect}
              onCategorySelect={handleCategorySelect}
              selectedGoal={selectedGoal}
              selectedCategory={selectedCategory}
            />
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
              disabled={loadingMembers}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MissionCreateScreen;
