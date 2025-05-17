import { View, Text, Image, TouchableOpacity } from 'react-native';
import MissionSelectScreenStyles from './MissionSelectScreenStyles';
import { CommonButton } from '../../common/commonIndex';

const MissionSelectScreen = ({ navigation, route }) => {
  const { mission, type } = route.params;

  // type에 따라 필드 분기
  let mission_image, mission_title, mission_description, mission_reward;

  if (type === 'daily') {
    mission_image = mission.daily_image;
    mission_title = mission.daily_title;
    mission_description = mission.daily_description;
    mission_reward = mission.reward;
  } else if (type === 'weekly') {
    mission_image = mission.weekly_image;
    mission_title = mission.weekly_title;
    mission_description = mission.weekly_description;
    mission_reward = mission.reward;
  }

  return (
    <View style={MissionSelectScreenStyles.backgroundStyle}>
      <TouchableOpacity onPress={() => navigation.pop()} style={MissionSelectScreenStyles.touchBackArrow}>
        <Image
          style={MissionSelectScreenStyles.backArrow}
          source={require('../../assets/icons/backArrowWrapper.png')}
        />
      </TouchableOpacity>

      <Image
        style={MissionSelectScreenStyles.missionImage}
        source={
          typeof mission_image === 'number'
            ? mission_image
            : { uri: mission_image }
        }
      />
      <View style={MissionSelectScreenStyles.missionInfo}>
        <Text style={MissionSelectScreenStyles.missionTitle}>{mission_title}</Text>

        <Text style={MissionSelectScreenStyles.missionPoint}>
          {mission_reward} <Text style={MissionSelectScreenStyles.missionPointP}>p</Text>
        </Text>

        <Text style={MissionSelectScreenStyles.missionTitle}>설명</Text>
        <Text style={MissionSelectScreenStyles.missionDescription}>{mission_description}</Text>

        <Text style={MissionSelectScreenStyles.missionTitle}>인증 방식</Text>
        <Text style={MissionSelectScreenStyles.missionDescription}>
          사진을 넣고, 구성원 각자 느낀점을 작성하세요!
        </Text>

        <View style={MissionSelectScreenStyles.paddings}>
          <CommonButton
            title="수행하러 가기"
            onPress={() => navigation.navigate('MissionPost')}
            style={MissionSelectScreenStyles.commonButton}
          />
        </View>
      </View>
    </View>
  );
};

export default MissionSelectScreen;
