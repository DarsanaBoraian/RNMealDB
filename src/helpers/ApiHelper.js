import { View, Text } from "react-native";
import React from "react";
import axios from "axios";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const ApiHelper = () => {
  axios
    .get(baseUrl)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export default ApiHelper;
