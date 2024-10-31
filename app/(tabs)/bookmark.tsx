import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bookmark = () => {
  return (
    <View>
      <Text>Bookmark</Text>
      <Text className="bg-yellow-400">Capybaras</Text>
      <View className="flex flex-row justify-center align-items mt-4">   
        <Text className="h-20 w-40 bg-cyan-400">Capstone</Text>
      </View>
    </View>
  )
}

export default Bookmark

const styles = StyleSheet.create({})