import axios, { AxiosResponse } from "axios";
import { transform, ExtMealModel, Meals } from "../components/DataModel";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
//const baseUrl = "https://jsonplaceholder.typicode.com/todos/";

export const retrieveRandomMeal = async (): Promise<Meals> => {
  try {
    const promisedResponse: Promise<AxiosResponse> = axios.get(
      baseUrl + "random.php"
    );
    const response: AxiosResponse = await promisedResponse;
    const data: ExtMealModel = response.data;
    //instead of await, we can handle the promise for errors. (or) const response:AxiosResponse = await axios.get(baseUrl);
    return transform(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const retrieveMealbyLetter = async (
  character: string
): Promise<Meals> => {
  try {
    const promisedResponse: Promise<AxiosResponse> = axios.get(
      baseUrl + "search.php?f=" + character
    );
    const response: AxiosResponse = await promisedResponse;
    const data: ExtMealModel = response.data;
    //instead of await, we can handle the promise for errors. (or) const response:AxiosResponse = await axios.get(baseUrl);
    return transform(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
