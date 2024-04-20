import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
}

export default App;
