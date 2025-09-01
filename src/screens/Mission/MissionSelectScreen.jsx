import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import getMissionSelectScreenStyles from "./MissionSelectScreenStyles";
import { CommonButton } from "../../common/commonIndex";
import { getDailyMissionDetail, getWeeklyMissionDetail } from "../../models/mission";
import { useAuthStore } from "../../store/store";
import baseUrl from "../../models/baseUrl";

const MissionSelectScreen = ({ navigation, route }) => {
  const { mission, type } = route.params;
  const { accessToken } = useAuthStore();
  
  const [detailMission, setDetailMission] = useState(null);
  const [loading, setLoading] = useState(true);

  const { width, height } = useWindowDimensions();
  const dailyStyles = getMissionSelectScreenStyles(width, height);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        let detail;
        if (type === "daily") {
          detail = await getDailyMissionDetail(mission.daily_id, accessToken);
        } else {
          detail = await getWeeklyMissionDetail(mission.weekly_id, accessToken);
        }
        setDetailMission(detail);
      } catch (err) {
        console.error("미션 상세 조회 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [mission, type, accessToken]);

  // 로딩 중일 때
  if (loading) {
    return (
      <SafeAreaView style={dailyStyles.safeArea}>
        <View style={[dailyStyles.backgroundStyle, { justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color="#FF6B35" />
          <Text style={{ marginTop: 10, color: '#fff' }}>미션 정보를 불러오는 중...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // 상세 데이터가 없을 때
  if (!detailMission) {
    return (
      <SafeAreaView style={dailyStyles.safeArea}>
        <View style={[dailyStyles.backgroundStyle, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ color: '#fff' }}>미션 정보를 불러올 수 없습니다.</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: '#FF6B35', marginTop: 10 }}>돌아가기</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // type에 따라 필드 분기 (detailMission 사용)
  let mission_image, mission_title, mission_description, mission_reward, mission_id;

  if (type === "daily") {
    mission_image = detailMission.daily_image;
    mission_title = detailMission.daily_title;
    mission_description = detailMission.daily_description;
    mission_reward = detailMission.reward;
    mission_id = detailMission.daily_id;
  } else if (type === "weekly") {
    mission_image = detailMission.weekly_image;
    mission_title = detailMission.weekly_title;
    mission_description = detailMission.weekly_description;
    mission_reward = detailMission.reward;
    mission_id = detailMission.weekly_id;
  }

  console.log("detailMission:", detailMission);
  console.log("mission_image:", mission_image);
  console.log("mission_description:", mission_description);

  return (
    <SafeAreaView style={dailyStyles.safeArea}>
      <View style={dailyStyles.backgroundStyle}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={dailyStyles.touchBackArrow}>
          <Image
            style={dailyStyles.backArrow}
            source={require("../../assets/icons/backArrowWrapper.png")}
          />
        </TouchableOpacity>

        <Image
          style={dailyStyles.missionImage}
          source={
            typeof mission_image === "number"
              ? mission_image
              : { uri: mission_image }
          }
          onError={(e) => console.log("Image load error:", e.nativeEvent.error)}
        />

        <View style={dailyStyles.missionInfo}>
          <Text style={dailyStyles.missionTitle}>{mission_title}</Text>

          <Text style={dailyStyles.missionPoint}>
            {mission_reward} <Text style={dailyStyles.missionPointP}>p</Text>
          </Text>

          <Text style={dailyStyles.missionSubTitle1}>설명</Text>
          <Text style={dailyStyles.missionDescription}>
            {mission_description || "설명이 없습니다."}
          </Text>

          <Text style={dailyStyles.missionSubTitle2}>인증 방식</Text>
          <Text style={dailyStyles.missionDescription}>
            사진을 넣고, 구성원 각자 느낀점을 작성하세요!
          </Text>

          <View style={dailyStyles.paddings}>
            <CommonButton
              title="수행하러 가기"
              onPress={() =>
                navigation.navigate("MissionPost", {
                  mission_type: type,
                  mission_id: mission_id,
                })
              }
              style={dailyStyles.commonButton}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MissionSelectScreen;
