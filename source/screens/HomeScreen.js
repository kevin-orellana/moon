import React from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.screen}>
      <Text style={{ marginLeft: 10, marginBottom: 40, marginTop: 20 }}>
        Welcome back, Friend
      </Text>
      <View style={styles.moonsContainer}>
        <View style={styles.moonContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log("navigating to Self Goals screen");
              navigation.setParams("GoalName", "Self");
              navigation.navigate("Goals");
            }}
          >
            <Text style={{ justifyContent: "center" }}>SELF</Text>
            <ImageBackground
              style={styles.moonImage}
              source={require("../assets/images/moon.png")}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.moonContainer}>
          <TouchableOpacity>
            <Text style={{ justifyContent: "center" }}>CONNECTIONS</Text>
            <ImageBackground
              style={styles.moonImage}
              source={require("../assets/images/moon.png")}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.moonContainer}>
          <TouchableOpacity>
            <Text style={{ justifyContent: "center" }}>PASSION</Text>
            <ImageBackground
              style={styles.moonImage}
              source={require("../assets/images/moon.png")}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Home Screen",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Home"
          iconName="ios-home"
          onPress={() => {
            console.log("going to GoalCategories screen");
            navigationData.navigation.navigate("GoalCategoriesScreen");
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: null,
  };
};

const styles = StyleSheet.create({
  moonsContainer: { justifyContent: "space-between" },
  moonContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  screen: {
    flex: 1,
  },
  moonImage: {
    height: 100,
    width: 100,
  },
});
export default HomeScreen;
