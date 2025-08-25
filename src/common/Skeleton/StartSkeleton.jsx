import React, { useState, useEffect } from "react";
import { View, useWindowDimensions, Animated } from "react-native";
import getStartSkeletonStyles from "./StartSkeletonStyles";
import CommonButton from "../CommonButton/CommonButton";
import { SafeAreaView } from "react-native-safe-area-context";

const StartSkeleton = ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    const startStyles = getStartSkeletonStyles(width, height);
    const [logoTextOpacity] = useState(new Animated.Value(0));
    const [logoIconOpacity] = useState(new Animated.Value(0));
    const [subText1Opacity] = useState(new Animated.Value(0));
    const [subText2Opacity] = useState(new Animated.Value(0));
    const [buttonOpacity] = useState(new Animated.Value(0));
    const handleStart = () => {
        navigation.navigate("Login");
    };

    useEffect(() => {
        // 1. logoText 등장 (1초 후)
        const timer1 = setTimeout(() => {
            Animated.timing(logoTextOpacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();
        }, 1000);

        // 2. logoIcon 등장 (2초 후)
        const timer2 = setTimeout(() => {
            Animated.timing(logoIconOpacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();
        }, 2000);

        // 3. 첫 번째 subText 등장 (3초 후)
        const timer3 = setTimeout(() => {
            Animated.timing(subText1Opacity, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }).start();
        }, 3000);

        // 4. 두 번째 subText 등장 (3.5초 후)
        const timer4 = setTimeout(() => {
            Animated.timing(subText2Opacity, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }).start();
        }, 3500);

        // 5. 버튼 등장 (4.5초 후)
        const timer5 = setTimeout(() => {
            Animated.timing(buttonOpacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();
        }, 4500);

        // 클린업 함수
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
        };
    }, [logoTextOpacity, logoIconOpacity, subText1Opacity, subText2Opacity, buttonOpacity]);

    return (
        <SafeAreaView style={startStyles.safeArea}>
            <View style={startStyles.backgroundStyle}>
                <Animated.Image
                    source={require("../../assets/logo/logo-text.png")}
                    alt="logoText"
                    style={[
                        startStyles.logoText,
                        { opacity: logoTextOpacity },
                    ]}
                />
                <Animated.Image
                    source={require("../../assets/logo/logo-icon.png")}
                    alt="logoIcon"
                    style={[
                        startStyles.logoIcon,
                        { opacity: logoIconOpacity },
                    ]}
                />
                <Animated.Text
                    style={[
                        startStyles.subText,
                        { opacity: subText1Opacity },
                    ]}
                >
                    미션을 통해 가족 다같이 추억을 만드세요!
                </Animated.Text>
                <Animated.Text
                    style={[
                        startStyles.subText,
                        { opacity: subText2Opacity },
                    ]}
                >
                    추억은 어딜 가든 남는답니다.
                </Animated.Text>
            </View>
            <Animated.View style={{ opacity: buttonOpacity }}>
                <CommonButton
                    title="시작하기"
                    style={startStyles.commonButton}
                    onPress={handleStart}
                />
            </Animated.View>
        </SafeAreaView>
    );
};

export default StartSkeleton;
