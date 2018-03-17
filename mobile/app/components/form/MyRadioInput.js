import React from "react";
import { TextInput, View, Text } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

import styles from "./MyRadioInput.style";
import { colors, text } from "../../styles";

/**
 * to be wrapped with redux-form Field component
 */
export default function MyRadioInput(props) {
  const { label, input, meta, options, ...inputProps } = props;

  // TODO: Add some more validation rules
  const validationStyles =
    meta.touched && !meta.active
      ? meta.valid && input.value ? styles.valid : styles.invalid
      : null;

  return (
    <View style={[styles.inputContainer, validationStyles]}>
      <Text style={text.label}>{label}</Text>
      <View style={styles.radioInput}>
        <RadioForm formHorizontal={true} animation={true}>
          {options.map((obj, i) => {
            var that = this;
            var is_selected = input.value == i;
            return (
              <View key={i} style={styles.radioButtonWrap}>
                <RadioButton
                  isSelected={is_selected}
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  buttonColor={colors.primary}
                  labelColor={colors.darkText}
                  style={[i !== options.length - 1 && styles.radioStyle]}
                  onPress={input.onChange}
                  buttonSize={13}
                  buttonWrapStyle={{ marginRight: -5 }}
                />
              </View>
            );
          })}
        </RadioForm>
      </View>
    </View>
  );
}
