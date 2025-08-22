import { StyleSheet } from "react-native";
import { Fontsizes } from "../../styles/stylesIndex";
import Svg, { Path } from "react-native-svg";
import { Colors, Typography } from "../../styles/stylesIndex";

const getTabBarStyles = (width, height) =>
  StyleSheet.create({
    tabBar: {
      backgroundColor: Colors.basic,
      position: "absolute",
      bottom: 0,
      width: "100%",
      alignItems: "center",
    },
    // tabBarWrapper: { // TODO : react-natie-svg로 디자인 개선
    //   width: '100%',
    //   height: height * 0.1,
    //   borderTopLeftRadius: 50,
    //   borderTopRightRadius: 50,
    //   backgroundColor: Colors.white,
    //   borderColor: Colors.white,
    //   position: 'absolute',
    //   bottom: 0,
    //   zIndex: 0,
    // },
    tabBarIcons: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "90%",
      height: height * 0.1,
      zIndex: 1,
      marginBottom: height * 0.005,
    },
    tabBarMissionIcon: {
      width: width * 0.07,
      height: width * 0.07,
      resizeMode: "contain",
    },
    tabBarText: {
      ...Typography.bamin1,
      alignSelf: "center",
      fontSize: Fontsizes.sm,
      marginTop: height * 0.01,
      color: Colors.graytext,
    },
  });

export default getTabBarStyles;
