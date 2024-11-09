import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MainTab from "./src/navigations/MainTab";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
});
