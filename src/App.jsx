import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./layouts/client/MasterLayout";
import AdminLayout from "./layouts/admin/AdminLayout";
import Error404 from "./pages/Error404";
import Error401 from "./pages/Error401";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Reset from "./pages/Reset";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import Profile from "./components/admin/Profile/Profile";
import Products from "./components/admin/Products/Products";
import Orders from "./components/admin/Orders/Orders";
import Customers from "./components/admin/Customers/Customers";
import Transactions from "./components/admin/Transactions/Transactions";
import Message from "./components/admin/Message";
import Settings from "./components/admin/Settings/Settings";
import Support from "./components/admin/Support/Support";
import UserContext from "./context/UserContext";
import "./App.css";
import ManageProduct from "./components/admin/Products/ManageProduct";
import AdminLogin from "./pages/AdminLogin";
import { Toaster } from "react-hot-toast";
import AddProduct from "./components/admin/Products/AddProduct";

function App() {
  const { user, token } = useContext(UserContext);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={token && user ? <Error401 /> : <Login />}
          />
          <Route
            path="/signup"
            element={token && user ? <Error401 /> : <SignUp />}
          />
          <Route path="/products" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Login />} />
          <Route path="/Forgot-Password" element={<Reset />} />
        </Route>
        <Route
          path="/admin"
          element={token && user ? <AdminLayout /> : <AdminLogin />}
        >
          {token && user ? (
            <>
              <Route index element={<Dashboard />} />
              <Route path="/admin/profile" element={<Profile />} />
              <Route path="/admin/products" element={<Products />} />
              <Route
                path="/admin/products/add"
                element={<AddProduct />}
              />
              <Route
                path="/admin/products/update"
                element={<ManageProduct title={"Update Product"} />}
              />
              <Route path="/admin/orders" element={<Orders />} />
              <Route path="/admin/customers" element={<Customers />} />
              <Route path="/admin/transactions" element={<Transactions />} />
              <Route path="/admin/complaints" element={<Message />} />
              <Route path="/admin/settings" element={<Settings />} />
              <Route path="/admin/support" element={<Support />} />
            </>
          ) : null}
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
