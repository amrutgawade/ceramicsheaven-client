import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { axiosInstance } from "../../admin/Utility/axiosApiConfig";
import toast from "react-hot-toast";
import { setOrderPlaced } from "../../../features/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../../features/cart/cartSlice";
const plans = [
  {
    name: "Cash on Delivery",
    value: "CASH_ON_DELIVERY",
  },
  {
    name: "Paypal",
    value: "PAYPAL",
  },
  {
    name: "Razorpay",
    value: "RAZORPAY",
  },
];
function PaymentMethod() {
  const { shippingAddress } = useSelector((state) => state.payment);
  // console.log(shippingAddress);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(plans[0]);

  const paymentHandler = async (paymentMethod) => {
    // console.log(paymentMethod);
    await axiosInstance
      .post(
        `http://localhost:8081/api/payment/${paymentMethod}`,
        shippingAddress
      )
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("orderPlaced", JSON.stringify(res.data));
        dispatch(setOrderPlaced(res.data));
        dispatch(emptyCart());
        toast.success("Order Placed");
        navigate("/checkout?step=3");
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Couldn't Place Order");
      });
  };

  return (
    <div className="w-full px-4 py-16">
      <h2 className="text-2xl text-center md:text-3xl font-bold mb-8">
        Select Payment Method
      </h2>
      <div className="flex flex-col gap-y-4 mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-3">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
              ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <button
          onClick={() => paymentHandler(selected.value)}
          className="block px-4 py-3 text-white bg-indigo-500 hover:bg-indigo-600 rounded"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PaymentMethod;
