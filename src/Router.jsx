import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonContextProvider from "./PokemonContextProvider";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Details from "./pages/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <PokemonContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="dex" element={<Dex />}></Route>
          <Route path="details/:id" element={<Details />}></Route>
        </Routes>
      </PokemonContextProvider>
    </BrowserRouter>
  );
};

export default Router;
