import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Create = () => {
  return (
    <View>
      <Text>Create</Text>
      <View className="bg-yellow-400">
        <Text>Test</Text>
        <Text className="bg-red-500 w-1/2">Test 1</Text>
      </View>
      <View className="w-full h-20 bg-red-400 flex flex-col justify-center items-center">
        <Text>Test 1</Text>
        <Text>Test 2</Text>
        <Text>Test 3</Text>
      </View>
    </View>
  )
}

export default Create

const styles = StyleSheet.create({})