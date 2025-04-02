import { View, Text, TouchableOpacity } from 'react-native';
import DailyMissionStyles from './DailyMissionStyles';

const DailyMission = ({ navigation }) => {
    return (
        <TouchableOpacity onPress= {() => navigation.navigate('MissionSelect')}>
        <View style={DailyMissionStyles.dailyMissionWrapper}>
            <Text style={DailyMissionStyles.dailyMissionText}>무궁화 꽃</Text>
        </View>
        </TouchableOpacity>
    );
};

export default DailyMission;
