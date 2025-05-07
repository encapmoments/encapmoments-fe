import { View, Text, TouchableOpacity } from 'react-native';
import DailyMissionStyles from './DailyMissionStyles';

const DailyMission = ({ navigation, title, daily_id }) => { /* TODO: daily_id, reward 추가 */
    return (
        <TouchableOpacity onPress= {() => navigation.navigate('MissionSelect', { daily_id }) }>
        <View style={DailyMissionStyles.dailyMissionWrapper}>
            <Text style={DailyMissionStyles.dailyMissionText}>{title}</Text>

            { /* TODO : reward 안적어 놓음 */ }


        </View>
        </TouchableOpacity>
    );
};

export default DailyMission;
