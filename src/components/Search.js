import React, { useEffect, useState } from "react";
import styles from "./search.module.css";

const Search = ({ foodData, setFoodData }) => {
  const [foodName, setFoodName] = useState("pizza");

  const API = "https://api.spoonacular.com/recipes/complexSearch";
  // const API = "https://api.spoonacular.com/food/search";
  const API_KEY = "d94218c084cb48a8a99298878bf56c9c";

  // https://api.spoonacular.com/food/search?query=pizza&apiKey=d94218c084cb48a8a99298878bf56c9c
  // https://api.spoonacular.com/food/search?query=pizza&apiKey=d94218c084cb48a8a99298878bf56c9c

  useEffect(() => {
    async function getFoodData() {
      const foodData = await fetch(
        `${API}?query=${foodName}&apiKey=${API_KEY}`
      );
      const data = await foodData.json();
      // console.log(data);
      setFoodData(data.results);
    }
    getFoodData();
  }, [foodName]);

  return (
    <>
      <div className={styles.inputboxContainer}>
        <input
          type="text"
          placeholder="search food here"
          className={styles.inputbox}
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
