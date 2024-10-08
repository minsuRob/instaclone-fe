import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";

const Input = styled.TextInput``;
export default function Search({ navigation }) {
  const { setValue, register } = useForm();
  const SearchBox = () => (
    <TextInput
      style={{ backgroundColor: "white" }}
      returnKeyLabel="Search"
      returnKeyType="search"
      autoCorrect={false}
      placeholder="Search Photos"
      placeholderTextColor="black"
      onChangeText={(text) => setValue("keyword", text)}
    />
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox,
    });
    register("keyword");
  }, []);

  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DismissKeyboard>
        <View
          style={{
            backgroundColor: "black",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>photo</Text>
        </View>
      </DismissKeyboard>
    </View>
  );
}
