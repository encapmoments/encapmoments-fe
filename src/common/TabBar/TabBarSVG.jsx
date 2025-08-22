import React from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../styles/stylesIndex";

const TabBarSVG = ({ width, height }) => {
  const barHeight = height * 0.13;
  const tabBarStyles = getTabBarSVGStyles(width, barHeight);

  const d = `
        M0, ${barHeight * 0.4}
        C${width * 0.2},0 ${width * 0.8},0 ${width}, ${barHeight * 0.4}
        L${width},${barHeight}
        L0,${barHeight}
        Z
    `;

  return (
    <View style={tabBarStyles.tabBarWrapper}>
      <Svg
        width={width}
        height={barHeight}
        viewBox={`0 0 ${width} ${barHeight}`}>
        <Path d={d} fill={Colors.white} />
      </Svg>
    </View>
  );
};

export default TabBarSVG;

const getTabBarSVGStyles = (width, barHeight) => {
  return StyleSheet.create({
    tabBarWrapper: {
      position: "absolute",
      bottom: 0,
      width: width,
      height: barHeight,
      zIndex: 0,
    },
  });
};
