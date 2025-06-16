import React from 'react';
import { View, Text, Image, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileBox } from '../../components/Profile/profileIndex';
import { TabBar } from '../../common/commonIndex';
import ProfileScreenStyles from './ProfileScreenStyles';
import { useGetProfileUser } from '../../viewmodels/profileViewModels';
import useAccessToken from '../../models/accessToken';
import { useLogout } from '../../viewmodels/authViewModels';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = ( ) => {
  const navigation = useNavigation();
  const accessToken = useAccessToken();

  const { profile, profileLoading } = useGetProfileUser(accessToken);
  const { handleLogout } = useLogout();

  const onLogout = () => {
    Alert.alert('로그아웃', '정말 로그아웃 하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      {
        text: '확인',
        onPress: () => {
          handleLogout(
            () => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                  }),
            // () => navigation.navigate('Login'),

            (err) => Alert.alert('오류', err)
          );
        },
      },
    ]);
  };

  if (profileLoading || !profile) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <SafeAreaView style={ProfileScreenStyles.safeArea}>
        <View style={ProfileScreenStyles.backgroundStyle}>
          <View style={ProfileScreenStyles.topStyle}>
            <Text style={ProfileScreenStyles.mainText}>프로필</Text>
          </View>
          <View style={ProfileScreenStyles.profileImageWrapper}>
            <Image
              style={ProfileScreenStyles.profileImage}
              source={
                typeof profile.profile_image === 'string'
                  ? { uri: profile.profile_image }
                  : profile.profile_image
              }
            />
          </View>
          <Text style={ProfileScreenStyles.nicknameText}>{profile.nickname}</Text>
          <View style={ProfileScreenStyles.boxWrapper}>
            <Text style={ProfileScreenStyles.boxText1}>내 추억 점수</Text>
            <View style={ProfileScreenStyles.box}>
              <Text style={ProfileScreenStyles.boxText2}>{profile.points}</Text><Text style={ProfileScreenStyles.boxText2_2}> points</Text>
            </View>
          </View>
          <ProfileBox title={'개인정보 수정'} navigation={navigation} route="ProfileAccount" />
          <ProfileBox title={'내 미션 확인'} navigation={navigation} route="ProfileMyMissions" />
          <ProfileBox title={'로그아웃'} onPress={onLogout} />
        </View>
      </SafeAreaView>
      <TabBar navigation={navigation}/>
    </>
  );
};

export default ProfileScreen;
