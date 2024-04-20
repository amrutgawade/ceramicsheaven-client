import React, { useEffect } from "react";
import { axiosInstance } from "../../admin/Utility/axiosApiConfig";
import { useDispatch, useSelector } from "react-redux";
import { setOrderItems } from "../../../features/order/orderSlice";
import { Link } from "react-router-dom";

function AllOrders() {
  const { orderItems } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const fetchData = async () => {
    await axiosInstance
      .get("http://localhost:8081/api/orders/user", {})
      .then((res) => {
        const data = res.data;
        dispatch(setOrderItems(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 lg:py-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">All Orders</h2>
      <div className="flex flex-col gap-y-4">
        {orderItems.map((item, idx) => (
          <div className="flex items-center justify-between border px-8 py-4 bg-slate-200 space-x-10 rounded w-full">
            <div className="w-1/6">
              <div className="flex -space-x-2">
                {item.orderItems.map((item, id) => (
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-300"
                    src={item.product.imageUrl}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-semibold">Order Id</h2>
              <p className="text-indigo-500">#{item.id}</p>
            </div>
            <div>
              <h2 className="font-semibold">Date Placed</h2>
              <p className="">{item.orderDate}</p>
            </div>
            <div>
              <h2 className="font-semibold">Total Amount</h2>
              <p className="font-semibold">₹{item.totalDiscountedPrice}</p>
            </div>
            <Link
              to={`/orders/${item.id}`}
              className="block px-3 py-2 bg-indigo-500 text-white rounded"
            >
              View Order
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllOrders;
