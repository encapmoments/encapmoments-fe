import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

import { ProfileBox } from '../../components/Profile/profileIndex';
import { TabBar } from '../../common/commonIndex';
import ProfileScreenStyles from './ProfileScreenStyles';
import { useGetProfileUser } from '../../viewmodels/profileViewModels';

const ProfileScreen = ({ navigation }) => {
  const accessToken = 'mock-access-token';

  const { profile, loading } = useGetProfileUser(accessToken);

  if (loading) {
    return (
        <ActivityIndicator size="large" />
    );
  }

  return (
    <>
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
        <ProfileBox title={'로그아웃'} navigation={navigation} route="Login" />
      </View>
      <TabBar navigation={navigation}/>
    </>
  );
};

export default ProfileScreen;
