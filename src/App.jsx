import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Grid from "./Grid";
import Hero from "./assets/Hero";
import Cards from "./assets/Cards";
import Tiles from "./assets/Tiles";
import Layout from "./assets/Layout";

function App() {
  return (
    <Router>
      <Routes>
      <Route
        path="/"
        element={<Grid/>}
      ></Route>
      <Route
        path="/hero"
        element={<Hero/>}
      ></Route>
      <Route
        path="/cards"
        element={<Cards/>}
      ></Route>
      <Route
        path="/tiles"
        element={<Tiles/>}
      ></Route>
      <Route
        path="/layout"
        element={<Layout/>}
      ></Route>
      </Routes>
    </Router>
  );
}

export default App;
