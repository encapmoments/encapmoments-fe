import React from "react";
import { View, useWindowDimensions } from "react-native";
import MissionModalStyles from "./MissionModalStyles";

const MissionModal = () => {
    const { width, height } = useWindowDimensions();
    const missionStyles = MissionModal(width, height);

    return (
        <View style={missionStyles.backgroundStyle} />
    );
};

export default MissionModal;
