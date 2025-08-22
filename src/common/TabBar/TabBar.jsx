import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from "react-native";

import getTabBarStyles from "./TabBarStyles";
import TabBarSVG from "./TabBarSVG";

const TabBar = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const tabBarStyles = getTabBarStyles(width, height);
  return (
    <View style={tabBarStyles.tabBar}>
      <TabBarSVG width={width} height={height} />
      <View style={tabBarStyles.tabBarIcons}>
        <TouchableOpacity onPress={() => navigation.navigate("Mission")}>
          <Image
            style={tabBarStyles.tabBarMissionIcon}
            source={require("../../assets/icons/home.png")}
          />
          <Text style={tabBarStyles.tabBarText}>미션</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Album")}>
          <Image
            style={tabBarStyles.tabBarMissionIcon}
            source={require("../../assets/icons/calendar.png")}
          />
          <Text style={tabBarStyles.tabBarText}>앨범</Text>
        </TouchableOpacity>

        {/* TODO : 마켓 가는 아이콘 하나 추가해서 총 4개로 만들기 */}

        <TouchableOpacity onPress={() => navigation.navigate("Market")}>
          <Image
            style={tabBarStyles.tabBarMissionIcon}
            source={require("../../assets/icons/market.png")}
          />
          <Text style={tabBarStyles.tabBarText}>마켓</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            style={tabBarStyles.tabBarMissionIcon}
            source={require("../../assets/icons/profile.png")}
          />
          <Text style={tabBarStyles.tabBarText}>프로필</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabBar;
