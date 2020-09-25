import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
