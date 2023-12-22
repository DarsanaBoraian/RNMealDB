import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ApiHelper from "../helpers/ApiHelper";

const ApiScreen = () => {
  useEffect(() => {
    ApiHelper();
  }, []);

  return (
    <View>
      <Text>ApiScreen</Text>
    </View>
  );
};

export default ApiScreen;

const styles = StyleSheet.create({});
