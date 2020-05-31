import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const SignUpScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Moon</Text>
      <View style={styles.signUpOptions}>
        <View>
          <TouchableOpacity>
            <Text style={styles.signUpOption}> Sign up with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signUpOption}> Sign up with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signUpOption}> Sign up with Email</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log("navigating to questionnaire");
              navigation.replace("Reflection");
            }}
          >
            <Text style={styles.loginOption}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "15%",
  },
  screen: {
    flex: 1,
  },
  signUpOptions: {
    marginTop: "15%",
    width: "100%",
    alignItems: "center",
  },
  signUpOption: {
    backgroundColor: "beige",
    fontSize: 20,
    marginTop: "5%",
    padding: 10,
  },
  loginOption: {
    fontSize: 17,
    marginTop: "10%",
  },
});

export default SignUpScreen;
