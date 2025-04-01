import { View, Text } from 'react-native';
import DailyMissionStyles from './DailyMissionStyles';

const DailyMission = () => {
    return (
        <View style={DailyMissionStyles.dailyMissionWrapper}>
            <Text style={DailyMissionStyles.dailyMissionText}>무궁화 꽃</Text>
        </View>
    );
};

export default DailyMission;
