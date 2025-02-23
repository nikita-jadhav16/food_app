import React from "react";
import FoodItem from "./FoodItem";
import styles from "./foodList.module.css";

const FoodList = ({ foodData, setFoodData }) => {
  console.log("food data in food list component", foodData);

  return (
    <>
      <div className={styles.cardContainer}>
        {foodData.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </div>
    </>
  );
};

export default FoodList;
