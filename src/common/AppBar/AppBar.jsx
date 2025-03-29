import React from 'react';
import { View, Text, Image } from 'react-native';
import AppBarStyles from './AppBarStyles';


const AppBar = () => {
    return (
        <View style={AppBarStyles.AppBar}>
            <Image style={AppBarStyles.AppBarCover} source={require('../../assets/AppBarImages/covers/cover2.jpg')}/>
            <Text style={AppBarStyles.AppBarText}>  Encap{'\n'}Moments</Text>

            <View style={AppBarStyles.AppBarAlarmWrapper}>
                <Image style={AppBarStyles.AppBarAlarm} source={require('../../assets/AppBarImages/alarm.png')} />
            </View>
            <View style={AppBarStyles.AppBarPersonWrapper}>
                <Image style={AppBarStyles.AppBarPerson} source={require('../../assets/AppBarImages/person.png')} />
            </View>
        </View>
    );
};

export default AppBar;
