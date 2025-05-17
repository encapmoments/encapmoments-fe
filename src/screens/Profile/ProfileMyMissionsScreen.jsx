import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import ProfileMyMissionsScreenStyles from './ProfileMyMissionsScreenStyles';
import { TabBar } from '../../common/commonIndex';
import { Weekly, Daily } from '../../components/Profile/profileIndex';
import { useGetProfileMissions } from '../../viewmodels/profileViewModels';

const ProfileMyMissionsScreen = ({ navigation }) => {

    const accessToken = 'mock-access-token';
    const { profileDailyMissions, profileWeeklyMissions, loading  } = useGetProfileMissions(accessToken);

    if (loading) {
        return (
            <ActivityIndicator size="large" />
        );
    }

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
                    {profileWeeklyMissions.map((weekly) => (
                        <Weekly
                            key={weekly.weekly_id}
                            weekly_id={weekly.weekly_id}
                            weekly_image={
                                typeof weekly.weekly_image === 'string'
                                ? { uri: weekly.weekly_image }
                                : weekly.weekly_image
                            }
                            weekly_title={weekly.weekly_title}
                            reward={weekly.reward}
                        />
                    ))}
                </ScrollView>
                <Text style={ProfileMyMissionsScreenStyles.text}>일일 미션</Text>
                <ScrollView showsHorizontalScrollIndicator={false} style={ProfileMyMissionsScreenStyles.dailyMissionWrapper}>
                    {profileDailyMissions.map((daily) => (
                        <Daily
                            key={daily.daily_id}
                            daily_id={daily.daily_id}
                            daily_title={daily.daily_title}
                            reward={daily.reward}
                        />
                    ))}
                </ScrollView>
            </View>
            <TabBar navigation={navigation} />
        </>

    );
};

export default ProfileMyMissionsScreen;
