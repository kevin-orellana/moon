import React from "react";
import { View, TextInput, Text, Button } from "react-native";

const SelfConnectionsScreen = props => {
  return (
    <View>
      <View>
        <Text>1. Describe how you feel about your Connections in 3 words</Text>
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
        <Text>3. Another reflective question</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </View>
      <Button
        title="Next"
        onPress={() => {
          console.log(props);
          props.navigation.navigate("ConnectionsMoonPercentage");
        }}
      />
    </View>
  );
};

SelfConnectionsScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Connections"
  };
};

export default SelfConnectionsScreen;
