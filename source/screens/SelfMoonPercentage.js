import React from "react";
import { View, TextInput, Text, Button } from "react-native";

const SelfMoonPercentage = props => {
  return (
    <View>
      <View>
        <Text>Drag to where you think you are in relation with your self</Text>
      </View>

      <Button
        title="Next"
        onPress={() => {
          console.log("moving to SelfConnectionsScreen");
          props.navigation.navigate("SelfConnectionsScreen");
        }}
      />
    </View>
  );
};

SelfMoonPercentage.navigationOptions = navigationData => {
  return {
    headerTitle: "Self Moon"
  };
};

export default SelfMoonPercentage;
