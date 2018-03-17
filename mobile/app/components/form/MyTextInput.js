import React from "react";
import { TextInput, View, Text } from "react-native";

import styles from "./MyTextInput.style";
import { colors, text } from "../../styles";

/**
 * to be wrapped with redux-form Field component
 */
export default function MyTextInput(props) {
  const { label, input, meta, ...inputProps } = props;

  // TODO: Add some more validation rules
  const validationStyles =
    meta.touched && !meta.active
      ? meta.valid && input.value ? styles.valid : styles.invalid
      : null;

  return (
    <View style={[styles.inputContainer, validationStyles]}>
      {label && input.value ? <Text style={text.label}>{label}</Text> : null}
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={styles.input}
      />
    </View>
  );
}
