import React, { useEffect, useState } from "react";
import {
    Modal,
    View,
    Text,
    ActivityIndicator,
    useWindowDimensions,
    Animated,
} from "react-native";
import PaySkeletonStyles from "./PaySkeletonStyles";

const PaySkeleton = ({ visible }) => {
    const { width, height } = useWindowDimensions();
    const modalStyles = PaySkeletonStyles(width, height);
    const [loadingText, setLoadingText] = useState("결제 처리 중");
    const [isCompleted, setIsCompleted] = useState(false);
    const [progress] = useState(new Animated.Value(0));

    useEffect(() => {
        if (visible) {
            setIsCompleted(false);
            setLoadingText("결제 처리 중");

            const textInterval = setInterval(() => {
                setLoadingText(prev => {
                    if (prev === "결제 처리 중") { return "결제 처리 중."; }
                    if (prev === "결제 처리 중.") { return "결제 처리 중.."; }
                    if (prev === "결제 처리 중..") { return "결제 처리 중..."; }
                    return "결제 처리 중";
                });
            }, 500);

            Animated.timing(progress, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false,
            }).start();

            // 2초 후 완료 상태로 변경
            setTimeout(() => {
                clearInterval(textInterval);
                setIsCompleted(true);
                setLoadingText("완료되었습니다!");
            }, 2000);

            return () => {
                clearInterval(textInterval);
            };
        }
    }, [visible, progress]);

    if (!visible) { return null; }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={modalStyles.modalOverlay}>
                <View style={modalStyles.modalContainer}>
                    <View style={modalStyles.iconContainer}>
                        <View style={[modalStyles.paymentIcon, isCompleted && modalStyles.paymentIconCompleted]}>
                            <Text style={modalStyles.iconText}>
                                {isCompleted ? "✔️" : "💳"}
                            </Text>
                        </View>
                    </View>
                    {!isCompleted && (
                        <ActivityIndicator
                            size="large"
                            color="#4A4434"
                            style={modalStyles.loadingIndicator}
                        />
                    )}
                    <Text style={modalStyles.loadingText}>{loadingText}</Text>
                    <View style={modalStyles.progressContainer}>
                        <View style={modalStyles.progressBar}>
                            <Animated.View
                                style={[
                                    modalStyles.progressFill,
                                    {
                                        width: progress.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0%', '100%'],
                                        }),
                                    },
                                ]}
                            />
                        </View>
                    </View>
                    <Text style={modalStyles.subText}>
                        {isCompleted ? "결제가 성공적으로 완료되었습니다" : "잠시만 기다려주세요"}
                    </Text>
                </View>
            </View>
        </Modal>
    );
};

export default PaySkeleton;
