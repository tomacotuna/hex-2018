import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "antd-mobile";
import { Styles } from "./app/decorators/Styles";

export default class App extends React.Component {
  state = {
    data: null
  };

  callAPI = () => {
    fetch("http://localhost:3000/item", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Damnnddsss</Text>
        <Button type="primary" onClick={this.callAPI}>
          Butotn
        </Button>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
