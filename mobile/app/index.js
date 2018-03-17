import React, { Component } from "react";
import { Text, StatusBar, View } from "react-native";
import Tabs from "./routes/Authentication";

export default class MainApp extends Component {
  render() {
    return <Tabs />;
  }
}
