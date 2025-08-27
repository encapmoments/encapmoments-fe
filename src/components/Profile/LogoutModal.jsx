import React from "react";
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    useWindowDimensions,
} from "react-native";
import LogoutModalStyles from "./LogoutModalStyles";

const LogoutModal = ({ visible, onConfirm, onCancel }) => {
    const { width, height } = useWindowDimensions();
    const modalStyles = LogoutModalStyles(width, height);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onCancel}
        >
            <TouchableOpacity
                style={modalStyles.modalOverlay}
                activeOpacity={1}
                onPress={onCancel}
            >
                <View style={modalStyles.modalContainer}>
                    <Text style={modalStyles.modalTitle}>로그아웃</Text>
                    <Text style={modalStyles.modalMessage}>
                        정말 로그아웃 하시겠습니까?
                    </Text>
                    <View style={modalStyles.buttonContainer}>
                        <TouchableOpacity
                            style={modalStyles.cancelButton}
                            onPress={onCancel}
                        >
                            <Text style={modalStyles.cancelButtonText}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={modalStyles.confirmButton}
                            onPress={onConfirm}
                        >
                            <Text style={modalStyles.confirmButtonText}>확인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default LogoutModal;
