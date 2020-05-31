import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const FullCircleScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ReadyLetsGo");
            console.log("navigating to ReadyLetsGo");
          }}
        >
          <ImageBackground
            source={require("../assets/images/moon.png")}
            style={{
              width: "70%",
              height: "70%",
            }}
          >
            <Text>Continue</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
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

export default FullCircleScreen;
