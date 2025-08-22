import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import getMissionSelectScreenStyles from "./MissionSelectScreenStyles";
import { CommonButton } from "../../common/commonIndex";
import baseUrl from "../../models/baseUrl";

const MissionSelectScreen = ({ navigation, route }) => {
  const { mission, type } = route.params;

  const { width, height } = useWindowDimensions();
  const dailyStyles = getMissionSelectScreenStyles(width, height);

  // type에 따라 필드 분기
  let mission_image, mission_title, mission_description, mission_reward;

  if (type === "daily") {
    mission_image = mission.daily_image;
    mission_title = mission.daily_title;
    mission_description = mission.daily_description;
    mission_reward = mission.reward;
  } else if (type === "weekly") {
    mission_image = mission.weekly_image;
    mission_title = mission.weekly_title;
    mission_description = mission.weekly_description;
    mission_reward = mission.reward;
  }

  console.log("route.params.mission:", mission);

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
              : {
                  uri:
                    type === "daily"
                      ? `${baseUrl}${mission_image}`
                      : mission_image,
                }
          }
        />
        <View style={dailyStyles.missionInfo}>
          <Text style={dailyStyles.missionTitle}>{mission_title}</Text>

          <Text style={dailyStyles.missionPoint}>
            {mission_reward} <Text style={dailyStyles.missionPointP}>p</Text>
          </Text>

          <Text style={dailyStyles.missionSubTitle1}>설명</Text>
          <Text style={dailyStyles.missionDescription}>
            {mission_description}
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
                  mission_id:
                    type === "daily" ? mission.daily_id : mission.weekly_id,
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
