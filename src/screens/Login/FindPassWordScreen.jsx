import React from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CommonButton } from '../../common/commonIndex';
import getLoginScreenStyles from './LoginStyles';
import InputText from '../../common/InputText/InputText';

const FindPassWordScreen = ({ navigation }) => {

  const { width, height } = useWindowDimensions();
  const loginStyles = getLoginScreenStyles(width, height);

  const backgroundStyle = {
    backgroundColor: '#F8F3D9',
    flex: 1,
  };

  const safePadding = '5%';

  return (
    <SafeAreaView style={loginStyles.safeArea}>
      <View style={backgroundStyle}>
        <View style={{padding: safePadding}}>
          <TouchableOpacity onPress={() => navigation.pop()} style={loginStyles.touchBackArrow}>
            <Image
                style={loginStyles.backArrow}
                source={require('../../assets/icons/backArrowWrapper.png')}
            />
          </TouchableOpacity>
          <Text style={loginStyles.loginText}>비밀번호 재설정</Text>
          <Text style={loginStyles.findPassWordDescription}>이메일에 임시 비밀번호를{'\n'}보내드릴게요!</Text>

          <InputText title="이메일" style={loginStyles.findPadding} />
          <CommonButton
            title="재설정하기"
            onPress={() => navigation.navigate('Login')}
            style={loginStyles.commonButton}
          />

        </View>
      </View>
    </SafeAreaView>
  );
};

export default FindPassWordScreen;
