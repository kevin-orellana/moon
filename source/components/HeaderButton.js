import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      color={Platform.OS === "ios" ? Colors.primaryColor : "white"}
      iconSize={18}
    />
  );
};

export default CustomHeaderButton;
