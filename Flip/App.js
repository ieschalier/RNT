import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import SafeArea from 'react-native-safe-area-view'
import FlipNavigator from './src'

const First = ({ navigation }) => (
  <SafeArea style={{ flex: 1, backgroundColor: '#678' }}>
    <TouchableOpacity
      style={{ marginTop: 50 }}
      onPress={() => navigation.navigate('Second')}
    >
      <Text>Click Here</Text>
    </TouchableOpacity>
  </SafeArea>
)

const Second = ({ navigation }) => (
  <SafeArea style={{ flex: 1, backgroundColor: '#897' }}>
    <TouchableOpacity
      style={{ marginTop: 50 }}
      onPress={() => navigation.goBack(null)}
    >
      <Text>Back</Text>
    </TouchableOpacity>
  </SafeArea>
)

const Flip = FlipNavigator(
  {
    First: { screen: First },
    Second: { screen: Second },
  },
)

export default Flip
