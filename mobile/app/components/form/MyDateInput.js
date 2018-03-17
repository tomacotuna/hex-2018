import React from "react";
import { TextInput, View, Text } from "react-native";
import { DatePicker, List } from "antd-mobile";
import enUs from "antd-mobile/lib/date-picker/locale/en_US";

import styles from "./MyTextInput.style";
import { colors, text } from "../../styles";

/**
 * to be wrapped with redux-form Field component
 */
export default function MyDateInput(props) {
  const { label, input, meta, ...inputProps } = props;

  // TODO: Add some more validation rules
  const validationStyles =
    meta.touched && !meta.active
      ? meta.valid && input.value ? styles.valid : styles.invalid
      : null;

  const maxDate = new Date(2018, 11, 3, 22, 0);
  const minDate = new Date(1900, 7, 6, 8, 30);

  return (
    <View style={[styles.inputContainer, validationStyles, { marginTop: 20 }]}>
      <DatePicker
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        locale={enUs}
        mode="date"
        title="Select Date"
        extra="Optional"
        value={input.value}
        onChange={input.onChange}
        style={styles.input}
        minDate={minDate}
        maxDate={maxDate}
      >
        <List.Item arrow="horizontal">Date of birth</List.Item>
      </DatePicker>
    </View>
  );
}
