import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
