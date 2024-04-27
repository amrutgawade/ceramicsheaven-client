import React, { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PaginationButtons from "../Utility/PaginationButtons";
import { getAxiosInstance } from "../../../utility/axiosApiConfig";
import { Avatar, AvatarGroup } from "@mui/material";
import toast from "react-hot-toast";

function Orders() {
  const axiosInstance = getAxiosInstance();
  const [isOpen, setIsOpen] = useState(false);
  const [orderId, setOrderId] = useState(0);
  const [orderStatus, setOrderStatus] = useState("");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [orders, setOrders] = useState([]);
  const [tableItems, setTableItems] = useState([]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(id) {
    // console.log(id);
    setIsOpen(true);
    const result = orders.filter((item) => {
      return item.id === id;
    });
    setOrderId(id);
    // console.log(result[0]?.orderStatus);
    setOrderStatus(result[0]?.orderStatus);
  }

  const updateOrderStatusHandler = async () => {
    // console.log("Status", orderStatus);
    await axiosInstance
      .put(
        `http://localhost:8081/api/admin/orders/${orderId}/${orderStatus}`,
        {}
      )
      .then((res) => {
        // const data = res.data;
        toast.success("Status Updated Successfully");
        setIsOpen(false);
        // console.log(res);
      })
      .catch((err) => {
        toast.error("Couldn't Update Status");
        console.log(err);
      });
  };

  const fetchData = async () => {
    await axiosInstance
      .get("http://localhost:8081/api/admin/orders/", {})
      .then((res) => {
        const data = res.data;
        setTableItems(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, [isOpen]);

  useEffect(() => {
    const getOrders = function (page, limit) {
      let array = [];
      let j = 0;
      for (let i = (page - 1) * limit; i < page * limit && tableItems[i]; i++) {
        array.push(tableItems[i]);
        array[j].idx = i + 1;
        j++;
      }
      return array;
    };

    setLoading(false);

    let result = getOrders(currentPage + 1, limit);

    setTotalPages(Math.ceil(tableItems.length / limit));
    setOrders(result);
  }, [limit, currentPage, tableItems]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-fit max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-green-500"
                  >
                    Update Order Status
                  </Dialog.Title>

                  <div className="flex flex-col justify-between gap-4 mt-6">
                    <div>
                      <label
                        htmlFor="Category"
                        className="block mb-3 text-black dark:text-white"
                      >
                        Order Status
                      </label>
                      <select
                        className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                        onChange={(e) => {
                          setOrderStatus(e.target.value);
                        }}
                        value={orderStatus}
                      >
                        <option value="PLACED">PLACED</option>
                        <option value="CONFIRMED">CONFIRMED</option>
                        <option value="SHIPPED">SHIPPED</option>
                        <option value="DELIVERED">DELIVERED</option>
                      </select>
                    </div>
                    <div className="flex mt-2 gap-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-6 py-2 text-md font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        onClick={updateOrderStatusHandler}
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-6 py-2 text-md font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Orders
          </h3>
        </div>
        <div className="flex gap-x-4">
          <input
            placeholder="Search by Order Id..."
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 outline-none border border-indigo-200 bg-indigo-50 rounded"
          />
          <select
            name="records"
            id="records"
            className="px-3 py-2 outline-none border border-indigo-200 bg-indigo-50 rounded"
            onClick={(e) => setLimit(e.target.value)}
            defaultValue={limit}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[55vh]">
          <div className="animate-spin h-16 w-16 rounded-full border-4 border-r-transparent border-indigo-500"></div>
        </div>
      ) : (
        <>
          <div className="mt-6 relative h-max overflow-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 pr-1 text-center">No.</th>
                  <th className="py-3 px-6">Products</th>
                  <th className="py-3 pr-6 text-center">Date</th>
                  <th className="py-3 pr-6 text-center">Status</th>
                  <th className="py-3 pr-6 text-center">Order Id</th>
                  <th className="py-3 pr-6 text-center">Price</th>
                  <th className="py-3 pr-6 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="text-gray-600 divide-y">
                {orders
                  .filter((item) => {
                    return search === ""
                      ? item
                      : item.id.toString().includes(search);
                  })
                  .map((item, index) => (
                    <tr key={index}>
                      <td className="pr-1 py-4 whitespace-nowrap text-center">
                        {item.idx}
                      </td>
                      <td className="px-6 py-0 whitespace-nowrap">
                        <div className="w-1/6 flex">
                          <AvatarGroup max={4} total={Number(item.totalItem)}>
                            {item.orderItems.map((itemImg, id) => (
                              <Avatar
                                key={id}
                                alt=""
                                src={itemImg.product.imageUrl}
                              />
                            ))}
                          </AvatarGroup>
                        </div>
                      </td>
                      <td className="pr-6 py-4 whitespace-nowrap text-center">
                        {item.orderDate.substring(0, 10)}
                      </td>
                      <td className="pr-6 py-4 whitespace-nowrap text-center">
                        <span
                          className={`px-3 py-2 rounded-full font-semibold text-xs ${
                            item.orderStatus == "DELIVERED"
                              ? "text-green-600 bg-green-50"
                              : "text-blue-600 bg-blue-50"
                          }`}
                        >
                          {item.orderStatus}
                        </span>
                      </td>
                      <td className="pr-6 py-4 whitespace-nowrap text-center">
                        {item.id}
                      </td>
                      <td className="pr-6 py-4 whitespace-nowrap text-center">
                        ₹{item.totalDiscountedPrice}
                      </td>
                      <td className="text-center whitespace-nowrap">
                        <button
                          onClick={() => openModal(item.id)}
                          className="py-2 px-3 text-gray-600 hover:border-indigo-500 hover:text-gray-500 duration-150 hover:bg-gray-50 border border-indigo-200 rounded-lg"
                        >
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <PaginationButtons
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default Orders;
