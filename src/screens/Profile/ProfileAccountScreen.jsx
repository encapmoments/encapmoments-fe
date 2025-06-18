import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, Alert, useWindowDimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InputText, CommonButton } from '../../common/commonIndex';
import getProfileAccountScreenStyles from './ProfileAccountScreenStyles';
import { useGetProfileUser, useUpdateProfile  } from '../../viewmodels/profileViewModels';
import useAccessToken from '../../models/accessToken';

const ProfileAccountScreen = ({ navigation }) => {
    const accessToken = useAccessToken();
    const { width, height } = useWindowDimensions();
    const accountStyles = getProfileAccountScreenStyles(width, height);

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
        <SafeAreaView style={accountStyles.safeArea}>
            <KeyboardAvoidingView style={accountStyles.backgroundStyle} behavior="height" keyboardVerticalOffset={20} >
                <ScrollView style={accountStyles.scrollWrapper} contentContainerStyle={accountStyles.scroll} keyboardShouldPersistTaps="handled" scrollEnabled={true}>
                    <TouchableOpacity onPress={() => navigation.pop()} style={accountStyles.touchBackArrow}>
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
                            <InputText title="비밀번호" value={password} onChangeText={setPassword} style={accountStyles.paddings} />
                            <Text style={accountStyles.options}>구성원</Text>
                            <InputText placeholder="엄마 아빠 철수 유리" style={accountStyles.paddings}
                                // TODO : 여기에 구성원 추가 하는거 구현해야 함
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
