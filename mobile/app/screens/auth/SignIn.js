import React from "react";
import { Text, TextInput, View, ScrollView } from "react-native";
import { List } from "antd-mobile";
import { Button, Input } from "../../components";
import Styles from "../../decorators/Styles";
import { text } from "../../styles/text";

@Styles({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  },
  header: {
    alignSelf: "flex-start"
  },
  form: {
    width: "100%",
    marginTop: 50
  }
})
class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
    isLoading: false
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  login = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  render() {
    const { styles } = this;

    return (
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <Text style={text.large}>Hello!</Text>
          <Text style={text.large}>Sign in to continue</Text>
        </View>

        <View style={styles.form}>
          <View>
            {this.state.username ? (
              <Text style={text.small}>Username</Text>
            ) : null}
            <Input
              type="username"
              placeholder="Username"
              onChangeText={this.onChangeText}
              value={this.state.username}
            />
          </View>
          <View>
            {this.state.password ? (
              <Text style={text.small}>Password</Text>
            ) : null}
            <Input
              type="password"
              placeholder="Password"
              onChangeText={this.onChangeText}
              value={this.state.password}
              secureTextEntry
            />
          </View>

          <Button
            title="Sign in"
            onPress={this.login}
            isLoading={this.state.isLoading}
          />
        </View>
      </ScrollView>
    );
  }
}

export default SignIn;
