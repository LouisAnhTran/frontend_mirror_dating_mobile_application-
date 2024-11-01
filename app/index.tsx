import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";

import { images } from "../constants";
import CustomButton from "@/components/CustomButton";

const index = () => {
  return (
    <SafeAreaView className="bg-[#6F3A50] h-screen">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="h-full flex flex-row justify-center items-center space-x-0">
          <Image
            source={images.logoSmall}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          ></Image>
          <Text className="font-psemibold text-white text-4xl">Mirror</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
