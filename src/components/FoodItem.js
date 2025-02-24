import React from "react";
import styles from "./foodItem.module.css";
import { useNavigate } from "react-router-dom";

const FoodItem = ({ food }) => {
  const navigate = useNavigate();

  const handleClick = (food) => {
    const id = Number(food.id);
    console.log(id);

    navigate(`/food-details/${id}`);
    // console.log("food id", food);
    // // const foodID = Number(food.id)
    // const foodRecipe = await fetch(`${API}${food.id}/${TYPE}`);
    // const foodRecipeData = await foodRecipe.json();
    // // console.log("recipe ===========>", foodRecipeData);
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
