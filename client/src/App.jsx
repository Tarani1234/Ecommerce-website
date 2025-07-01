import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import AuthLayout from "./components/auth/Layout";
import AdminLayout from "./components/admin-view/Layout";
const App = () => { 
  return (
      <div className="flex flex-col overflow-hidden bg-white">
        <h1>Header Component</h1>
        <Routes>
           <Route path="/auth" element={<AuthLayout/>}>
              <Route path="login" element={<Login/>}/>
               <Route path="register" element={<Register/>}/>
           </Route>
            <Route path="/admin" element={<AdminLayout/>}>
                
            </Route>
        </Routes>
      </div>
  );
};

export default App;
