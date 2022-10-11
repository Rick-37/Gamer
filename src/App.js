import React from "react";
import { Route, Routes } from "react-router-dom";
//style
import GlobalSyles from "./components/GlobalStyles";
//Components & pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalSyles />
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/game/:id"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
