import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Kumbh-regular": require("./assets/fonts/KumbhSans-Regular.ttf"),
    "Kumbh-bold": require("./assets/fonts/KumbhSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={{ fontFamily: "Kumbh-bold" }}>
          Open up App.tsx to start working on your app!
        </Text>
      </View>
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
