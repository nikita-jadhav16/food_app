import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AllFood from "./pages/AllFood";
import FoodDetails from "./pages/FoodDetails";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllFood />} />
          <Route path="/food-details" element={<FoodDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
