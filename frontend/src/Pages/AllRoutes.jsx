import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Admin from "./Admin";
import Create from "./Create";
import Tests from "./Tests";
import SingeTest from "./SingeTest";
import EditTest from "./EditTest";

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
        <Route path="tests/:id" element={<SingeTest />} />
        <Route path="/tests/:id/edit" element={<EditTest />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
