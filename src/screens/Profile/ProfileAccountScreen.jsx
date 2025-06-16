import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InputText, CommonButton } from '../../common/commonIndex';
import ProfileAccountScreenStyles from './ProfileAccountScreenStyles';
import { useGetProfileUser, useUpdateProfile  } from '../../viewmodels/profileViewModels';
import useAccessToken from '../../models/accessToken';

const ProfileAccountScreen = ({ navigation }) => {

    const accessToken = useAccessToken();

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { profile, profileLoading } = useGetProfileUser(accessToken);
    const { update, updateLoading } = useUpdateProfile(accessToken);

    const handleUpdateProfile = async () => {
        try {
        await update({ nickname, email, password });
            Alert.alert('성공!');
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
        }
    }, [profile]);

    return (
    <>
        <SafeAreaView style={ProfileAccountScreenStyles.safeArea}>
            <KeyboardAvoidingView style={ProfileAccountScreenStyles.backgroundStyle} behavior="height" keyboardVerticalOffset={20} >
                <TouchableOpacity onPress={() => navigation.pop()} style={ProfileAccountScreenStyles.touchBackArrow}>
                    <Image
                        style={ProfileAccountScreenStyles.backArrow}
                        source={require('../../assets/icons/backArrowWrapper.png')}
                    />
                </TouchableOpacity>
                <View style={ProfileAccountScreenStyles.topStyle}>

                    <Text style={ProfileAccountScreenStyles.mainText}>개인정보 수정</Text>
                </View>
                <View style={ProfileAccountScreenStyles.setProfileImageWrapper}>
                    <Image style={ProfileAccountScreenStyles.setProfileImage} source={require('../../assets/AppBarImages/person.png')} />
                </View>
                <View style={ProfileAccountScreenStyles.optionsWrapper}>
                    <View>
                        <Text style={ProfileAccountScreenStyles.options}>닉네임</Text>
                        <InputText title="닉네임" value={nickname} onChangeText={setNickname} />
                        <Text style={ProfileAccountScreenStyles.options}>이메일</Text>
                        <InputText title="이메일" value={email} onChangeText={setEmail} />
                        <Text style={ProfileAccountScreenStyles.options}>비밀번호</Text>
                        <InputText title="비밀번호" value={password} onChangeText={setPassword} />
                        <Text style={ProfileAccountScreenStyles.options}>구성원</Text>
                        <InputText placeholder="엄마 아빠 철수 유리"
                            // TODO : 여기에 구성원 추가 하는거 구현해야 함
                        />
                    </View>
                </View>
                <CommonButton onPress={handleUpdateProfile}
                    style={ProfileAccountScreenStyles.commonButton}
                    title={'완료'}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    </>
    );
};

export default ProfileAccountScreen;
