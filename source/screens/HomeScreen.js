import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const HomeScreen = props => {
  return (
    <View>
      <Text>Welcome back</Text>
      <Text>Let's take a moment to reflect on today</Text>
      <Button
        title="Reflect"
        onPress={() => {
          console.log("Go home!");
          props.navigation.navigate("DailyReflection");
        }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Welcome Back",
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
    headerLeft: null
  };
};

export default HomeScreen;
