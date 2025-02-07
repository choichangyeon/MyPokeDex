import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Dex from "@pages/Dex";
import Details from "@pages/Details";
import { ToastContainer } from "react-toastify";

const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dex" element={<Dex />}></Route>
        <Route path="details/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
