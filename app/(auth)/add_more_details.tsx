import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const AddMoreDetails = () => {
    return (
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="flex flex-col h-full">
            <View className="flex-1 mt-20">
              
              <View className="p-8 mt-20">
                <Text className="text-4xl font-pbold">The more you </Text>
                <Text className="text-4xl font-pbold">share,</Text>
                <Text className="text-4xl font-pbold">the better your</Text>
                <Text className="text-4xl font-pbold">matches will be.</Text>
              </View>
            </View>
    
            <TouchableOpacity onPress={()=> router.push("./birth_day")} activeOpacity={0.7} className="h-40 bg-[#47182E] mt-10 flex flex-col justify-center items-center">
              <Text className="text-white text-lg font-pregular">Add more details</Text>
            </TouchableOpacity>
    
          </View>
        </ScrollView>
      );
}

export default AddMoreDetails

const styles = StyleSheet.create({})