import React from "react";
import { StyleSheet } from "react-native";

import { colors } from "./theme";

export const text = StyleSheet.create({
  normal: {
    fontSize: 20,
    color: colors.greyText
  },
  small: {
    fontSize: 14,
    color: colors.greyText
  },
  large: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.darkText
  },
  label: {
    fontSize: 14,
    color: colors.greyText,
    fontWeight: "bold",
    marginTop: 20
  }
});
