import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import getAppBarStyles from "./AppBarStyles";

const AppBar = () => {
  const { width, height } = useWindowDimensions();
  const appBarStyles = getAppBarStyles(width, height);

  const scrollRef = useRef(null);
  const indexRef = useRef(1);
  const autoSlideInterval = useRef(null);
  const [renderIndex, setRenderIndex] = useState(1);

  const realImages = [
    require("../../assets/AppBarImages/covers/cover1.jpg"),
    require("../../assets/AppBarImages/covers/cover2.jpg"),
    require("../../assets/AppBarImages/covers/cover3.jpg"),
    require("../../assets/AppBarImages/covers/cover4.jpg"),
  ];

  const images = [
    realImages[realImages.length - 1], // 복제 맨끝
    ...realImages, // 진짜 이미지들
    realImages[0], // 복제 맨앞
  ];

  const startAutoSlide = useCallback(() => {
    if (autoSlideInterval.current) {
      return;
    }
    autoSlideInterval.current = setInterval(() => {
      const nextIndex = indexRef.current + 1;
      scrollRef.current?.scrollTo({ x: width * nextIndex, animated: true });
      indexRef.current = nextIndex;
      setRenderIndex(nextIndex);
    }, 2000);
  }, [width]);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ x: width, animated: false }); // 시작 위치
    startAutoSlide();

    return () => stopAutoSlide(); // 언마운트 시 해제
  }, [startAutoSlide, stopAutoSlide, width]);

  const handleScrollEnd = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);

    if (newIndex === 0) {
      scrollRef.current?.scrollTo({
        x: width * realImages.length,
        animated: false,
      });
      indexRef.current = realImages.length;
      setRenderIndex(realImages.length);
    } else if (newIndex === realImages.length + 1) {
      scrollRef.current?.scrollTo({ x: width, animated: false });
      indexRef.current = 1;
      setRenderIndex(1);
    } else {
      indexRef.current = newIndex;
      setRenderIndex(newIndex);
    }
  };

  return (
    <View style={appBarStyles.AppBar}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={stopAutoSlide}
        onScrollEndDrag={startAutoSlide}
        onMomentumScrollEnd={handleScrollEnd}
        style={appBarStyles.AppBarCoverWrapper}
        contentContainerStyle={appBarStyles.AppBarCoverContent}>
        {images.map((src, i) => (
          <Image key={i} style={appBarStyles.AppBarCover} source={src} />
        ))}
      </ScrollView>

      <Text style={appBarStyles.AppBarText}> Encap{"\n"}Moments</Text>

      <View style={appBarStyles.AppBarAlarmWrapper}>
        <Image
          style={appBarStyles.AppBarAlarm}
          source={require("../../assets/AppBarImages/alarm.png")}
        />
      </View>

      <View style={appBarStyles.AppBarPersonWrapper}>
        <Image
          style={appBarStyles.AppBarPerson}
          source={require("../../assets/AppBarImages/person.png")}
        />
      </View>
    </View>
  );
};

export default AppBar;
