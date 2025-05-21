import { View, Text, TouchableOpacity, Image } from 'react-native';
import WeeklyMissionStyles from './WeeklyMissionStyles';

const WeeklyMission = ({ navigation, ...mission }) => {
  const {
    weekly_image,
    weekly_title,
    reward,
    weekly_id,
    is_completed,
  } = mission;

  const completed = Boolean(is_completed);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MissionSelect', { mission, type: 'weekly' })}
      disabled={completed}
      activeOpacity={completed ? 1 : 0.5}
    >
      <View style={WeeklyMissionStyles.wrapper}>
        <View style={[
          WeeklyMissionStyles.weeklyMissionWrapper,
          completed && WeeklyMissionStyles.completedWrapper,
        ]}>
          <Image
            style={WeeklyMissionStyles.weeklyMissionImage}
            source={
              typeof weekly_image === 'string'
                ? { uri: weekly_image }
                : weekly_image
            }
          />
          <Text style={WeeklyMissionStyles.weeklyMissionTitle}>{weekly_title}</Text>
          <View style={WeeklyMissionStyles.rewardRow}>
            <Text style={WeeklyMissionStyles.weeklyMissionReward}>{reward}</Text>
            <Text style={WeeklyMissionStyles.weeklyMissionRewardP}> p</Text>
          </View>
        </View>

        {completed && (
          <View style={WeeklyMissionStyles.overlay}>
            <Text style={WeeklyMissionStyles.overlayText}>수행 완료!</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default WeeklyMission;
