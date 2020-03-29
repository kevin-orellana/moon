import React from "react";
import { View, TextInput, Text, Button } from "react-native";

const DailyReflection = props => {
  let today = new Date().toString();
  return (
    <View>
      <View>
        <Text>{today}</Text>
      </View>
      <View>
        <Text>Did you finish your initiatives today? Swipe left or right.</Text>
      </View>
      <View>
        <Text>Initiative 1.....</Text>
        <Text>Initiative 2.....</Text>
        <Text>Initiative 3.....</Text>
        <Text>Initiative 4.....</Text>
        <Text>Initiative 5.....</Text>
      </View>
      <View>
        <Text>How do you feel?</Text>
      </View>
      <Button title="Record" />
    </View>
  );
};

DailyReflection.navigationOptions = navigationData => {
  return {
    headerTitle: "Daily Reflect"
  };
};

export default DailyReflection;
