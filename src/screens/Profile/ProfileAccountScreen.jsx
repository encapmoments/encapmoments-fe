import React from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

import { InputText, CommonButton } from '../../common/commonIndex';
import ProfileAccountScreenStyles from './ProfileAccountScreenStyles';

const ProfileAccountScreen = ({ navigation }) => {

  return (
    <>
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
                    <InputText/>
                    <Text style={ProfileAccountScreenStyles.options}>이메일</Text>
                    <InputText/>
                    <Text style={ProfileAccountScreenStyles.options}>비밀번호</Text>
                    <InputText />
                    <Text style={ProfileAccountScreenStyles.options}>구성원</Text>
                    <InputText
                        // 여기에 구성원 추가 하는거 구현해야 함. ViewModel 할 때 하자
                    />
                </View>
            </View>
            <CommonButton onPress={() => navigation.navigate('Profile')}
                style={ProfileAccountScreenStyles.commonButton}
                title={'완료'}
            />
        </KeyboardAvoidingView>
    </>
    );
};

export default ProfileAccountScreen;
