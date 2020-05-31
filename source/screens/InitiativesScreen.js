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
        <Text style={styles.headerTitle}>Initiatives</Text>
      </View>

      <View style={styles.questionsHolder}>
        <View style={styles.questionHolder}>
          <Text>How can you reach this goal?</Text>
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
          <Text>Every:</Text>
          <Text>// insert the date switches</Text>

          <Text>(optional):</Text>
          <Text>// insert the Add to Calendar // insert the Set Reminder</Text>
        </View>
      </View>
      <Button
        title="Next"
        onPress={() => {
          console.log("going to home screen");
          navigation.replace("HomeScreen");
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
    headerTitle: "Initiatives",
  };
};

export default GoalsScreen;
