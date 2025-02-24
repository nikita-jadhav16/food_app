import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AllFood from "./pages/AllFood";
import FoodDetails from "./pages/FoodDetails";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<AllFood />} />
          <Route path="/food-details/:id" element={<FoodDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
