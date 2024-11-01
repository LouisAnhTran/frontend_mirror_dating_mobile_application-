import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Platform } from "react-native";
import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

const BirthDay = () => {
    const [date, setDate] = useState(new Date())


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DatePicker date={date} onDateChange={setDate} />

    </View>
  );
};


export default BirthDay;
