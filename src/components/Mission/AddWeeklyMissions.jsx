import { View, Text, TouchableOpacity, Image } from 'react-native';
import AddWeeklyMissionsStyles from './AddWeeklyMissionsStyles';

const AddWeeklyMissions = ({ navigation }) => {
    return (
        <View style={AddWeeklyMissionsStyles.weeklyNoMission}>
        <TouchableOpacity onPress={() => navigation.navigate('MissionCreate')}>
            <Image
                style={AddWeeklyMissionsStyles.plusIcon}
                source={require('../../assets/icons/plusIcon.png')}
            />
        </TouchableOpacity>
          <Text style={AddWeeklyMissionsStyles.weeklyNoMissionText}>주간 미션을 만드세요!</Text>
        </View>
    );
};

export default AddWeeklyMissions;
