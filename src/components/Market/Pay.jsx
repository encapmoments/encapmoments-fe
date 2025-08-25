import React, { useState } from "react";
import { TouchableOpacity, Text, useWindowDimensions } from "react-native";
import PayStyles from "./PayStyles";
import PayModal from "./PayModal";
import PaySkeleton from "../../common/Skeleton/PaySkeleton";
import useModal from "../../hooks/useModal";

const Pay = ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    const payStyles = PayStyles(width, height);
    const payModal = useModal();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePay = () => {
        payModal.openModal();
    };

    const handleConfirm = () => {
        payModal.closeModal();
        setIsProcessing(true);

        // 결제 처리하는 척 (2.5 초)
        setTimeout(() => {
            setIsProcessing(false);
            navigation.navigate("Market");
        }, 2500);
    };

    const handleCancel = () => {
        payModal.closeModal();
    };

    return (
        <>
            <TouchableOpacity onPress={handlePay} style={payStyles.payWrapper}>
                <Text style={payStyles.payText}>결제하기</Text>
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
