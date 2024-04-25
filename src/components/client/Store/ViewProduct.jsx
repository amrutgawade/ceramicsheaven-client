import React, { useContext, useEffect, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { getAxiosInstance } from "../../admin/Utility/axiosApiConfig";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  seTotalPrice,
  setDiscount,
  setTotalDiscountedPrice,
  setTotalItem,
} from "../../../features/cart/cartSlice";
import toast from "react-hot-toast";

function ViewProduct() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const axiosInstance = getAxiosInstance();
  const [product, setProduct] = useState({});
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState("");
  const [quantity, SetQuantity] = useState(1);

  const increment = () => {
    SetQuantity(Number(quantity) + 1);
  };
  const decrement = () => {
    SetQuantity(Number(quantity) - 1);
  };

  const addToCartHandler = async (productId) => {
    const cartItem = {
      productId,
      quantity: Number(quantity),
      size,
    };
    await axiosInstance
      .put("http://localhost:8081/api/cart/add", cartItem)
      .then((res) => {
        const data = res.data;
        toast.success(data.message);
        navigate("/cart");
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(data.cartItems);
    // const fetchData = async () => {
    await axiosInstance
      .get("http://localhost:8081/api/cart/", {})
      .then((res) => {
        const fetchData = res.data;
        dispatch(addCartItem(fetchData.cartItems));
        dispatch(setTotalItem(fetchData.totalItem));
        dispatch(seTotalPrice(fetchData.totalPrice));
        dispatch(setTotalDiscountedPrice(fetchData.totalDiscountedPrice));
        dispatch(setDiscount(fetchData.discount));
        // console.log(fetchData);
      })
      .catch((err) => {
        console.log(err);
      });
    // };
  };

  const fetchData = async () => {
    await axios
      .get(`http://localhost:8081/products/${pathname.slice(15)}`, {})
      .then((res) => {
        const data = res.data;
        setProduct(data);
        setSizes(data.sizes);
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
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-8 mx-auto">
        <div className="lg:w-4/5 mx-auto mb-4 flex items-center flex-wrap">
          <TiArrowBack className="text-indigo-500" />
          <button
            onClick={() => history.back()}
            className="block bg-indigo-50 text-indigo-500 px-4 py-1 ml-1 rounded border "
          >
            Back
          </button>
        </div>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.imageUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.brand}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              TITLE
            </h2>
            <h1 className="text-gray-900 text-xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{product.discription}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color:</span>
                <span className="mr-3">{product.color}</span>
                {/* <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Sizes:</span>
                <div className="relative">
                  <select
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                    // onContextMenuCapture={(e) => {
                    //   setSize(e.target.value);
                    // }}
                    defaultValue={size}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                  >
                    <option value="">Select Size</option>
                    {sizes.map((item, idx) => (
                      <option key={idx} value={item.width + "X" + item.height}>
                        {item.width + " X " + item.height}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="flex items-center gap-x-2 text-white">
                <p className="text-black">Quantity</p>
                <button
                  onClick={decrement}
                  className="block py-2 px-4 rounded bg-zinc-800 border"
                >
                  -
                </button>
                <input
                  className="text-center text-black w-16 py-2 border outline-none"
                  type="number"
                  defaultValue={1}
                  onChange={(e) => SetQuantity(e.target.value)}
                  value={quantity}
                />
                <button
                  onClick={increment}
                  className="block py-2 px-4 rounded bg-zinc-800 border"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-green-500 mr-2">
                ₹{product.discountedPrice}
              </span>
              <span className="title-font font-medium text-green-500 mr-2">
                {product.discountedPercent}%
              </span>
              <s className="title-font font-medium text-2xl text-gray-600">
                ₹{product.price}
              </s>

              {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button> */}
            </div>
            <div className="flex items-center justify-between gap-x-8 mt-8">
              <button
                type="submit"
                onClick={() => addToCartHandler(product.id)}
                className="block w-full text-white bg-zinc-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-700 rounded"
              >
                Add to Cart
              </button>
              <button className="block w-full text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewProduct;
