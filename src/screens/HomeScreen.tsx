import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PageProps } from "../navigator";

const HomeScreen = ({ navigation }: PageProps<"Home">) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Enter"
        onPress={() => {
          navigation.navigate("Meals");
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
