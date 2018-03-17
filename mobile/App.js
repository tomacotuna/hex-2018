import React, { Component } from "react";
import { Provider } from "react-redux";
import { Text, StatusBar } from "react-native";
import store from "./app/store"; //Import the store

import MainApp from "./app/index";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}
