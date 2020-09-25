import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
//
import Routes from "./routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Kumbh-regular": require("./assets/fonts/KumbhSans-Regular.ttf"),
    "Kumbh-bold": require("./assets/fonts/KumbhSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StatusBar style="light" />
        <Routes />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#025aa2",
    alignItems: "center",
    justifyContent: "center",
  },
});
