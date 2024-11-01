import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { icons } from "../../constants";
import Toast from "react-native-toast-message";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { populateUsername } from "@/features/user/userSlice";

const add_user_name = () => {
    const dispatch=useDispatch()
  const [userName, setUserName] = useState(""); // State to store the user name

  const handlePress=()=>{
    if(!userName) {
        Toast.show({
            type: "error",
            text1: "Notification",
            text2: "user name can not be empty",
          });
    }else {
        dispatch(populateUsername(userName))
        router.push("./add_password")
    }
  }

  return (
    <SafeAreaView className="bg-white h-screen">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="h-full p-4">
          <View className="flex flex-row justify-center items-center mt-8">
            <Text className="font-psemibold text-xl">Sign Up</Text>
          </View>

          <View className="flex flex-col justify-center items-center mt-4">
            <View className="flex flex-col items-center justify-center">
              <Text className="font-pregular text-gray-400 text-sm">
                Hey stranger
              </Text>
              <Text className="font-pregular text-gray-400 text-sm">
                Can I get to know you better?
              </Text>
            </View>
          </View>

          <View className="pl-2 mt-6 flex flex-row justify-between items-center">
            <View>
              <Image
                source={icons.birthday}
                resizeMode="contain"
                className="w-[40px] h-[40px]"
              ></Image>
              <Text className="font-pbold text-lg pl-2">
                Add your user name
              </Text>
            </View>

            <TouchableOpacity
              className="rounded-full bg-[#f4f6f6] p-2 mt-6"
              activeOpacity={0.7}
              onPress={handlePress}
            >
              <Image
                source={icons.arrowsim}
                resizeMode="contain"
                className="w-[30px] h-[30px]"
              ></Image>
            </TouchableOpacity>
          </View>

          <View className="mt-4 p-4">
            <TextInput
              value={userName}
              onChangeText={setUserName}
              placeholder="username"
              className="border-b border-gray-300 p-2 w-full text-lg" // Tailwind classes for bottom border
              style={{
                height: 40, // Optional: set the height for the TextInput
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default add_user_name;

const styles = StyleSheet.create({});
