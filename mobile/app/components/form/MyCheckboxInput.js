import React from "react";
import { TextInput, View, Text } from "react-native";
import CheckBox from "react-native-check-box";

import styles from "./MyTextInput.style";
import { colors, text } from "../../styles";

/**
 * to be wrapped with redux-form Field component
 */
export default function MyCheckboxInput(props) {
  const { label, input, meta, ...inputProps } = props;

  return (
    <View style={[styles.checkboxInputContainer, { marginTop: 20 }]}>
      <CheckBox
        style={{ flex: 1, padding: 10 }}
        onClick={input.onChange}
        checkBoxColor={colors.primary}
        isChecked={input.checked}
        rightText={"I am available to respond to crisis alerts via SMS."}
      />
    </View>
  );
}
