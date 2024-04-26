import React, { useEffect, useState } from "react";
import PaginationButtons from "../Utility/PaginationButtons";
import { getAxiosInstance } from "../../../utility/axiosApiConfig";
import { Avatar, AvatarGroup } from "@mui/material";
import { Link } from "react-router-dom";

function Orders() {
  const axiosInstance = getAxiosInstance();
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [orders, setOrders] = useState([]);
  const [tableItems, setTableItems] = useState([]);

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
  }, []);

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
                            item.status == "Delivered"
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
                        <Link
                          to={`/admin/orders/${item.id}`}
                          className="py-2 px-3 text-gray-600 hover:border-indigo-500 hover:text-gray-500 duration-150 hover:bg-gray-50 border border-indigo-200 rounded-lg"
                        >
                          Manage
                        </Link>
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
