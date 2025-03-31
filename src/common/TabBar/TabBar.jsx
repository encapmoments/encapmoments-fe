import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import TabBarStyles from './TabBarStyles';


const TabBar = () => {
    return (

        <View style={TabBarStyles.tabBar}>
            <View style={TabBarStyles.tabBarWrapper} />
            <View style={TabBarStyles.tabBarIcons}>
                <TouchableOpacity>
                    <Image
                        style={TabBarStyles.tabBarMissionIcon}
                        source={require('../../assets/icons/plusIcon.png')}
                    />
                    <Text style={TabBarStyles.tabBarText}>미션</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={TabBarStyles.tabBarMissionIcon}
                        source={require('../../assets/icons/plusIcon.png')}
                    />
                    <Text style={TabBarStyles.tabBarText}>앨범</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={TabBarStyles.tabBarMissionIcon}
                        source={require('../../assets/icons/plusIcon.png')}
                    />
                    <Text style={TabBarStyles.tabBarText}>프로필</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default TabBar;
