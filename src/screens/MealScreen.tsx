import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect, useState } from "react";

import { Meals } from "../components/DataModel";
import { retrieveMealbyLetter, retrieveRandomMeal } from "../helpers/ApiHelper";

const MealScreen: FC = () => {
  const [data, setData] = useState<Meals>();
  useEffect(() => {
    const fetchData = async () => {
      const mealData = await retrieveMealbyLetter("a");
      console.log(mealData);
      setData(mealData);
    };
    fetchData();
  }, []);

  return (
    <ScrollView>
      <Text>MealScreen</Text>
      {data &&
        Object.keys(data).map((key) => (
          <View key={key} style={styles.mealBox}>
            <Text style={styles.mealTitle}>{data[key].strMeal}</Text>
            <Image
              source={{ uri: data[key].strMealThumb }}
              style={{
                height: 150,
                width: "90%",
                marginVertical: 5,
                alignSelf: "center",
                borderRadius: 5,
              }}
            />
          </View>
        ))}
      <View></View>
    </ScrollView>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 10,
  },
  mealBox: {
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 5,
  },
});
