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
import { Button, Platform } from "react-native";
import DatePicker from "react-native-date-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import { icons } from "../../constants";
import { useDispatch } from "react-redux";
import { populateBirthday } from "@/features/user/userSlice";
import { router } from "expo-router";

const BirthDay = () => {
  const [date, setDate] = useState(new Date());
  const disPatch=useDispatch()

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  console.log("date: ", date.toLocaleDateString());

  const handlePress=() =>{
    disPatch(populateBirthday(date.toLocaleDateString()))
    router.push("./add_user_name")
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
                What's your date of birth ?
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

          <View className="mt-4">
            {true && (
              <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={onChange}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BirthDay;
