import React from "react";
import { reduxForm, Field } from "redux-form";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import moment from "moment";

import MyTextInput from "./MyTextInput";
import MyDateInput from "./MyDateInput";
import MyRadioInput from "./MyRadioInput";
import Button from "../Button";
import styles from "./MyForm.style";

import { colors, text } from "../../styles";
/**
 * Automatically adds the dashes required by the specified phone format and limits the input to ten characters
 */
const phoneFormatter = number => {
  if (!number) return "";
  // NNN-NNN-NNNN
  const splitter = /.{1,3}/g;
  number = number.substring(0, 10);
  return (
    number
      .substring(0, 7)
      .match(splitter)
      .join("-") + number.substring(7)
  );
};

// remove dashes added by the formatter
const phoneParser = number => (number ? number.replace(/-/g, "") : "");

/**
 * Force after min date
 */
const maxDateNormalize = (value, previousValue, values) => {
  const momentMinDate = moment(values.minDate, "MM-DD-YYYY", true);
  const momentMaxDate = moment(value, "MM-DD-YYYY", true);
  if (!momentMinDate.isValid() || !momentMaxDate.isValid()) {
    return value;
  }
  if (!momentMaxDate.isAfter(momentMinDate)) {
    return momentMinDate.add(1, "d").format("MM-DD-YYYY");
  }
  return value;
};

/**
 * Force before max date
 */
const minDateNormalize = (value, previousValue, values) => {
  const momentMaxDate = moment(values.maxDate, "MM-DD-YYYY", true);
  const momentMinDate = moment(value, "MM-DD-YYYY", true);
  if (!momentMinDate.isValid() || !momentMaxDate.isValid()) {
    return value;
  }
  if (!momentMinDate.isBefore(momentMaxDate)) {
    return momentMaxDate.subtract(1, "d").format("MM-DD-YYYY");
  }
  return value;
};

function MyForm(props) {
  return (
    <ScrollView scrollEnabled={false} contentContainerStyle={styles.container}>
      <Field
        label={"Name"}
        name={"name"}
        component={MyTextInput}
        placeholder={"Name"}
      />
      <Field
        label="Email"
        name={"email"}
        component={MyTextInput}
        placeholder={"Email"}
      />
      <Field
        label="Password"
        name="password"
        type="password"
        component={MyTextInput}
        placeholder="Password"
        secureTextEntry
      />

      <Field
        label="Phone Number"
        name={"phoneNumber"}
        component={MyTextInput}
        placeholder="Phone Number"
        format={phoneFormatter}
        parse={phoneParser}
      />

      <Field
        label="Occupation"
        name={"occupation"}
        component={MyTextInput}
        placeholder="Occupation"
      />

      <Field
        label="Gender"
        name={"gender"}
        component={MyRadioInput}
        options={[{ label: "Male", value: 0 }, { label: "Female", value: 1 }]}
      />

      <Field name={"dob"} component={MyDateInput} placeholder="Date of birth" />

      <Button
        title={"Register"}
        isLoading={false}
        onPress={props.handleSubmit}
      />
    </ScrollView>
  );
}

export default reduxForm({
  form: "signIn"
})(MyForm);
