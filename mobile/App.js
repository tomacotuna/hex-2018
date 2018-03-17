import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "antd-mobile";
import { Styles } from "./app/decorators/Styles";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Damnnddsss</Text>
        <Button type="primary">Butotn</Button>
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
