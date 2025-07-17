import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, Alert, useWindowDimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InputText, CommonButton } from '../../common/commonIndex';
import getProfileAccountScreenStyles from './ProfileAccountScreenStyles';
import getMemberStyles from '../../components/Profile/MemberStyles';
import Member from '../../components/Profile/Member';
import { useGetProfileUser, useUpdateProfile } from '../../viewmodels/profileViewModels';
import useAccessToken from '../../models/accessToken';

const ProfileAccountScreen = ({ navigation }) => {
    const accessToken = useAccessToken();
    const { width, height } = useWindowDimensions();
    const accountStyles = getProfileAccountScreenStyles(width, height);
    const familyMembersStyles = getMemberStyles(width, height);

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [familyMembers, setFamilyMembers] = useState([
        { id: 1, name: '아빠', backgroundColor: '#FFB3BA' },
        { id: 2, name: '엄마', backgroundColor: '#BAFFC9' },
    ]);

    const { profile, profileLoading } = useGetProfileUser(accessToken);
    const { update, updateLoading } = useUpdateProfile(accessToken);

    const handleUpdateProfile = async () => {
        try {
            // 가족 구성원 이름들을 문자열로 변환
            const memberNames = familyMembers.map(member => member.name).filter(name => name.trim() !== '');
            // await update({
            //     nickname,
            //     email,
            //     password,
            //     familyMembers: memberNames.join(', ')
            // });
            Alert.alert('성공!', '정보가 수정되었습니다.');
            navigation.navigate('Profile');
        } catch (err) {
            Alert.alert('수정 실패');
        }
    };

    useEffect(() => {
        if (profile) {
            setNickname(profile.nickname || '');
            setEmail(profile.email || '');
            setPassword('');
            if (profile.familyMembers) {
                const members = profile.familyMembers.split(',').map((name, index) => ({
                    id: index + 1,
                    name: name.trim(),
                    backgroundColor: ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFDFBA', '#E0BBE4'][index % 6],
                }));
                setFamilyMembers(members);
            }
        }
    }, [profile]);

    return (
        <>
            <SafeAreaView style={accountStyles.safeArea}>
                <KeyboardAvoidingView style={accountStyles.backgroundStyle} behavior="height" keyboardVerticalOffset={20} >
                    <ScrollView style={accountStyles.scrollWrapper} contentContainerStyle={accountStyles.scroll} keyboardShouldPersistTaps="handled" scrollEnabled={true}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={accountStyles.touchBackArrow}>
                            <Image
                                style={accountStyles.backArrow}
                                source={require('../../assets/icons/backArrowWrapper.png')}
                            />
                        </TouchableOpacity>
                        <View style={accountStyles.topStyle}>
                            <Text style={accountStyles.mainText}>개인정보 수정</Text>
                        </View>
                        <View style={accountStyles.setProfileImageWrapper}>
                            <Image style={accountStyles.setProfileImage} source={require('../../assets/AppBarImages/person.png')} />
                        </View>

                        <View style={accountStyles.optionsWrapper}>
                            <View>
                                <Text style={accountStyles.options}>닉네임</Text>
                                <InputText title="닉네임" value={nickname} onChangeText={setNickname} style={accountStyles.paddings} />
                                <Text style={accountStyles.options}>이메일</Text>
                                <InputText title="이메일" value={email} onChangeText={setEmail} style={accountStyles.paddings} />
                                <Text style={accountStyles.options}>비밀번호</Text>
                                <InputText title="비밀번호" value={password} onChangeText={setPassword} style={accountStyles.paddings} secureTextEntry />
                                <Text style={accountStyles.options}>구성원</Text>
                                <Member
                                    members={familyMembers}
                                    setMembers={setFamilyMembers}
                                    styles={familyMembersStyles}
                                    navigation={navigation}
                                />
                            </View>
                        </View>
                        <CommonButton onPress={handleUpdateProfile}
                            style={accountStyles.commonButton}
                            title={'완료'}
                        />
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
};

export default ProfileAccountScreen;
