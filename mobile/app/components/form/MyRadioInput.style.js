import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default StyleSheet.create({
  input: {
    height: 30,
    padding: 5,
    marginTop: 10
  },
  inputContainer: {
    marginTop: 10
  },
  valid: {
    borderColor: colors.success
  },
  invalid: {
    borderColor: colors.danger
  },
  radioInput: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 25
  },
  radioStyle: {
    paddingRight: 15
  }
});
