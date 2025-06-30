import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "lucide-react";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
const App = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <h1>Header Component</h1>
        <Routes>
          <Route path="/auth" element={<Layout/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
