import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import getCreateMissionMembersStyles from "./CreateMissionMembersStyles";

const CreateMissionMembers = ({ members, setMembers }) => {
  const handleAdd = () => {
    setMembers([...members, { age: "", gender: "" }]);
  };

  const handleRemove = () => {
    if (members.length > 1) {
      setMembers(members.slice(0, -1));
    }
  };

  const { width, height } = useWindowDimensions();
  const selectStyles = getCreateMissionMembersStyles(width, height);

  return (
    <View style={selectStyles.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {members.map((member, index) => (
          <View key={index} style={selectStyles.backgroundStyle}>
            <View style={selectStyles.row}>
              <Text style={selectStyles.memberText}>나이</Text>
              <TextInput
                style={selectStyles.memberAge}
                placeholder="나이"
                keyboardType="numeric"
                value={member.age}
                onChangeText={text => {
                  const updated = [...members];
                  updated[index].age = text;
                  setMembers(updated);
                }}
              />
              <Text style={selectStyles.memberText}>살</Text>
            </View>

            <View style={selectStyles.row}>
              <Text style={selectStyles.memberText}>성별</Text>
              <TouchableOpacity
                style={[
                  selectStyles.memberSex,
                  member.gender === "남자" && selectStyles.selectedSex,
                ]}
                onPress={() => {
                  const updated = [...members];
                  updated[index].gender = "남자";
                  setMembers(updated);
                }}>
                <Text style={selectStyles.memberSexText}>남자</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  selectStyles.memberSex,
                  member.gender === "여자" && selectStyles.selectedSex,
                ]}
                onPress={() => {
                  const updated = [...members];
                  updated[index].gender = "여자";
                  setMembers(updated);
                }}>
                <Text style={selectStyles.memberSexText}>여자</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={selectStyles.buttonRow}>
        <TouchableOpacity
          style={selectStyles.controlButton}
          onPress={handleAdd}>
          <Text style={selectStyles.controlButtonText}>추가</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectStyles.controlButton}
          onPress={handleRemove}>
          <Text style={selectStyles.controlButtonText}>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateMissionMembers;
