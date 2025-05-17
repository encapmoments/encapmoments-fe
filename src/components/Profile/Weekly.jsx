import { View, Text, Image } from 'react-native';
import WeeklyStyles from './WeeklyStyles';

const Weekly = ({ weekly_id, weekly_title, weekly_image, reward }) => {
    return (
        <View style={WeeklyStyles.backgroundStyle}>
        <Image style={WeeklyStyles.weeklyImage} resizeMode="cover" source={ weekly_image }/>
        <Text style={WeeklyStyles.weeklyTitle}>{ weekly_title }</Text>
        <Text style={WeeklyStyles.weeklyPoint}>{ reward }<Text style={WeeklyStyles.weeklyPointP}> p</Text></Text>
        </View>
    );
};

export default Weekly;
