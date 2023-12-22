type SourceMeal = {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
};

export type SourceMealModel = {
  meals: SourceMeal[];
};

export type Meal = {
  idMeal: String;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  ingMeasures: IngredientMeasure[];
};

export type IngredientMeasure = {
  ingredient: string;
  measure: string;
};

export type Meals = {
  // This is an associated array or keyed array. in this case Meal is identified by the key as in Meals[id] returns Meal,
  [id: string]: Meal;
};

export const transform = (data: SourceMealModel): Meals => {
  const allMeals: Meal[] = data.meals.map((entry) => {
    const meal: Meal = {
      idMeal: entry.idMeal,
      strArea: entry.strArea,
      strMeal: entry.strMeal,
      strCategory: entry.strCategory,
      strDrinkAlternate: entry.strDrinkAlternate,
      strMealThumb: entry.strMealThumb,
      strInstructions: entry.strInstructions,
      ingMeasures: retrieveIngredients(entry),
    };
    return meal;
  });

  function retrieveIngredients(entry: SourceMeal): IngredientMeasure[] {
    let ingredients: string[] = [
      entry.strIngredient1,
      entry.strIngredient2,
      entry.strIngredient3,
      entry.strIngredient4,
      entry.strIngredient5,
      entry.strIngredient6,
      entry.strIngredient7,
      entry.strIngredient8,
      entry.strIngredient9,
      entry.strIngredient10,
      entry.strIngredient11,
      entry.strIngredient12,
      entry.strIngredient13,
      entry.strIngredient4,
      entry.strIngredient15,
      entry.strIngredient16,
      entry.strIngredient17,
      entry.strIngredient18,
      entry.strIngredient19,
      entry.strIngredient20,
    ];
    let measures: string[] = [
      entry.strMeasure1,
      entry.strMeasure2,
      entry.strMeasure3,
      entry.strMeasure4,
      entry.strMeasure5,
      entry.strMeasure6,
      entry.strMeasure7,
      entry.strMeasure8,
      entry.strMeasure9,
      entry.strMeasure10,
      entry.strMeasure11,
      entry.strMeasure12,
      entry.strMeasure13,
      entry.strMeasure4,
      entry.strMeasure15,
      entry.strMeasure16,
      entry.strMeasure17,
      entry.strMeasure18,
      entry.strMeasure19,
      entry.strMeasure20,
    ];
    const ingMeasures: IngredientMeasure[] = ingredients
      .map(function (element, index) {
        const ingMeasure: IngredientMeasure = {
          ingredient: element,
          measure: measures[index],
        };
        return ingMeasure;
      })
      .filter((entry) => entry.ingredient && entry.ingredient.trim.length > 0);

    return ingMeasures;
  }

  const meals: Meals = Object.fromEntries(
    allMeals.map((entry) => [entry.idMeal, entry])
  );
  return meals;
};
