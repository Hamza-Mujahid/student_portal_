import React from 'react';
import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Admin_Login_page from "../Pages/Admin_Login_page"
import Admin_panel from "../Pages/Admin_panel"


const AdminRouter = () => {
  return (
    <AppRoutes>
    <Route path="/" element={<Home/>} />
    <Route path="/Admin_Login_page" element={<Admin_Login_page />} />
    <Route path="/Admin_panel" element={<Admin_panel />} />
    </AppRoutes>
  )
}

export default AdminRouter