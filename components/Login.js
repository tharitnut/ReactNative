import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [textInputName, setTextInputName] = useState("");
  const [textInputEmail, setTextInputEmail] = useState("");

  const checkTextInput = () => {
    if (!textInputName.trim()&&!textInputEmail.trim()) {
        alert("Please Enter Name And Email");
        return;
      }
    if (!textInputName.trim()) {
      alert("Please Enter Name");
      return;
    }
    if (!textInputEmail.trim()) {
      alert("Please Enter Email");
      return;
    }
    alert("Success");
      return;
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        style={styles.textInputStyle}
        value={textInputName}
        onChangeText={(value) => {
            setTextInputName(value);
        }}
      />
      <Text>{""}</Text>
      <TextInput
        placeholder="Enter Email"
        style={styles.textInputStyle}
        value={textInputEmail}
        onChangeText={(value) => {
            setTextInputEmail(value);
        }}
      />
      <Text>{"\n"}</Text>
      <Button title="SUBMIT" onPress={() => checkTextInput()} />
    </View>
  );
};

export default Login;   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    width: 300,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 20,
  },
});
