import React from "react";
import styles from "./foodItem.module.css";

const FoodItem = ({ food }) => {
  const API = "https://api.spoonacular.com/recipes/";
  const TYPE = "card";
  const handleClick = async (food) => {
    console.log("food id", food);
    // const foodID = Number(food.id)

    const foodRecipe = await fetch(`${API}${food.id}/${TYPE}`);
    const foodRecipeData = await foodRecipe.json();
    console.log("recipe ===========>", foodRecipeData);
  };

  return (
    <div className={styles.card}>
      <img src={food.image} alt={food.title} className={styles.foodImg} />
      <div className={styles.foodContent}>
        <p className={styles.foodTitle}>{food.title}</p>
      </div>
      <button onClick={() => handleClick(food)} className={styles.button}>
        Recipe
      </button>
    </div>
  );
};

export default FoodItem;
