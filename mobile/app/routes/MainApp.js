import React from "react";
import { StackNavigator } from "react-navigation";

import Home from "./Home";

const routeConfig = {
  Home: { screen: Home }
};

const StackNav = StackNavigator(routeConfig);

class MainApp extends React.Component {
  render() {
    return <StackNav />;
  }
}

export default StackNav;
