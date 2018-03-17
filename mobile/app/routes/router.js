import React from "react";
import { TabNavigator } from "react-navigation";
import { Icon } from "antd-mobile";

import { SignUp, SignIn } from "../screens/auth/index";

const Tabs = TabNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  }
});

export { Tabs };
