import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors.js";

const WelcomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={{ ...styles.screens, ...styles.background }}>
      <Text
        style={{
          fontSize: 20,
          color: "black",
        }}
      >
        Hi there
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "black",
        }}
      >
        You're here for a reason
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FullCircle");
        }}
        style={{
          width: 400,
          height: 400,
          marginRight: "100%",
        }}
      >
        <ImageBackground
          source={require("../assets/images/moon.png")}
          style={{
            width: "70%",
            height: "70%",
          }}
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screens: {
    flex: 1,
    marginTop: 100,
  },
  background: {
    backgroundColor: Colors.backgroundColorS,
  },
  container: {
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
