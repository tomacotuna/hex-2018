import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { colors, fonts } from "../styles/theme";

export default ({ placeholder, onChangeText, type, value, ...props }) => {
  const placeholderValue = value === "" ? placeholder : null;
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={[styles.input]}
      placeholder={placeholderValue}
      placeholderTextColor="#a0a0a0"
      onChangeText={value => onChangeText(type, value)}
      value={value}
      underlineColorAndroid="transparent"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    marginBottom: 30,
    borderBottomWidth: 1.5,
    paddingBottom: 3,
    fontSize: 16,
    borderBottomColor: colors.primary
  }
});
