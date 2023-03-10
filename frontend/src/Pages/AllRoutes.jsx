import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Admin from "./Admin";
import Create from "./Create";
import Tests from "./Tests";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/tests" element={<Tests />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
