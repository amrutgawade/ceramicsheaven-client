import { Button } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../admin/Utility/axiosApiConfig";
import toast from "react-hot-toast";
import { removeAddress } from "../../../features/auth/authSlice";
import { addshippingAddress } from "../../../features/payment/paymentSlice";
import { useNavigate } from "react-router-dom";

const AddressCard = () => {
  const { address } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setShippingAddressHandler = (idx) => {
    const data = address.filter((item) => item.id == idx);
    const {
      id,
      firstName,
      lastName,
      streetAddress,
      city,
      state,
      zipCode,
      mobile,
    } = data[0];
    const shippingAddress = {
      id,
      firstName,
      lastName,
      streetAddress,
      city,
      state,
      zipCode,
      mobile,
    };
    sessionStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
    dispatch(addshippingAddress(shippingAddress));
    navigate("/checkout?step=2");
  };

  const addressDeteleHandler = async (id) => {
    await axiosInstance
      .delete(`http://localhost:8081/api/users/profile/removeAddress/${id}`, {})
      .then((res) => {
        // console.log(res);
        dispatch(removeAddress(id));
        toast.success(res.data);
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Address Remove Failed");
      });
  };
  // console.log(address);
  return (
    <div>
      {address.map((item, idx) => (
        <div key={idx} className="border-b pb-6">
          <div className="space-y-3 p-3">
            <p className="font-semibold">
              {item.firstName + " " + item.lastName}
            </p>
            <p>{item.streetAddress}</p>
            <p>{item.city + ", " + item.state + ", " + item.zipCode}</p>
            <div className="space-y-1">
              <p className="font-semibold">Phone Number</p>
              <p>{item.mobile}</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-3">
            <button
              className="block px-3 py-1 bg-indigo-500 hover:bg-indigo-600 rounded text-white"
              value={item.id}
              onClick={(e) => setShippingAddressHandler(e.target.value)}
            >
              Deliver Here
            </button>
            <button
              onClick={() => addressDeteleHandler(item.id)}
              className="block"
            >
              <MdDeleteOutline size={25} className="fill-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressCard;
