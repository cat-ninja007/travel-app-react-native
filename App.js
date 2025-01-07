// import React from 'react'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
// import LoginScreen from './src/screens/LoginScreen'

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <LoginScreen />
//     </SafeAreaProvider>
//   )
// }

// export default App

import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
import MainNavigator from './src/navigator/MainNavigator';

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};


export default App;
