import React from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainNavigator from './src/navigator/MainNavigator'
import TryCodeScreen from './src/screens/TryCodeScreen'
// import HelloScreen from './src/screens/HelloScreen'

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <MainNavigator /> */}
      <TryCodeScreen />
    </SafeAreaProvider>
  )
}

export default App