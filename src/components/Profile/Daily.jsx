import { View, Text } from 'react-native';
import DailyStyles from './DailyStyles';

const Daily = () => {
    return (
        <View style={DailyStyles.backgroundStyle}>
            <Text style={DailyStyles.dailyTitle}>얼굴 마주보고 웃기</Text>
            <Text style={DailyStyles.dailyPoint}>100<Text style={DailyStyles.dailyPointP}> p</Text></Text>
        </View>
    );
};

export default Daily;
