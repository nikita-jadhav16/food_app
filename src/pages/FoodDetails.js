import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { id } = useParams();

  const API = "https://api.spoonacular.com/recipes/";
  const TYPE = "/information";
  const API_KEY = "d94218c084cb48a8a99298878bf56c9c";

  // const TYPE = "/ingredientWidget.json";
  // const recipeDetails = [];

  useEffect(() => {
    const fetchData = async () => {
      const foodRecipeDetails = await fetch(
        `${API}${id}${TYPE}?apiKey=${API_KEY}`
      );
      //  recipeDetails.push(foodRecipeDetails.json);
      const data = await foodRecipeDetails.json();
      console.log(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      Food details page
      <p>food id: {id}</p>
    </div>
  );
};

export default FoodDetails;
