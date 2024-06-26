import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import MealList from "../components/MealList/MealList";

import { MEALS } from "../data/dummy-data";

import { FavoritesContext } from "../store/context/favorites-context";
function FavoritesScreen() {
  const mealFavoriteCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    mealFavoriteCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>There is no favorite meals</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
