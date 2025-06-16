import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import ImmersiveMode from 'react-native-immersive-mode';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    ImmersiveMode.fullLayout(true); // 전체화면 설정
    ImmersiveMode.setBarMode('FullSticky'); // 상하단 바 모두 숨김
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
