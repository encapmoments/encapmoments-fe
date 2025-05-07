import { View, Text, TouchableOpacity } from 'react-native';
import DailyMissionStyles from './DailyMissionStyles';

const DailyMission = ({ navigation, title, reward, daily_id }) => { /* TODO: daily_id, reward 추가 */
    return (
        <TouchableOpacity onPress= {() => navigation.navigate('MissionSelect', { daily_id }) }>
        <View style={DailyMissionStyles.dailyMissionWrapper}>
            <Text style={DailyMissionStyles.dailyMissionText}>{title}</Text>
            <Text style={DailyMissionStyles.dailyMissionPoint}>{reward}<Text style={DailyMissionStyles.dailyMissionPointP}>p</Text></Text>
        </View>
        </TouchableOpacity>
    );
};

export default DailyMission;
