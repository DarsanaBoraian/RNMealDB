import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ApiHelper from "./src/helpers/ApiHelper";
import ApiTodoScreen from "./src/screens/ApiTodoScreen";
import MealScreen from "./src/screens/MealScreen";

export default function App() {
  return (
    <View style={{ marginTop: 20 }}>
      <MealScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
