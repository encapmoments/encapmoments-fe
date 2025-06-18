import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import getWeeklyMissionStyles from './WeeklyMissionStyles';

const WeeklyMission = ({ navigation, ...mission }) => {
  const {
    weekly_image,
    weekly_title,
    reward,
    weekly_id,
    is_completed,
  } = mission;

  const completed = Boolean(is_completed);
  // const completed = is_completed === 1 || is_completed === '1';

  const { width, height } = useWindowDimensions();
  const weeklyStyles = getWeeklyMissionStyles(width, height);

  // console.log(mission);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MissionSelect', { mission, type: 'weekly' })}
      disabled={completed}
      activeOpacity={completed ? 1 : 0.5}
    >
      <View style={weeklyStyles.wrapper}>
        <View style={[
          weeklyStyles.weeklyMissionWrapper,
          completed && weeklyStyles.completedWrapper,
        ]}>
          <Image
            style={weeklyStyles.weeklyMissionImage}
            source={
              typeof weekly_image === 'string'
                ? { uri: weekly_image }
                : weekly_image
            }
          />
          <Text style={weeklyStyles.weeklyMissionTitle}>{weekly_title}</Text>
          <View style={weeklyStyles.rewardRow}>
            <Text style={weeklyStyles.weeklyMissionReward}>{reward}</Text>
            <Text style={weeklyStyles.weeklyMissionRewardP}> p</Text>
          </View>
        </View>

        {completed && (
          <View style={weeklyStyles.overlay}>
            <Text style={weeklyStyles.overlayText}>수행 완료!</Text>
          </View>
        )}


      </View>
    </TouchableOpacity>
  );
};

export default WeeklyMission;
