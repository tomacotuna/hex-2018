import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import { fonts, colors } from "../styles/theme";

export default ({ title, onPress, isLoading }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator color={colors.white} />
        </View>
      ) : (
        <Text style={[styles.buttonText]}>{title}</Text>
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    marginTop: 25,
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: colors.white,
    // fontFamily: fonts.light,
    fontSize: 18,
    letterSpacing: 0.5
  },
  activityIndicator: {
    transform: [{ scale: 0.7 }],
    marginTop: 3.5,
    marginLeft: 5
  }
});
