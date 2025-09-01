import React, { useState } from "react";
import { TouchableOpacity, Text, useWindowDimensions, Alert } from "react-native";
import PayStyles from "./PayStyles";
import PayModal from "./PayModal";
import PaySkeleton from "../../common/Skeleton/PaySkeleton";
import useModal from "../../hooks/useModal";
import { purchaseItem } from "../../models/market";
import { useAuthStore } from "../../store/store";

const Pay = ({ navigation, isPointOK = false, item }) => {
    const { width, height } = useWindowDimensions();
    const payStyles = PayStyles(width, height);
    const payModal = useModal();
    const [isProcessing, setIsProcessing] = useState(false);
    const accessToken = useAuthStore(state => state.accessToken);

    const handlePay = () => {
        if (isPointOK) {
            Alert.alert("포인트 부족", "포인트가 부족합니다. 포인트를 충전해주세요.");
            return;
        }
        payModal.openModal();
    };

    const handleConfirm = async () => {
        payModal.closeModal();
        setIsProcessing(true);

        try {
            const response = await purchaseItem(item.item_id, accessToken);

            if (response.message === "기프티콘 구매 성공") {
                Alert.alert(
                    "구매 완료",
                    "기프티콘을 성공적으로 구매했습니다!",
                    [
                        {
                            text: "확인",
                            onPress: () => navigation.navigate("Market"),
                        },
                    ]
                );
            }
        } catch (error) {
            console.error("구매 실패:", error);
            let errorMessage = "구매 중 오류가 발생했습니다.";

            if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.message) {
                errorMessage = error.message;
            }

            Alert.alert("구매 실패", errorMessage);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleCancel = () => {
        payModal.closeModal();
    };

    return (
        <>
            <TouchableOpacity
                onPress={handlePay}
                style={[
                    payStyles.payWrapper,
                    isPointOK && payStyles.payWrapperDisabled,
                ]}
                disabled={isPointOK}
            >
                <Text style={[
                    payStyles.payText,
                    isPointOK && payStyles.payTextDisabled,
                ]}>
                    {"결제하기"}
                </Text>
            </TouchableOpacity>

            <PayModal
                visible={payModal.isVisible}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
            <PaySkeleton
                visible={isProcessing}
            />
        </>
    );
};

export default Pay;
