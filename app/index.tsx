import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'


import { images } from "../constants";
import CustomButton from '@/components/CustomButton';

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-screen">
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View className="flex flex-col justify-center items-center h-full p-5">

          <Image
          source={images.logo}
          className="w-[130px] h-[84px]"
          resizeMode='contain'></Image>

          <Image
          source={images.cards}
          resizeMode='contain'
          className="w-[380px] h-[298px]"></Image>

          <Text className="text-3xl font-bold text-white">Discover Endless</Text>

          <Text className="text-3xl font-bold text-white">Possibilities with {" "}
            <Text className="text-secondary-200">Aura</Text>
          </Text>

          <Text className="text-sm text-gray-100 text-center mt-4">Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora</Text>

          <CustomButton title='Continue with Email' handPress={()=>router.push("/sign_in")}></CustomButton>

        
        </View>
      </ScrollView>


    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})