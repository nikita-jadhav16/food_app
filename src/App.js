// import { useState } from "react";
import Nav from "./components/Nav";
import AllFood from "./pages/AllFood";
// import Search from "./components/Search";
// import FoodList from "./components/FoodList";

function App() {
  // const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav />
      <AllFood />
      {/* <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} setFoodData={setFoodData} /> */}
    </>
  );
}

export default App;
