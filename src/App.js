import { useState } from "react";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jax from "./Jax";
function App() {
  const [matrix, setMatrix] = useState([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ]);

  return (
    <>
      <table>
        <tr key="">
          {matrix[0].map((d) => {
            return <td>{d}</td>;
          })}
        </tr>
        <tr key="">
          {matrix[1].map((d) => {
            return <td>{d}</td>;
          })}
        </tr>
        <tr key="">
          {matrix[2].map((d) => {
            return <td>{d}</td>;
          })}
        </tr>
      </table>
    </>
  );
}

export default App;
