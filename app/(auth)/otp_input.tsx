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
import React, { useRef, useState } from "react";
import OTPInputView from "react-native-otp-inputs";
import { OtpInput } from "react-native-otp-entry";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";
import { getUserPhoneNumber, populateUserPhoneNumber } from "@/features/user/userSlice";
import { useVerifyOTPMutation } from "@/features/api/apiSlice";
import { icons } from "../../constants";
import { router } from "expo-router";


const OTPInput = () => {
  const phoneNumber=useSelector(getUserPhoneNumber)
  const [otp,setOtp]=useState("")

  const [verifyOtp, { isLoading, isError, isSuccess, data }] =useVerifyOTPMutation();

  const handleSubmitOTP= async (otp: string) =>{
    try {
      console.log("final otp: ",otp)
      const response = await verifyOtp({ phone_number: phoneNumber,otp: otp }).unwrap();

      console.log("response: ", response);

      Toast.show({
        type: "success",
        text1: "Notification",
        text2: response.status,
      });


      router.push('./welcome_screen')
    } catch (error: any) {
      console.log("error: ", error);

      Toast.show({
        type: "error",
        text1: "Notification",
        text2: error.data.detail,
      });
    }
  }

  console.log("OTP: ",otp)

  return (
    <SafeAreaView className="bg-white h-screen relative">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="p-8 mt-28">
          <View className="">
            <Image
              source={icons.security}
              resizeMode="contain"
              className="w-[40px] h-[40px]"
            ></Image>
          </View>

          <View className="mt-4">
            <Text className="font-psemibold text-2xl">Enter your</Text>
            <Text className="font-psemibold text-2xl">verification code</Text>
            <Text className="font-pregular text-xs">Sent to {phoneNumber}</Text>
          </View>

          <View className="mt-8">
            <OtpInput
              numberOfDigits={6}
              focusColor="green"
              focusStickBlinkingDuration={500}
              onTextChange={(text) => setOtp(text)}
              onFilled={(text)=>{
                handleSubmitOTP(text)
              }}
              textInputProps={{
                accessibilityLabel: "One-Time Password",
              }}
              theme={{
                pinCodeTextStyle: { color: "black" },
                focusedPinCodeContainerStyle: { borderColor: "black" },
              }}
            />
          </View>

          <TouchableOpacity className="mt-4 flex flex-row justify-center items-center font-pregular text-xs">
            <Text>Didn't get a code</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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

export default OTPInput;

const styles = StyleSheet.create({});
