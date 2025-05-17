import { View, Text } from 'react-native';
import DailyStyles from './DailyStyles';

const Daily = ({ daily_id, daily_title, reward }) => {
    return (
        <View style={DailyStyles.backgroundStyle}>
            <Text style={DailyStyles.dailyTitle}>{daily_title }</Text>
            <Text style={DailyStyles.dailyPoint}>{ reward }<Text style={DailyStyles.dailyPointP}> p</Text></Text>
        </View>
    );
};

export default Daily;
