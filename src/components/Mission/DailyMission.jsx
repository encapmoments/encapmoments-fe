import { View, Text, TouchableOpacity } from 'react-native';
import DailyMissionStyles from './DailyMissionStyles';

const DailyMission = ({ navigation, title }) => {
    return (
        <TouchableOpacity onPress= {() => navigation.navigate('MissionSelect')}>
        <View style={DailyMissionStyles.dailyMissionWrapper}>
            <Text style={DailyMissionStyles.dailyMissionText}>{title}</Text>
        </View>
        </TouchableOpacity>
    );
};

export default DailyMission;
