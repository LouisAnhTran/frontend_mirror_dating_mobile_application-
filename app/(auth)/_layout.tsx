import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign_in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign_up"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="phone_number"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="otp_input"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcome_screen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="birth_day"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="add_more_details"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="add_user_name"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="add_password"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
