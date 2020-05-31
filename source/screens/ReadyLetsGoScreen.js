import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const ReadyLetsGo = (props) => {
  const { navigation } = props;
  return (
    <View
      style={{
        flex: 1,
        marginTop: 100,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: "black",
        }}
      >
        Ready? Let's go
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
        style={{
          width: 400,
          height: 400,
          marginLeft: "50%",
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

export default ReadyLetsGo;
