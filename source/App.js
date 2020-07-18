import React, { useEffect } from "react";
import { Text, View, Button, TextInput } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const stackNavigator = createStackNavigator(); // using @react-navigation/stack"
// Hello World app that simply shows a "Hello World" message -- launch with `npm start`
const HelloWorldApp = () => {
  const [textInputValue, setTextInputValue] = React.useState("Kevin!");
  const [focusInput, setFocusInput] = React.useState(false);
  const inputRef = React.createRef();

  function buttonTitlePressHandler(e) {
    console.log("focusing input");
    setFocusInput(true);
  }
  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "center", //along main axis
          alignItems: "center", // along cross axis
        }}
      >
        <Text>Hello, World</Text>
        <TextInput
          ref={inputRef}
          clearButtonMode="always"
          value={textInputValue}
          keyboardAppearance="dark"
          onChangeText={(text) => setTextInputValue(text)}
        />
        <Text>Inserted Text is: {textInputValue}</Text>
        <Button
          title="buttonTitle"
          onPress={() => {
            // important to bind onPress with arrow function
            console.log("button pressed");
            inputRef.current.focus(); // to focus on the keyboard with a reference
          }}
        />
      </View>
    </NavigationContainer>
  );
};

export default HelloWorldApp;
