import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";
import HomeLayout from "./layouts/frontend/HomeLayout";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import MainLayout from "./components/admin/MainLayout";
import Login from "./components/frontend/Login";
import Register from "./components/frontend/Register";
import './App.css'
import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import Contact from "./components/frontend/Contact";
import Products from "./components/frontend/Products";
import Item from "./components/frontend/Item";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {path:'/', element: <Home />},
      {path:'/login', element: <Login />},
      {path:'/register', element: <Register />},
      {path:'/products', element: <Products />},
      {path:'/products/item', element: <Item />},
      {path:'/about', element: <About />},
      {path:'/contact', element: <Contact />},
    ]
  },
  {
    path: '/admin',
    element: <MasterLayout />,
    children: [
      {
        path: '/admin',
        element: <MainLayout />,
        children: [
          { path: '/admin/', element: <Dashboard /> },
          { path: '/admin/dashboard', element: <Dashboard /> },
          { path: '/admin/profile', element: <Profile /> }
        ]
      },
    ]
  }

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
