import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import SafeArea from 'react-native-safe-area-view'
import { StackNavigator } from 'react-navigation'
import FlipNavigator from '@rnt/flip'

const List = ({ navigation }) => (
  <SafeArea style={{ flex: 1 }}>
    <FlatList
      data={[
        { key: 'Flip', route: 'Flip' }
      ]}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#eee',
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 15, padding: 10 }}>
              {item.key}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: '#fff' }} />
      )}
    />
  </SafeArea>
)

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
    First: { screen: First },
    Second: { screen: Second },
  }
)

const Navigator = StackNavigator(
  {
    Home: { screen: List },
    Flip: { screen: Flip },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { params } = navigation.state;

      return {
        title: navigation.state.routeName,
      }
    },
  },
)

export default Navigator
