import React from "react";
import { View, TextInput, Text, Button } from "react-native";

const PassionMoonPercentage = (props) => {
  return (
    <View>
      <View>
        <Text>
          Drag to where you think you are in relation with your Passion
        </Text>
      </View>

      <Button
        title="Finish"
        onPress={() => {
          console.log("moving to Home screen");
          props.navigation.replace("HomeScreen");
        }}
      />
    </View>
  );
};

PassionMoonPercentage.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Passion Percentage",
  };
};

export default PassionMoonPercentage;
