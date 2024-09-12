import { View, Text } from 'react-native'
import React from 'react'

const HelloScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 48, fontWeight: '700'}}>Hello!</Text>
    </View>
  )
}

export default HelloScreen