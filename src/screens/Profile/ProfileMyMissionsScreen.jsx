import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import getProfileMyMissionsScreenStyles from "./ProfileMyMissionsScreenStyles";
import { TabBar } from "../../common/commonIndex";
import { Weekly, Daily } from "../../components/Profile/profileIndex";
import { useGetProfileMissions } from "../../viewmodels/profileViewModels";
import useAccessToken from "../../models/accessToken";
import { useEffect } from "react";
import useMock from "../../models/useMock";

const ProfileMyMissionsScreen = ({ navigation }) => {
  const accessToken = useAccessToken();
  const { width, height } = useWindowDimensions();
  const pmStyles = getProfileMyMissionsScreenStyles(width, height);

  const { profileDailyMissions, profileWeeklyMissions, loading } = useGetProfileMissions(accessToken);

  useEffect(() => {
    console.log("=== 미션 데이터 디버깅 ===");
    console.log("useMock:", useMock);
    console.log("Daily missions length:", profileDailyMissions?.length);
    console.log("Weekly missions length:", profileWeeklyMissions?.length);
    console.log("Daily missions data:", JSON.stringify(profileDailyMissions, null, 2));
    console.log("Weekly missions data:", JSON.stringify(profileWeeklyMissions, null, 2));
    
    // is_completed 상태 확인
    console.log("=== is_completed 상태 확인 ===");
    profileDailyMissions.forEach((mission, index) => {
      console.log(`Daily Mission ${index + 1}:`, {
        title: mission.mission_title,
        reward: mission.reward,
        is_completed: mission.is_completed,
        created_at: mission.created_at
      });
    });
    
    profileWeeklyMissions.forEach((mission, index) => {
      console.log(`Weekly Mission ${index + 1}:`, {
        title: mission.mission_title,
        reward: mission.reward,
        is_completed: mission.is_completed,
        created_at: mission.created_at
      });
    });
  }, [profileDailyMissions, profileWeeklyMissions]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <SafeAreaView style={pmStyles.safeArea}>
        <View
          style={pmStyles.backgroundStyle}
          behavior="height"
          keyboardVerticalOffset={0}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={pmStyles.touchBackArrow}>
            <Image
              style={pmStyles.backArrow}
              source={require("../../assets/icons/backArrowWrapper.png")}
            />
          </TouchableOpacity>
          <View style={pmStyles.topStyle}>
            <Text style={pmStyles.mainText}>내 미션 확인</Text>
          </View>
        </View>
        <View style={pmStyles.missionWrapper}>
          <Text style={pmStyles.text}>주간 미션</Text>
          <View style={pmStyles.missionWrapperWrapper}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={pmStyles.weeklyMissionWrapper}>
              {profileWeeklyMissions.map((weekly, index) => (
                <Weekly
                  key={weekly.weekly_id ?? `weekly-${index}`}
                  weekly_id={weekly.weekly_id ?? index}
                  weekly_image={
                    typeof weekly.mission_image === "string"
                      ? { uri: weekly.mission_image }
                      : weekly.mission_image
                  }
                  weekly_title={weekly.mission_title}
                  reward={weekly.reward}
                />
              ))}
            </ScrollView>
          </View>
          <Text style={pmStyles.text}>일일 미션</Text>
          <View style={pmStyles.missionWrapperWrapper}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={pmStyles.dailyMissionWrapper}>
              {profileDailyMissions.map((daily, index) => (
                <Daily
                  key={daily.daily_id ?? `daily-${index}`}
                  daily_id={daily.daily_id ?? index}
                  daily_title={daily.mission_title}
                  reward={daily.reward}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
      <TabBar navigation={navigation} />
    </>
  );
};

export default ProfileMyMissionsScreen;
