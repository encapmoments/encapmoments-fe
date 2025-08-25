import React from "react";
import { Text, TouchableOpacity, Image, useWindowDimensions, View } from "react-native";
import MemberStyles from "./MemberStyles";

const Member = ({ memberImage, memberName, selected = false, onPress }) => {
    const { width, height } = useWindowDimensions();
    const memberStyles = MemberStyles(width, height);

    return (
        <TouchableOpacity
            style={[
                memberStyles.memberWrapper,
                selected && memberStyles.memberWrapperSelected,
            ]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={memberStyles.memberImageContainer}>
                <Image
                    source={memberImage}
                    style={memberStyles.memberImg}
                    resizeMode="cover"
                />
            </View>
            <Text style={memberStyles.memberText}>{memberName}</Text>
        </TouchableOpacity>
    );
};

export default Member;
