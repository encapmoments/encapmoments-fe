import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import getAddWeeklyMissionsStyles from './AddWeeklyMissionsStyles';

const AddWeeklyMissions = ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    const addWeeklyStyles = getAddWeeklyMissionsStyles(width, height);

    return (
        <View style={addWeeklyStyles.weeklyNoMission}>
        <TouchableOpacity onPress={() => navigation.navigate('MissionCreate')}>
            <Image
                style={addWeeklyStyles.plusIcon}
                source={require('../../assets/icons/plusIcon.png')}
            />
        </TouchableOpacity>
            <Text style={addWeeklyStyles.weeklyNoMissionText}>주간 미션을 만드세요!</Text>
        </View>
    );
};

export default AddWeeklyMissions;
