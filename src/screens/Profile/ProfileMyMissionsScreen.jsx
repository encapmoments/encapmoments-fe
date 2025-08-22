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

const ProfileMyMissionsScreen = ({ navigation }) => {
  const accessToken = useAccessToken();
  const { width, height } = useWindowDimensions();
  const pmStyles = getProfileMyMissionsScreenStyles(width, height);

  const { profileDailyMissions, profileWeeklyMissions, loading } =
    useGetProfileMissions(accessToken);

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
              {profileWeeklyMissions.map(weekly => (
                <Weekly
                  key={weekly.weekly_id}
                  weekly_id={weekly.weekly_id}
                  weekly_image={
                    typeof weekly.weekly_image === "string"
                      ? { uri: weekly.weekly_image }
                      : weekly.weekly_image
                  }
                  weekly_title={weekly.weekly_title}
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
              {profileDailyMissions.map(daily => (
                <Daily
                  key={daily.daily_id}
                  daily_id={daily.daily_id}
                  daily_title={daily.daily_title}
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
