import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  seTotalPrice,
  setDiscount,
  setTotalDiscountedPrice,
  setTotalItem,
} from "../../../features/cart/cartSlice";
import { axiosInstance } from "../../admin/Utility/axiosApiConfig";
import toast from "react-hot-toast";

function AddToCart() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice, totalDiscountedPrice, discount } = useSelector(
    (state) => state.cart
  );

  const quantityIncrementHandler = async (cartItemId) => {
    await axiosInstance
      .put(`http://localhost:8081/api/cart_item/increment/${cartItemId}`, {})
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error("Quantity Update Failed");
      });

    await axiosInstance
      .get("http://localhost:8081/api/cart/", {})
      .then((res) => {
        const data = res.data;
        dispatch(addCartItem(data.cartItems));
        dispatch(setTotalItem(data.totalItem));
        dispatch(seTotalPrice(data.totalPrice));
        dispatch(setTotalDiscountedPrice(data.totalDiscountedPrice));
        dispatch(setDiscount(data.discount));
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const quantityDecrementHandler = async (cartItemId) => {
    await axiosInstance
      .put(`http://localhost:8081/api/cart_item/decrement/${cartItemId}`, {})
      .then((res) => {
        console.log(res.data);
        // dispatch(removeCartItem(id));
        toast.success("Quantity Updated");
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Quantity Update Failed");
      });

    await axiosInstance
      .get("http://localhost:8081/api/cart/", {})
      .then((res) => {
        const data = res.data;
        dispatch(addCartItem(data.cartItems));
        dispatch(setTotalItem(data.totalItem));
        dispatch(seTotalPrice(data.totalPrice));
        dispatch(setTotalDiscountedPrice(data.totalDiscountedPrice));
        dispatch(setDiscount(data.discount));
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeItem = async (id) => {
    await axiosInstance
      .delete(`http://localhost:8081/api/cart_item/${id}`, {})
      .then((res) => {
        console.log(res.data);
        dispatch(removeCartItem(id));
        toast.success("Item Removed");
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Item Remove Failed");
      });

    await axiosInstance
      .get("http://localhost:8081/api/cart/", {})
      .then((res) => {
        const data = res.data;
        dispatch(addCartItem(data.cartItems));
        dispatch(setTotalItem(data.totalItem));
        dispatch(seTotalPrice(data.totalPrice));
        dispatch(setTotalDiscountedPrice(data.totalDiscountedPrice));
        dispatch(setDiscount(data.discount));
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   removeItem();
  // }, [cartItems]);

  return (
    <section className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 lg:py-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row gap-x-20">
        <div className="basis-[58%]">
          <hr />
          {/* Use Map with cart object */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b py-3 lg:py-8"
            >
              <div className="flex-1 flex flex-row gap-x-6">
                <img
                  className="h-32 w-24 lg:h-56 lg:w-44 rounded object-cover"
                  src={item.product.imageUrl}
                  alt="product"
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="">
                      <p className="text-sm md:text-base font-medium">
                        {item.product.title}
                      </p>
                      <p className="text-xs md:text-sm">{item.product.brand}</p>
                      <p className="text-xs md:text-sm">Size: {item.size}</p>
                      <p className="text-sm md:text-base font-medium">
                        ₹{item.product.discountedPrice}
                      </p>
                    </div>
                    {/* <select
                      className="block w-fit text-sm md:text-base self-start outline-none p-0.5 lg:py-1 lg:px-3 mt-2 md:mt-0 border rounded"
                      name="qty"
                      id="qty"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </select> */}
                    <div className="flex items-start gap-x-2 text-white">
                      <button
                        onClick={() => quantityDecrementHandler(item.id)}
                        className="block py-2 px-4 rounded bg-zinc-800 border"
                      >
                        -
                      </button>
                      <input
                        className="text-center text-black w-16 py-2 border outline-none"
                        type="number"
                        readOnly
                        min={1}
                        value={item.quantity}
                        // value={quantity}
                      />
                      <button
                        onClick={() => quantityIncrementHandler(item.id)}
                        className="block py-2 px-4 rounded bg-zinc-800 border"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm md:text-base">✔ In stock</p>
                  </div>
                </div>
              </div>
              <div className="basis-[25%] flex justify-end items-start">
                <button
                  onClick={() => removeItem(item.id)}
                  className="block text-sm md:text-base px-2 py-1 rounded text-indigo-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 h-fit p-4 mt-4 md:mt-0 md:p-8 bg-slate-50 border rounded">
          <h4 className="text-xl font-medium mb-4">Order summary</h4>
          <div className="flex flex-col text-sm md:text-base">
            <div className="py-4 border-b flex justify-between">
              <p>Total price</p>
              <span className="font-semibold">₹{totalPrice}</span>
            </div>
            <div className="py-4 border-b flex justify-between">
              <p>Discounted price</p>
              <span className="font-semibold">₹{totalDiscountedPrice}</span>
            </div>
            <div className="py-4 border-b flex justify-between">
              <p>Money saved</p>
              <span className="font-semibold text-green-500">₹{discount}</span>
            </div>
            <div className="py-4 border-b flex justify-between">
              <p>Shipping estimate</p>
              <span className="font-semibold text-red-500">₹50</span>
            </div>
            <div className="py-4 flex justify-between font-semibold">
              <p>Order total</p>
              <span>₹{totalDiscountedPrice + 50}</span>
            </div>
            <button className="mt-8 block bg-indigo-600 hover:bg-indigo-700 text-white rounded py-3">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddToCart;
