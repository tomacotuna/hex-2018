import React from "react";
import { Image, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";

import { colors, fonts } from "../styles/theme";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

const routes = {
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../assets/signInButton.png")}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../assets/signUpButton.png")}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  }
};

console.log("ddd");

const routeConfig = {
  tabBarPosition: "bottom",
  tabBarOptions: {
    showLabel: true,
    activeTintColor: colors.primary,
    inactiveTintColor: colors.secondary,
    indicatorStyle: { backgroundColor: colors.secondary },
    labelStyle: {
      // fontFamily: fonts.base,
      fontSize: 12
    },
    style: {
      backgroundColor: "white",
      borderTopWidth: 0,
      paddingBottom: 3
    }
  }
};

export default TabNavigator(routes, routeConfig);
