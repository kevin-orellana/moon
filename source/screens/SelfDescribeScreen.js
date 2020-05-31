import React from "react";
import { View, TextInput, Text, Button } from "react-native";

const SelfDescribeScreen = (props) => {
  return (
    <View>
      <View>
        <Text>1. Describe how you feel about yourself in 3 words</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </View>
      <View>
        <Text>2. What makes you feel good about this?</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </View>
      <View>
        <Text>3. Another reflective questin</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </View>
      <Button
        title="Next"
        onPress={() => {
          console.log("Go to Self Moon ");
          props.navigation.navigate("SelfMoonPercentage");
        }}
      />
    </View>
  );
};

SelfDescribeScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Self",
  };
};

export default SelfDescribeScreen;
