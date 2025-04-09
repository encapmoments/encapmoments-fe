import React from 'react';
import { View, Text, Image } from 'react-native';

import { ProfileBox } from '../../components/Profile/profileIndex';
import { TabBar } from '../../common/commonIndex';
import ProfileScreenStyles from './ProfileScreenStyles';

const ProfileScreen = ({ navigation }) => {

  return (
    <>
      <View style={ProfileScreenStyles.backgroundStyle}>
        <View style={ProfileScreenStyles.topStyle}>
          <Text style={ProfileScreenStyles.mainText}>프로필</Text>
        </View>
        <View style={ProfileScreenStyles.profileImageWrapper}>
          <Image style={ProfileScreenStyles.profileImage} source={require('../../assets/AppBarImages/person.png')} />
        </View>
        <Text style={ProfileScreenStyles.nicknameText}>우리가족</Text>
        <View style={ProfileScreenStyles.boxWrapper}>
          <Text style={ProfileScreenStyles.boxText1}>내 추억 점수</Text>
          <Text style={ProfileScreenStyles.boxText2}>360 points</Text>
        </View>
        <ProfileBox title={'개인정보 수정'} navigation={navigation} route="ProfileAccount" />
        <ProfileBox title={'내 미션 확인'} navigation={navigation} route="ProfileAccount" />
        <ProfileBox title={'로그아웃'} navigation={navigation} route="Login" />
      </View>
      <TabBar navigation={navigation}/>
    </>
  );
};

export default ProfileScreen;
