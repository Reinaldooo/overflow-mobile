import React from "react";
import { StatusBar } from "expo-status-bar";
// import { AppLoading } from "expo";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
//
import Routes from "./routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Kumbh-regular": require("./assets/fonts/KumbhSans-Regular.ttf"),
    "Kumbh-bold": require("./assets/fonts/KumbhSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Insert Apploading</Text>;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
