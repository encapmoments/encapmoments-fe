import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  Alert,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProfileBox, LogoutModal } from "../../components/Profile/profileIndex";
import { TabBar } from "../../common/commonIndex";
import getProfileScreenStyles from "./ProfileScreenStyles";
import { useGetProfileUser } from "../../viewmodels/profileViewModels";
import useAccessToken from "../../models/accessToken";
import { useLogout } from "../../viewmodels/authViewModels";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const accessToken = useAccessToken();
  const { width, height } = useWindowDimensions();
  const profileStyles = getProfileScreenStyles(width, height);

  const { profile, profileLoading } = useGetProfileUser(accessToken);
  const { handleLogout } = useLogout();

  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const onLogout = () => {
    setLogoutModalVisible(true);
  };

  const handleLogoutConfirm = () => {
    setLogoutModalVisible(false);
    handleLogout(
      () =>
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        }),
      err => Alert.alert("오류", err),
    );
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };

  if (profileLoading || !profile) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <SafeAreaView style={profileStyles.safeArea}>
        <View style={profileStyles.backgroundStyle}>
          <View style={profileStyles.topStyle}>
            <Text style={profileStyles.mainText}>프로필</Text>
          </View>
          <View style={profileStyles.profileImageWrapper}>
            <Image
              style={profileStyles.profileImage}
              source={
                typeof profile.profile_image === "string"
                  ? { uri: profile.profile_image }
                  : profile.profile_image
              }
            />
          </View>
          <Text style={profileStyles.nicknameText}>{profile.nickname}</Text>
          <View style={profileStyles.boxWrapper}>
            <Text style={profileStyles.boxText1}>내 추억 점수</Text>
            <View style={profileStyles.box}>
              <Text style={profileStyles.boxText2}>{profile.points}</Text>
              <Text style={profileStyles.boxText2_2}> points</Text>
            </View>
          </View>
          <ProfileBox
            title={"개인정보 수정"}
            navigation={navigation}
            route="ProfileAccount"
          />
          <ProfileBox
            title={"내 미션 확인"}
            navigation={navigation}
            route="ProfileMyMissions"
          />
          <ProfileBox
            title={"내 기프티콘"}
            navigation={navigation}
            route="profileGifticon"
          />
          <ProfileBox title={"로그아웃"} onPress={onLogout} />
        </View>
      </SafeAreaView>
      <TabBar navigation={navigation} />

      <LogoutModal
        visible={logoutModalVisible}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </>
  );
};

export default ProfileScreen;
