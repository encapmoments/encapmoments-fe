import { View, Text, TouchableOpacity } from 'react-native';
import DailyMissionStyles from './DailyMissionStyles';

const DailyMission = ({ navigation, title, reward, daily_id, is_completed }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MissionSelect', { id: daily_id, type: 'daily' })}
      disabled={is_completed}
      activeOpacity={is_completed ? 1 : 0.5}
    >
      <View style={DailyMissionStyles.wrapper}>
        <View style={[DailyMissionStyles.dailyMissionWrapper, is_completed && DailyMissionStyles.completedWrapper]}>
          <Text style={DailyMissionStyles.dailyMissionText}>{!is_completed ? title : ''}</Text>
          <Text style={DailyMissionStyles.dailyMissionPoint}>{reward}<Text style={DailyMissionStyles.dailyMissionPointP}> p</Text></Text>
        </View>

        {is_completed && (

            <View style={DailyMissionStyles.overlay}>
                <Text style={DailyMissionStyles.overlayText}>수행 완료!</Text>
            </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DailyMission;
