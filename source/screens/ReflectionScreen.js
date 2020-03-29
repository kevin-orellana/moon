import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";

const ReflectionScreen = props => {
  return (
    <View>
      <Text> Hello</Text>
      <Text> Let's take a moment to reflect</Text>
      <Button
        title="Begin"
        onPress={() => {
          console.log(props);
          props.navigation.navigate("SelfDescribeScreen");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReflectionScreen;
