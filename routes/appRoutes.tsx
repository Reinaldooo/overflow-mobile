import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import Dashboard from "../screens/Dashboard";

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  );
};

export default AppRoutes;
