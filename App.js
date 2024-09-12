import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import HelloScreen from './src/screens/HelloScreen'

const App = () => {
  return (
    <SafeAreaProvider>
      <HelloScreen />
    </SafeAreaProvider>
  )
}

export default App