import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dex from "./Dex";
import Details from "./Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dex" element={<Dex />}></Route>
        <Route path="details" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
