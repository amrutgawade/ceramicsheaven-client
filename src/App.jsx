import React from "react";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./layouts/client/MasterLayout";
import AdminLayout from "./layouts/admin/AdminLayout";
import Error404 from "./pages/Error404";
import Error401 from "./pages/Error401";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Reset from "./pages/Reset";
import Home from "./pages/Home";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import Products from "./components/admin/Products";
import Orders from "./components/admin/Orders";
import Customers from "./components/admin/Customers";
import Transactions from "./components/admin/Transactions";
import Message from "./components/admin/Message";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Forgot-Password" element={<Reset />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/message" element={<Message />} />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
