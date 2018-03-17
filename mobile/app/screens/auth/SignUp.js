import React from "react";
import { Alert, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Button, Input } from "../../components";
import PhoneInput from "react-native-phone-input";
import MyForm from "../../components/form/MyForm";

import Styles from "../../decorators/Styles";
import { colors, text } from "../../styles";

@Styles({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  },
  safeArea: {
    flex: 1
  },
  header: {
    alignSelf: "flex-start"
  },
  form: {
    width: "100%",
    marginTop: 50
  }
})
class SignUp extends React.Component {
  state = {
    username: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: null,
    occupation: null,
    gender: 0,
    countries: [],
    skills: [],
    crisisAvailable: false
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  phoneNumberChange = phone => {
    this.setState({ phone });
  };

  render() {
    const { styles } = this;

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container} bounces={false}>
          <View style={styles.header}>
            <Text style={text.large}>Almost there!</Text>
            <Text style={text.large}>We are excited to see you here!</Text>
          </View>

          <View style={styles.form}>
            <MyForm
              onSubmit={values =>
                Alert.alert("Submitted!", JSON.stringify(values))
              }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SignUp;
