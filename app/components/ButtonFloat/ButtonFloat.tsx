import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

interface IButtonFloat {
  onPress?: () => void;
}

const ButtonFloat = ({ onPress }: IButtonFloat) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <MaterialIcons name="add" size={30} color="black" />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
    right: 20,
  },
});

export default ButtonFloat;
