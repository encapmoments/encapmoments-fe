import { View, Text, Image, useWindowDimensions } from 'react-native';
import getWeeklyStyles from './WeeklyStyles';

const Weekly = ({ weekly_id, weekly_title, weekly_image, reward }) => {
    const { width, height } = useWindowDimensions();
    const weeklyStyles = getWeeklyStyles(width, height);

    return (
        <View style={weeklyStyles.backgroundStyle}>
        <Image style={weeklyStyles.weeklyImage} resizeMode="cover" source={ weekly_image }/>
        <Text style={weeklyStyles.weeklyTitle}>{ weekly_title }</Text>
        <Text style={weeklyStyles.weeklyPoint}>{ reward }<Text style={weeklyStyles.weeklyPointP}> p</Text></Text>
        </View>
    );
};

export default Weekly;
