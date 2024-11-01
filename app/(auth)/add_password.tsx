import {
    ActivityIndicator,
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
import { useUserSignupMutation } from "@/features/api/apiSlice";
import { useSelector } from "react-redux";
import { getUserBirthday, getUsername, getUserPhoneNumber } from "@/features/user/userSlice";

const AddPassword = () => {
  const [password, setPassword] = useState(""); // State to store the user name

  const [userSignup, { isLoading, isError, isSuccess, data }] =
  useUserSignupMutation();

  // Get user data from Redux state using selectors
  const username = useSelector(getUsername);
  const phoneNumber = useSelector(getUserPhoneNumber);
  const birthday = useSelector(getUserBirthday);

  const handlePress= async ()=>{
    if(password.length < 6 ) {
        Toast.show({
            type: "error",
            text1: "Notification",
            text2: "Password must be at lease 8 characters",
          });
    }else {
        try {
            console.log("inside handle press password")
            const response = await userSignup({ username: username, phonenumber: phoneNumber,birthday: birthday ,password: password }).unwrap();

            console.log("response: ", response);
    
            router.push("./add_more_details")

            Toast.show({
                type: "success",
                text1: "Notification",
                text2: "User signed up successfully",
              });

        } catch (error: any) {
            console.log("handle press error ",error)

            Toast.show({
                type: "error",
                text1: "Notification",
                text2: error.data.detail,
              });
        }

    
    }
  }

  return (
    <SafeAreaView className="bg-white h-screen relative">
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
                Add your account password
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
              value={password}
              onChangeText={setPassword}
              placeholder="password"
              className="border-b border-gray-300 p-2 w-full text-lg" // Tailwind classes for bottom border
              style={{
                height: 40, // Optional: set the height for the TextInput
              }}
            />
          </View>
        </View>
      </ScrollView>

       {/* Centered ActivityIndicator */}
       {isLoading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(128, 128, 128, 0.5)", // gray with 50% opacity
          }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default AddPassword;

const styles = StyleSheet.create({});
