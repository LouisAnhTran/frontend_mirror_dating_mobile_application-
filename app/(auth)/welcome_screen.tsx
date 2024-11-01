import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ height: "100%" }}>
      <View className="flex flex-col h-full">
        <View className="flex-1 mt-20">
          <View className="p-8 mt-28">
            <Text className="text-4xl font-pbold">Welcome to</Text>
            <Text className="text-4xl font-pbold">Mirror.</Text>
          </View>

          <View className="p-8">
            <Text className="text-4xl font-pbold">Where authentic </Text>
            <Text className="text-4xl font-pbold">connections</Text>
            <Text className="text-4xl font-pbold">are formed.</Text>
          </View>
        </View>

        <TouchableOpacity onPress={()=> router.push("./birth_day")} activeOpacity={0.7} className="h-40 bg-[#47182E] mt-10 flex flex-col justify-center items-center">
          <Text className="text-white text-lg font-pregular">Continue</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
