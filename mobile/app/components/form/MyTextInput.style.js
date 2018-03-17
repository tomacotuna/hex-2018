import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default StyleSheet.create({
  input: {
    height: 30,
    padding: 5,
    marginTop: 10
  },
  inputContainer: {
    borderBottomWidth: 1.5,
    borderColor: colors.primary,
    marginTop: 10
  },
  valid: {
    borderColor: colors.success
  },
  invalid: {
    borderColor: colors.danger
  },
  radioStyle: {
    paddingRight: 10
  }
});
