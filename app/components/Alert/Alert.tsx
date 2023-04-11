import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IStackNavigation } from "../../navigation/core/interface/navigation-interfaces";

interface IAlert extends NativeStackScreenProps<IStackNavigation, "Alert"> {};

const Alert = ({ navigation, route }: IAlert) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ backgroundColor: "white", padding: 8, borderRadius: 8 }}>
        <Text style={{ marginVertical: 10 }} >Do you sure that delete date ?</Text>
        <Button title="No" onPress={()=>navigation.goBack()} />
        <Button title="delete" />
      </View>
    </View>
  );
};

export default Alert;
