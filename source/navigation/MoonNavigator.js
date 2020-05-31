import React from "react";
import { Platform, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";

import Colors from "../constants/Colors";

import ReflectionScreen from "../screens/ReflectionScreen";
import SelfDescribeScreen from "../screens/SelfDescribeScreen";
import SelfMoonPercentage from "../screens/SelfMoonPercentage";
import SelfConnectionsScreen from "../screens/SelfConnectionsScreen";
import PassionDescriptionScreen from "../screens/PassionDescriptionScreen";
import ConnectionsMoonPercentage from "../screens/ConnectionsMoonPercentage";
import PassionMoonPercentage from "../screens/PassionMoonPercentage";
import HomeScreen from "../screens/HomeScreen";
import DailyReflection from "../screens/DailyReflection";
import FullCircleScreen from "../screens/FullCircleScreen";
import ReadyLetsGoScreen from "../screens/ReadyLetsGoScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import GoalsScreen from "../screens/Goals";
import InitiativesScreen from "../screens/InitiativesScreen";
// import QuestionnaireScreen from "../screens/QuestionnaireScreen";

// import GoalCategoriesScreen from "../screens/GoalCategoriesScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A Screen",
};

const ReflectionNavigator = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreen,
    Reflection: {
      screen: ReflectionScreen,
    },
    FullCircle: FullCircleScreen,
    ReadyLetsGo: ReadyLetsGoScreen,
    // QuestionnaireScreen: QuestionnaireScreen,
    SelfDescribeScreen: {
      screen: SelfDescribeScreen,
    },
    SelfMoonPercentage: {
      screen: SelfMoonPercentage,
    },
    SelfConnectionsScreen: {
      screen: SelfConnectionsScreen,
    },
    PassionDescriptionScreen: {
      screen: PassionDescriptionScreen,
    },
    ConnectionsMoonPercentage: {
      screen: ConnectionsMoonPercentage,
    },
    PassionMoonPercentage: {
      screen: PassionMoonPercentage,
    },
    DailyReflection: DailyReflection,
    Goals: GoalsScreen,
    Initiatives: InitiativesScreen,
    HomeScreen: HomeScreen, // don't make this last
    SignUpScreen: SignUpScreen, // don't make this first
    // GoalCategoriesScreen: GoalCategoriesScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const Navigator = createDrawerNavigator(
  {
    Reflection: {
      screen: ReflectionNavigator,
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(Navigator);
