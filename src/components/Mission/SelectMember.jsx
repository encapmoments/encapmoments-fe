import React from "react";
import { View, ScrollView, useWindowDimensions } from "react-native";
import SelectMemberStyles from "./SelectMemberStyles";
import Member from "./Member";

const SelectMember = ({ members = [], setMembers }) => {
    const { width, height } = useWindowDimensions();
    const selectStyles = SelectMemberStyles(width, height);

    // 기본 멤버 데이터 (members가 비어있을 때)
    const defaultMembers = [
        {
            'id': 1,
            'memberImage': require("../../assets/icons/profile.png"),
            'memberName': "아빠",
            'selected': false,
        },
        {
            'id': 2,
            'memberImage': require("../../assets/icons/profile.png"),
            'memberName': "엄마",
            'selected': false,
        },
        {
            'id': 3,
            'memberImage': require("../../assets/icons/profile.png"),
            'memberName': "아들",
            'selected': false,
        },
        {
            'id': 4,
            'memberImage': require("../../assets/icons/profile.png"),
            'memberName': "딸",
            'selected': false,
        },
    ];

    const memberData = members.length > 0 ? members : defaultMembers;

    const handleMemberSelect = (memberId) => {
        if (setMembers) {
            const updatedMembers = memberData.map(member =>
                member.id === memberId
                    ? { ...member, selected: !member.selected }
                    : member
            );
            setMembers(updatedMembers);
        }
    };

    return (
        <View style={selectStyles.backgroundStyle}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={selectStyles.membersWrapper}
                contentContainerStyle={selectStyles.membersContainer}
            >
                {memberData.map((member) => (
                    <Member
                        key={member.id}
                        memberImage={member.memberImage}
                        memberName={member.memberName}
                        selected={member.selected || false}
                        onPress={() => handleMemberSelect(member.id)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default SelectMember;
