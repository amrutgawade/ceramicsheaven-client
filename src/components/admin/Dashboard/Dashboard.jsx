import React, { useEffect, useState } from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import {
  LuArrowDown,
  LuArrowUp,
  LuShoppingBag,
  LuShoppingCart,
  LuUsers,
} from "react-icons/lu";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
import { getAxiosInstance } from "../../../utility/axiosApiConfig";

function Dashboard() {
  const [totalSales, setTotalSales] = useState(0);
  const axiosInstance = getAxiosInstance();
  const fetchData = async () => {
    await axiosInstance
      .get("http://localhost:8081/api/admin/orders/totalSales", {})
      .then((res) => {
        const data = res.data;
        setTotalSales(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      {/* <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Dashboard</h3> */}
      <div className="grid md:grid-cols-4 md:gap-x-8 gap-y-4">
        <div className="flex flex-col items-start justify-center p-6 h-fit w-auto bg-white shadow rounded">
          <LuShoppingCart
            fontSize={50}
            className="text-indigo-500 p-3 bg-indigo-500/10 rounded-full"
          />
          <div className="mt-4 flex items-end justify-between w-full">
            <div>
              <h4 className="text-2xl font-bold">₹{totalSales}</h4>
              <span className="text-sm font-medium">Total Sales</span>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium">
              <span>0.43%</span>
              <LuArrowUp />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center p-6 h-fit w-auto bg-white shadow rounded">
          <MdOutlinePendingActions
            fontSize={50}
            className="text-indigo-500 p-3 bg-indigo-500/10 rounded-full"
          />
          <div className="mt-4 flex items-end justify-between w-full">
            <div>
              <h4 className="text-2xl font-bold">11</h4>
              <span className="text-sm font-medium">Pending Orders</span>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium">
              <span>4.35%</span>
              <LuArrowUp />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center p-6 h-fit w-auto bg-white shadow rounded">
          <LuShoppingBag
            fontSize={50}
            className="text-indigo-500 p-3 bg-indigo-500/10 rounded-full"
          />
          <div className="mt-4 flex items-end justify-between w-full">
            <div>
              <h4 className="text-2xl font-bold">2.450</h4>
              <span className="text-sm font-medium">Total Product</span>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium">
              <span>2.59%</span>
              <LuArrowUp />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center p-6 h-fit w-auto bg-white shadow rounded">
          <LuUsers
            fontSize={50}
            className="text-indigo-500 p-3 bg-indigo-500/10 rounded-full"
          />
          <div className="mt-4 flex items-end justify-between w-full">
            <div>
              <h4 className="text-2xl font-bold">3.456</h4>
              <span className="text-sm font-medium">Total Users</span>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium">
              <span>0.95%</span>
              <LuArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 md:flex gap-x-8">
        <div className="flex-1 flex shadow-lg border border-indigo-100 pt-7 pb-2 px-5">
          <BarChart />
        </div>
        <div className="basis-[35%] flex shadow-lg border border-indigo-100 pt-7 pb-2 px-5">
          <ColumnChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
