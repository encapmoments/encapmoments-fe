import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import CreateMissionMembersStyles from './CreateMissionMembersStyles';

const CreateMissionMembers = () => {
  const [members, setMembers] = useState([{ age: '', gender: '' }]);

  const handleAdd = () => {
    setMembers([...members, { age: '', gender: '' }]);
  };

  const handleRemove = () => {
    if (members.length > 1) {
      setMembers(members.slice(0, -1));
    }
  };

  return (
    <View style={CreateMissionMembersStyles.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {members.map((member, index) => (
          <View key={index} style={CreateMissionMembersStyles.backgroundStyle}>
            <View style={CreateMissionMembersStyles.row}>
              <Text style={CreateMissionMembersStyles.memberText}>나이</Text>
              <TextInput
                style={CreateMissionMembersStyles.memberAge}
                placeholder="입력"
                keyboardType="numeric"
                value={member.age}
                onChangeText={(text) => {
                  const updated = [...members];
                  updated[index].age = text;
                  setMembers(updated);
                }}
              />
              <Text style={CreateMissionMembersStyles.memberText}>살</Text>
            </View>

            <View style={CreateMissionMembersStyles.row}>
              <Text style={CreateMissionMembersStyles.memberText}>성별</Text>
              <TouchableOpacity
                style={[
                  CreateMissionMembersStyles.memberSex,
                  member.gender === '남자' && CreateMissionMembersStyles.selectedSex,
                ]}
                onPress={() => {
                  const updated = [...members];
                  updated[index].gender = '남자';
                  setMembers(updated);
                }}
              >
                <Text style={CreateMissionMembersStyles.memberSexText}>남자</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  CreateMissionMembersStyles.memberSex,
                  member.gender === '여자' && CreateMissionMembersStyles.selectedSex,
                ]}
                onPress={() => {
                  const updated = [...members];
                  updated[index].gender = '여자';
                  setMembers(updated);
                }}
              >
                <Text style={CreateMissionMembersStyles.memberSexText}>여자</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={CreateMissionMembersStyles.buttonRow}>
        <TouchableOpacity style={CreateMissionMembersStyles.controlButton} onPress={handleAdd}>
          <Text style={CreateMissionMembersStyles.controlButtonText}>추가</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CreateMissionMembersStyles.controlButton} onPress={handleRemove}>
          <Text style={CreateMissionMembersStyles.controlButtonText}>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateMissionMembers;
