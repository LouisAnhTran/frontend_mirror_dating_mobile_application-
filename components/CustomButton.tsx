import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title: string,
    handPress: () => void;
}


const CustomButton: React.FC<CustomButtonProps> = ({title,handPress}) => {
  return (
    <TouchableOpacity 
    onPress={handPress}
    activeOpacity={0.5}
    className="w-full bg-secondary-200 flex flex-row mt-6 h-[50px] justify-center items-center rounded-2xl"
    >
        <Text className="font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})