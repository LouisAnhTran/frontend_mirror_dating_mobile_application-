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
import "react-phone-number-input/style.css";
import PhoneInput from "react-native-phone-number-input";
import Toast from "react-native-toast-message";

import { icons } from "../../constants";
import { useGenerateOTPMutation } from "@/features/api/apiSlice";
import { router } from "expo-router";

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = React.useRef(null);

  const [verifyOtp, { isLoading, isError, isSuccess, data }] =
    useGenerateOTPMutation();

  const handlePress = async () => {
    try {
      const response = await verifyOtp({ phone_number: phoneNumber }).unwrap();

      console.log("response: ", response);

      Toast.show({
        type: "success",
        text1: "Notification",
        text2: response.status,
      });

      router.push('./otp_input')
    } catch (error: any) {
      console.log("error: ", error);

      Toast.show({
        type: "error",
        text1: "Notification",
        text2: error.data.detail,
      });
    }
  };

  console.log("phone number: ", phoneNumber);

  return (
    <SafeAreaView className="bg-white h-screen relative">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="p-5 mt-32 bg-white">
          <Image
            source={icons.phone}
            resizeMode="contain"
            className="w-[40px] h-[40px]"
          ></Image>

          <Text className="text-xl font-pbold mb-4 mt-2">
            What's your {"\n"}
            phone number
          </Text>

          <View className="mt-10">
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="SG"
              layout="first"
              onChangeFormattedText={(text) => {
                setPhoneNumber(text);
              }}
              withShadow
              autoFocus
              containerStyle={{ width: "100%", backgroundColor: "white" }}
              textContainerStyle={{ paddingVertical: 0 }}
            />
          </View>

          <View className="flex flex-row justify-center items-center mt-16">
            <TouchableOpacity
              className="w-[200px] h-[40px] bg-black-200 flex flex-row justify-center items-center rounded-lg"
              activeOpacity={0.7}
              onPress={handlePress}
              disabled={isLoading}
            >
              <Text className="text-white font-pregular">Send OTP</Text>
            </TouchableOpacity>
          </View>

          {/* <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator> */}
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

export default PhoneNumber;

const styles = StyleSheet.create({});
