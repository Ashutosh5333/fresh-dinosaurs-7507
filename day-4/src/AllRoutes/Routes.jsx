import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Component/Cart";
import { Department } from "../Component/Department";
import { Exclusive } from "../Component/Exclusive";
import { Home } from "../Component/Home";
import { Signin } from "../Component/Signin";
import { Stores } from "../Component/Stores";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exclu" element={<Exclusive />}></Route>
        <Route path="/store" element={<Stores />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/sign" element={<Signin />}></Route>
        <Route path="/depart" element={<Department />}></Route>
      </Routes>
    </>
  );
};
