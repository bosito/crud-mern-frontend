import { useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IStackNavigation } from "../navigation/core/interface/navigation-interfaces";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { ButtonFloat } from '../components';

interface IHomeScreen
  extends NativeStackScreenProps<IStackNavigation, "HomeScreen"> {}

const HomeScreen = ({ navigation, route }: IHomeScreen) => {

    const handleEdit = useCallback(() => {
        navigation.navigate('EditScreen')
    },[]);

    const handleDelete = useCallback(() => {
        navigation.navigate('Alert')
    },[]);

  return (
    <View style={{ flex: 1 }} >
      <FlatList
        data={[...Array(5).keys()]}
        renderItem={({ index, item, separators }) => {
          return (
            <View
              style={{
                width: "100%",
                height: 50,
                flexDirection: "row",
                marginVertical: 10,
              }}
            >
              <Text style={{ flex: 1 }}>item {index}</Text>
              <TouchableOpacity
                onPress={()=> handleEdit()}
                style={{
                  width: 50,
                  backgroundColor: "rgba(0, 170, 255, 1)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="edit" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> handleDelete()}
                style={{
                  width: 50,
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons name="delete-outline" size={28} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <ButtonFloat onPress={()=>navigation.navigate('AddScreen')} />
    </View>
  );
};

export default HomeScreen;
