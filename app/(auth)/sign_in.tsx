import {
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
import { useGetTestQuery } from "@/features/api/apiSlice";

const SignIn = () => {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 👋",
    });
  };

  const { data, isLoading, isFetching, isError } = useGetTestQuery(undefined);

  console.log("this is sign in");
  console.log("data: ", data);

  const [showPassword, setShowPassword] = useState(false);



  return (
    <SafeAreaView className="bg-userAuth h-screen">
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
                placeholder="Phone, Email or Username"
                placeholderTextColor={"#bdc3c7"}
              ></TextInput>
            </View>

            {/* my password */}
            <View className="flex flex-col">
              <View className="rounded-xl w-full h-12 bg-white focus:border-2 focus:border-gray-400 flex flex-row items-center justify-center">
                <TextInput
                  className="flex-1 text-black-200 font-pregular pl-4"
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
          <TouchableOpacity activeOpacity={0.7} className="bg-black-200 shadow-md h-12 rounded-xl flex flex-col items-center justify-center">
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
            className="mt-8 bg-userAuthSignup h-[114px] rounded-xl"
            onPress={()=>router.push("./phone_number")}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
