import { View, Text, useWindowDimensions } from 'react-native';
import getDailyStyles from './DailyStyles';

const Daily = ({ daily_id, daily_title, reward }) => {
    const { width, height } = useWindowDimensions();
    const dailyStyles = getDailyStyles(width, height);

    return (
        <View style={dailyStyles.backgroundStyle}>
            <Text style={dailyStyles.dailyTitle}>{daily_title }</Text>
            <Text style={dailyStyles.dailyPoint}>{ reward }<Text style={dailyStyles.dailyPointP}> p</Text></Text>
        </View>
    );
};

export default Daily;
