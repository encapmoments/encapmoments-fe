import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import ProfileMyMissionsScreenStyles from './ProfileMyMissionsScreenStyles';
import { TabBar } from '../../common/commonIndex';
import { Weekly, Daily } from '../../components/Profile/profileIndex';

const ProfileMyMissionsScreen = ({ navigation }) => {
    return (
        <>
            <View style={ProfileMyMissionsScreenStyles.backgroundStyle} behavior="height" keyboardVerticalOffset={0} >
                <TouchableOpacity onPress={() => navigation.pop()} style={ProfileMyMissionsScreenStyles.touchBackArrow}>
                    <Image
                        style={ProfileMyMissionsScreenStyles.backArrow}
                        source={require('../../assets/icons/backArrowWrapper.png')}
                    />
                </TouchableOpacity>
                <View style={ProfileMyMissionsScreenStyles.topStyle}>

                    <Text style={ProfileMyMissionsScreenStyles.mainText}>내 미션 확인</Text>
                </View>
            </View>
            <View style={ProfileMyMissionsScreenStyles.missionWrapper}>
                <Text style={ProfileMyMissionsScreenStyles.text}>주간 미션</Text>
                <ScrollView showsHorizontalScrollIndicator={false} style={ProfileMyMissionsScreenStyles.weeklyMissionWrapper}>
                    {/* Weekly map */}
                    <Weekly />
                    <Weekly />
                    <Weekly />
                    <Weekly />
                    <Weekly />
                </ScrollView>
                <Text style={ProfileMyMissionsScreenStyles.text}>일일 미션</Text>
                <ScrollView showsHorizontalScrollIndicator={false} style={ProfileMyMissionsScreenStyles.dailyMissionWrapper}>
                    {/* Daily map */}
                    <Daily />
                    <Daily />
                    <Daily />
                    <Daily />
                    <Daily />
                    <Daily />
                    <Daily />
                    <Daily />
                    <Daily />
                </ScrollView>
            </View>
            <TabBar navigation={navigation} />
        </>

    );
};

export default ProfileMyMissionsScreen;
