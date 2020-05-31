import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";

const ReflectionScreen = (props) => {
  const { navigation } = props;

  return (
    <View
      style={{
        marginTop: 55,
        height: 500,
        flex: 1,
        alignContent: "space-between",
      }}
    >
      <View style={{ alignItems: "center", height: 400 }}>
        <Text style={{ fontSize: 26 }}> Hello, Friend</Text>
        <Text style={{ fontSize: 22 }}> Let's take a moment to reflect</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelfDescribeScreen");
          console.log("Navigating to SelfDescribeScreen");
        }}
      >
        <View styles={styles.backgroundImageContainer}></View>
        <ImageBackground
          source={require("../assets/images/moon.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View style={styles.textContainer}>
            <Text style={styles.imageBackgroundText}> Begin</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImageContainer: {
    width: "100%",
    height: "100%",
  },
  imageBackgroundText: {
    fontSize: 26,
    justifyContent: "center",
    width: "100%",
    color: "white",
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: "40%",
    marginTop: "15%",
  },
});

export default ReflectionScreen;
