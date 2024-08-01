import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Feed({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("camera")}>
        <Text style={{ color: "white" }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
}
