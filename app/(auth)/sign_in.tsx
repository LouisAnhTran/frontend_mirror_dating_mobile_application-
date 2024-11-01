import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
// Foo.jsx
import Toast from "react-native-toast-message";
import { Button } from "react-native";
import { TextInput } from "react-native";

import { icons } from "../../constants";
import { images } from "../../constants";
import { useGetTestQuery, useUserLoginMutation } from "@/features/api/apiSlice";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("username: ", username);
  console.log("password: ", password);

  const [showPassword, setShowPassword] = useState(false);

  const [userLogin, { isLoading, isError, isSuccess, data }] =
    useUserLoginMutation();

  const handleSignIn = async () => {
    try {
      console.log("inside handle press");
      const response = await userLogin({
        username: username,
        password: password,
      }).unwrap();

      console.log("response: ", response);

      router.push("./add_more_details");

      Toast.show({
        type: "success",
        text1: "Notification",
        text2: "User signed in successfully",
      });
    } catch (error: any) {
      console.log("handle press error ", error);

      Toast.show({
        type: "error",
        text1: "Notification",
        text2: error.data.detail,
      });
    }
  };

  return (
    <SafeAreaView className="bg-userAuth h-screen relative">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View>
          <View className="flex flex-row justify-center items-center h-16 mt-12">
            <Text className="text-4xl font-pmedium">Mirror</Text>
          </View>

          <View className="flex flex-col items-center justify-center mt-4">
            <View>
              <Text className="font-psemibold text-lg">Sign In</Text>
            </View>
            <View>
              <Text className="text-[#7B7B8B]">Welcome back !</Text>
            </View>
          </View>

          <View className="mt-8 px-8 flex flex-col space-y-4">
            {/* user name */}
            <View className="rounded-xl w-full h-12 bg-white focus:border-2 focus:border-gray-400 flex flex-row">
              <TextInput
                className="flex-1 text-black-200 font-pregular pl-4"
                value={username}
                onChangeText={setUsername}
                placeholder="Phone, Email or Username"
                placeholderTextColor={"#bdc3c7"}
              ></TextInput>
            </View>

            {/* my password */}
            <View className="flex flex-col">
              <View className="rounded-xl w-full h-12 bg-white focus:border-2 focus:border-gray-400 flex flex-row items-center justify-center">
                <TextInput
                  className="flex-1 text-black-200 font-pregular pl-4"
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  placeholderTextColor={"#bdc3c7"}
                  secureTextEntry={showPassword}
                ></TextInput>

                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Image
                    source={!showPassword ? icons.eye : icons.eyeHide}
                    className="w-6 h-6 mr-2"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View className="flex flex-row justify-end">
                <Text className="text-[#7B7B8B] mt-2 font-pregular text-xs">
                  Forgot my password
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Sign button and below */}
        <View className="mt-32 px-8">
          <TouchableOpacity
            onPress={handleSignIn}
            disabled={isLoading}
            activeOpacity={0.7}
            className="bg-black-200 shadow-md h-12 rounded-xl flex flex-col items-center justify-center"
          >
            <Text className="text-white font-pregular text-sm">Sign In</Text>
          </TouchableOpacity>

          <View className="flex flex-row mt-16 items-center justify-center">
            <Text className="text-userAuthtextSmall">
              ___________ or continue with ____________
            </Text>
          </View>

          <View className="flex flex-row justify-around items-center mt-4">
            <Image
              source={icons.google}
              resizeMode="contain"
              className="w-[50px] h-[50px] border-[1px] border-gray-400 p-4"
            ></Image>

            <Image
              source={icons.facebook}
              resizeMode="contain"
              className="w-[50px] h-[50px] border-[1px] border-gray-400 p-4"
            ></Image>

            <Image
              source={icons.apple}
              resizeMode="contain"
              className="w-[50px] h-[50px] border-[1px] border-gray-400 p-4"
            ></Image>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            disabled={isLoading}
            className="mt-8 bg-userAuthSignup h-[114px] rounded-xl"
            onPress={() => router.push("./phone_number")}
          >
            <View className="flex flex-row items-center justify-center">
              <View className="mt-4 w-[87px] h-[8px] bg-userAuthSignupBar rounded-lg"></View>
            </View>

            <View className="flex flex-col mt-4 items-center justify-center space-y-2">
              <View>
                <Text className="text-userAuthtextSmall">New ?</Text>
              </View>
              <View>
                <Text className="text-userAuthtextSmall">
                  Make your account here
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

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
              // backgroundColor: "rgba(128, 128, 128, 0.5)", // gray with 50% opacity
            }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
