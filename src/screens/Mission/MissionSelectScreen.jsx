import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import MissionSelectScreenStyles from './MissionSelectScreenStyles';
import Colors from '../../styles/colors';
import { CommonButton } from '../../common/commonIndex';

import { useGetMissionDetail } from '../../viewmodels/missionViewModels';

const MissionSelectScreen = ({ navigation, route }) => {
  const { id, type } = route.params || {};
  const accessToken = 'mock-access-token';

  const { mission, loading } = useGetMissionDetail(type, id, accessToken);

  if (loading) {
    return (
      <View style={MissionSelectScreenStyles.backgroundStyle}>
        <ActivityIndicator size="large" color={Colors.orange} />
      </View>
    );
  }

  if (!mission) {
    return (
      <View style={MissionSelectScreenStyles.backgroundStyle}>
        <Text>미션을 불러오지 못했습니다.</Text>
      </View>
    );
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
          typeof mission.mission_image === 'number'
            ? mission.mission_image
            : { uri: mission.mission_image }
        }
      />
      <View style={MissionSelectScreenStyles.missionInfo}>
        <Text style={MissionSelectScreenStyles.missionTitle}>{mission.mission_title}</Text>

        <Text style={MissionSelectScreenStyles.missionPoint}>
          {mission.reward} <Text style={MissionSelectScreenStyles.missionPointP}>p</Text>
        </Text>

        <Text style={MissionSelectScreenStyles.missionTitle}>설명</Text>
        <Text style={MissionSelectScreenStyles.missionDescription}>{mission.mission_description}</Text>

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
