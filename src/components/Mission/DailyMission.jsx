import { View, Text, TouchableOpacity } from 'react-native';
import DailyMissionStyles from './DailyMissionStyles';

const DailyMission = ({ navigation, ...mission }) => {
  const {
    daily_title,
    reward,
    daily_id,
    is_completed,
  } = mission;

  const completed = Boolean(is_completed);


  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MissionSelect', { mission, type: 'daily' })}
      disabled={completed}
      activeOpacity={completed ? 1 : 0.5}
    >
      <View style={DailyMissionStyles.wrapper}>
        <View style={[
          DailyMissionStyles.dailyMissionWrapper,
          completed && DailyMissionStyles.completedWrapper,
        ]}>
          <Text style={DailyMissionStyles.dailyMissionText}>
            {!completed ? daily_title : ''}
          </Text>
          <Text style={DailyMissionStyles.dailyMissionPoint}>
            {reward}<Text style={DailyMissionStyles.dailyMissionPointP}> p</Text>
          </Text>
        </View>

        {completed && (
          <View style={DailyMissionStyles.overlay}>
            <Text style={DailyMissionStyles.overlayText}>수행 완료!</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};


export default DailyMission;


