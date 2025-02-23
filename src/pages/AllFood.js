import React, { useState } from "react";
import Search from "../components/Search";
import FoodList from "../components/FoodList";

const AllFood = () => {
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} setFoodData={setFoodData} />
    </div>
  );
};

export default AllFood;
