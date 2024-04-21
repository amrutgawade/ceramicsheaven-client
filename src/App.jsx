import React, { useContext } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MasterLayout from "./layouts/client/MasterLayout";
import AdminLayout from "./layouts/admin/AdminLayout";
import Error404 from "./pages/Error404";
import Error401 from "./pages/Error401";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Reset from "./pages/Reset";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import Profile from "./components/admin/Profile/Profile";
import Products from "./components/admin/Products/Products";
import Orders from "./components/admin/Orders/Orders";
import Customers from "./components/admin/Customers/Customers";
import Transactions from "./components/admin/Transactions/Transactions";
import Message from "./components/admin/Message";
import Settings from "./components/admin/Settings/Settings";
import Support from "./components/admin/Support/Support";
import "./App.css";
import ManageProduct from "./components/admin/Products/ManageProduct";
import AdminLogin from "./pages/AdminLogin";
import { Toaster } from "react-hot-toast";
import AddProduct from "./components/admin/Products/AddProduct";
import ViewProduct from "./components/client/Store/ViewProduct";
import { useSelector } from "react-redux";
import AddToCart from "./components/client/AddToCart/AddToCart";
import Checkout from "./components/client/Checkout/Checkout";
import OrderSummary from "./components/client/Order/OrderSummary";
import AllOrders from "./components/client/Order/AllOrders";
import Notifications from "./components/client/Notifications/Notifications";
import UserProfile from "./components/client/UserProfile/UserProfile";

function App() {
  const { token, role } = useSelector((state) => state.auth);
  // const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems.length);
  // const Navigate = useNavigate();

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          {token ? null : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
          {token && <Route path="/cart" element={<AddToCart />} />}
          {token && <Route path="/checkout" element={<Checkout />} />}
          {token && <Route path="/profile" element={<UserProfile />} />}
          {token && <Route path="/orders" element={<AllOrders />} />}
          {token && <Route path="/orders/:id" element={<OrderSummary />} />}

          <Route path="/store" element={<Store />} />
          <Route path="/store/product/:id" element={<ViewProduct />} />

          <Route path="/notifications" element={<Notifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Forgot-Password" element={<Reset />} />
        </Route>
        <Route
          path="/admin"
          element={
            token && role == "ADMIN,USER" ? <AdminLayout /> : <AdminLogin />
          }
        >
          {token && role == "ADMIN,USER" ? (
            <>
              <Route index element={<Dashboard />} />
              <Route path="/admin/profile" element={<Profile />} />
              <Route path="/admin/products" element={<Products />} />
              <Route path="/admin/products/add" element={<AddProduct />} />
              <Route
                path="/admin/products/update/:id"
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
