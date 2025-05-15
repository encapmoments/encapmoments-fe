import { View, Text, Image } from 'react-native';
import WeeklyStyles from './WeeklyStyles';

const Weekly = () => {
    return (
        <View style={WeeklyStyles.backgroundStyle}>
        <Image style={WeeklyStyles.weeklyImage} resizeMode="cover" source={require('../../assets/images/example_image.png')}/>
        <Text style={WeeklyStyles.weeklyTitle}>기린이랑 사진 찍기</Text>
        <Text style={WeeklyStyles.weeklyPoint}>300<Text style={WeeklyStyles.weeklyPointP}> p</Text></Text>
        </View>
    );
};

export default Weekly;
