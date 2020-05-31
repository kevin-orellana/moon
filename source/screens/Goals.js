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
import { TextInput } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";

const GoalsScreen = (props) => {
  const { navigation } = props;
  const GoalName = navigation.getParam("GoalName");
  console.log("goal name " + GoalName);
  return (
    <View
      style={{
        marginTop: 55,
        height: 500,
        flex: 1,
        padding: 20,
      }}
    >
      <View style={{ alignItems: "center", height: 20 }}>
        <Text style={styles.headerTitle}>Goals</Text>
      </View>

      <View style={styles.questionsHolder}>
        <View style={styles.questionHolder}>
          <Text>Where do you want to be with your SELF? And by when?</Text>
          <TextInput
            placeholder={"..."}
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          />
          <Text>By:</Text>
          <DatePicker
            style={{ width: 200 }}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {
              console.log("date " + date);
            }}
          ></DatePicker>

          <TextInput
            placeholder={"..."}
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginTop: 15,
            }}
          />
          <Text>By:</Text>
          <DatePicker
            style={{ width: 200 }}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {
              console.log("date " + date);
            }}
          ></DatePicker>
        </View>
      </View>
      <Button
        title="Next"
        onPress={() => {
          console.log("going to Initiatives screen");
          navigation.navigate("Initiatives");
        }}
      ></Button>
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
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  questionsHolder: {
    marginTop: 20,
  },
});

GoalsScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Goals",
  };
};

export default GoalsScreen;
