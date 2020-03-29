import React from "react";
import { View, TextInput, Text, Button } from "react-native";

const ConnectionsMoonPercentage = props => {
  return (
    <View>
      <View>
        <Text>
          Drag to where you think you are in relation with your Connections
        </Text>
      </View>

      <Button
        title="Next"
        onPress={() => {
          console.log("moving to PassionDescription");
          props.navigation.navigate("PassionDescriptionScreen");
        }}
      />
    </View>
  );
};

ConnectionsMoonPercentage.navigationOptions = navigationData => {
  return {
    headerTitle: "Connections Moon"
  };
};

export default ConnectionsMoonPercentage;
