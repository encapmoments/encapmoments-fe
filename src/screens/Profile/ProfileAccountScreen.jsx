import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { TabBar, InputText } from '../../common/commonIndex';
import ProfileAccountScreenStyles from './ProfileAccountScreenStyles';

const ProfileAccountScreen = ({ navigation }) => {

  return (
    <>
        <View style={ProfileAccountScreenStyles.backgroundStyle}>
            <TouchableOpacity onPress={() => navigation.pop()} style={ProfileAccountScreenStyles.touchBackArrow}>
                <Image
                    style={ProfileAccountScreenStyles.backArrow}
                    source={require('../../assets/icons/backArrowWrapper.png')}
                />
            </TouchableOpacity>
            <View style={ProfileAccountScreenStyles.topStyle}>

                <Text style={ProfileAccountScreenStyles.mainText}>개인정보 수정</Text>
                <Text style={ProfileAccountScreenStyles.doneText}>Done</Text>
            </View>
            <View style={ProfileAccountScreenStyles.setProfileImageWrapper}>
                <Image style={ProfileAccountScreenStyles.setProfileImage} source={require('../../assets/AppBarImages/person.png')} />
            </View>
            <InputText/>

        </View>
        <TabBar navigation={navigation} />
    </>
    );
};

export default ProfileAccountScreen;
