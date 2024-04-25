import { Box, Step, StepLabel, Stepper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getAxiosInstance } from "../../admin/Utility/axiosApiConfig";
import { setOrderSummary } from "../../../features/order/orderSlice";

const steps = ["Placed", "Confirmed", "Shipped", "Delivered"];

function OrderSummary() {
  const { pathname } = useLocation();
  const { orderSummary } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const axiosInstance = getAxiosInstance();
  const [step, setStep] = useState(0);
  console.log(orderSummary);

  const fetchData = async () => {
    await axiosInstance
      .get(`http://localhost:8081/api/orders/${pathname.substring(8)}`, {})
      .then((res) => {
        const data = res.data;
        dispatch(setOrderSummary(data));
        sessionStorage.setItem("orderSummary", JSON.stringify(data));
        if (data.orderStatus == "PLACED") {
          setStep(1);
        } else if (data.orderStatus == "CONFIRMED") {
          setStep(2);
        } else if (data.orderStatus == "SHIPPED") {
          setStep(3);
        } else if (data.orderStatus == "DELIVERED") {
          setStep(4);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-4 md:px-28 md:my-12">
      <Box sx={{ width: "100%" }}>
        <div className="flex flex-col">
          <div className="py-4 border-b">
            <p className="text-sm font-medium text-indigo-500 uppercase">
              Order {orderSummary?.orderStatus} successfully
            </p>
            <h2 className="text-3xl md:text-5xl font-bold my-2">
              Track Your Order
            </h2>
            <p>
              We appreciate your order, we’re currently processing it. So hang
              tight and we’ll send you confirmation very soon!
            </p>
            <p className="font-medium mt-8 ">Tracking number</p>
            <p className="font-medium text-sm text-indigo-500">
              {orderSummary?.id}
            </p>
            <div className="hidden md:block">
              <Stepper className="my-8 flex-wrap" activeStep={step}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </div>
            <div className="block md:hidden">
              <Stepper
                className="my-2 flex-wrap"
                orientation="vertical"
                activeStep={step}
              >
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </div>
          </div>
          {orderSummary?.orderItems.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between border-b py-2 lg:py-4"
            >
              <div className="flex flex-row gap-x-8">
                <img
                  className="h-32 w-24 lg:h-32 lg:w-24 rounded object-cover"
                  src={item.product.imageUrl}
                  alt="product"
                />
                <div className="flex flex-col justify-start gap-y-2">
                  <p className="text-sm md:text-base font-medium">
                    {item.product.title}
                  </p>
                  <p className="text-xs md:text-sm">{item.product.brand}</p>
                  <p className="text-xs md:text-sm">Size: {item.size}</p>
                  <p className="text-xs md:text-sm">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base self-start font-medium">
                ₹{item.discountedPrice}
              </p>
            </div>
          ))}
          <div className="flex flex-col text-sm md:text-base">
            <div className="pb-2 pt-4 flex justify-between">
              <p>Total price</p>
              <span className="font-semibold">₹{orderSummary?.totalPrice}</span>
            </div>
            <div className="py-2 flex justify-between">
              <p>Discounted price</p>
              <span className="font-semibold">
                ₹{orderSummary?.totalDiscountedPrice}
              </span>
            </div>
            <div className="py-2 flex justify-between">
              <p>Money saved</p>
              <span className="font-semibold text-green-500">
                ₹{orderSummary?.discount}
              </span>
            </div>
            <div className="pb-4 pt-2 border-b flex justify-between">
              <p>Shipping estimate</p>
              <span className="font-semibold text-red-500">-₹50</span>
            </div>
            <div className="py-4 flex justify-between font-semibold">
              <p>Order total</p>
              <span>₹{orderSummary?.totalDiscountedPrice + 50}</span>
            </div>
          </div>
          <div className="grid grid-col-1 md:grid-col-2 md:grid-flow-col border-b gap-y-4 py-4">
            <div>
              <h5 className="text-base font-medium mb-1">Shipping Address</h5>
              <p className="text-sm">
                {orderSummary?.shippingAddresses.firstName +
                  " " +
                  orderSummary?.shippingAddresses.lastName}
              </p>
              <p className="text-sm">
                {orderSummary?.shippingAddresses.streetAddress}
              </p>
              <p className="text-sm">
                {orderSummary?.shippingAddresses.city},{" "}
                {orderSummary?.shippingAddresses.state} -{" "}
                {orderSummary?.shippingAddresses.zipCode}
              </p>
            </div>
            <div>
              <h5 className="text-base font-medium mb-1">
                Payment Information
              </h5>
              <p className="text-sm">
                Method: {orderSummary?.paymentDetails.paymentMethod}
              </p>
              <p className="text-sm">
                Status: {orderSummary?.paymentDetails.paymentStatus}
              </p>
              <p className="text-sm">Date: {orderSummary?.orderDate}</p>
            </div>
          </div>
          <Link
            to={"/store"}
            className="text-base text-end font-medium text-indigo-500 hover:text-indigo-600 my-8"
          >
            Continue Sopping -&gt;
          </Link>
        </div>
      </Box>
    </div>
  );
}

export default OrderSummary;
