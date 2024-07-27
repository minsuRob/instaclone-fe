import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
  border-color: ${colors.blue};
  padding: 13px 10px;
  margin-top: 20px;
  width: 100%;
  border-radius: 3px;
  /* opacity: ${(props) => (props.disabled ? "0.5" : "1")}; */
  /* opacity: ${(props) => (props.disabled ? "0.5" : "1")}; */
`;
const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 10px;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogIn = () => navigation.navigate("LogIn");
  return (
    <Container>
      <Logo resizeMode="cover" source={require("../assets/logo.png")} />
      <CreateAccount disabled={false} onPress={goToCreateAccount}>
        <CreateAccountText>Create New Account</CreateAccountText>
      </CreateAccount>
      <TouchableOpacity onPress={goToLogIn}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </Container>
  );
}
