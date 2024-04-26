import React, { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { getAxiosInstance } from "../../../utility/axiosApiConfig";
import PaginationButtons from "../Utility/PaginationButtons";
import toast from "react-hot-toast";

function Customers() {
  const axiosInstance = getAxiosInstance();
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [tableItems, setTableItems] = useState([]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(id) {
    setUserId(id);
    setIsOpen(true);
  }

  const deleteUserHandler = async () => {
    // console.log(userId);
    await axiosInstance
      .post(`http://localhost:8081/api/admin/deleteUser/${userId}`, {})
      .then((res) => {
        // const data = res.data;
        toast.success("User Deleted Successfully");
        console.log(res);
      })
      .catch((err) => {
        toast.error("User Not Deleted");
        console.log(err);
      });
  };

  const fetchData = async () => {
    await axiosInstance
      .post("http://localhost:8081/api/admin/allUsers", {})
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
    const getCustomers = function (page, limit) {
      let array = [];
      let j = 0;
      for (let i = (page - 1) * limit; i < page * limit && tableItems[i]; i++) {
        array.push(tableItems[i]);
        array[j].id = i + 1;
        j++;
      }
      return array;
    };

    setLoading(false);

    let result = getCustomers(currentPage + 1, limit);

    setTotalPages(Math.ceil(tableItems.length / limit));
    setCustomers(result);
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
                    className="text-xl font-bold leading-6 text-red-500"
                  >
                    Are you sure to delete ?
                  </Dialog.Title>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-6 py-2 text-md font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={deleteUserHandler}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-6 py-2 text-md font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Customers</h3>
      <div className="flex justify-end gap-x-4">
        <input
          placeholder="Search..."
          type="text"
          className="w-fit px-3 py-2 outline-none border border-indigo-200 bg-indigo-50 rounded"
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
      {loading ? (
        <div className="flex justify-center items-center h-[55vh]">
          <div className="animate-spin h-16 w-16 rounded-full border-4 border-r-transparent border-indigo-500"></div>
        </div>
      ) : (
        <>
          <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6 text-center">No</th>
                  <th className="py-3 px-6">Username</th>
                  <th className="py-3 px-6 text-center">Gender</th>
                  <th className="py-3 px-6 text-center">Mobile</th>
                  <th className="py-3 px-6 text-center">Role</th>
                  <th className="py-3 px-6 text-center">Register Date</th>
                  <th className="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {customers.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-4 px-6 whitespace-nowrap text-center">
                      {idx + 1}
                    </td>
                    <td className="py-3 px-6 whitespace-nowrap">
                      {/* <img src={item.avatar} className="w-10 h-10 rounded-full" /> */}
                      <div>
                        <span className="block text-gray-700 text-sm font-medium">
                          {item.firstName + " " + item.lastName}
                        </span>
                        <span className="block text-gray-700 text-xs">
                          {item.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.mobile}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {" "}
                      <span
                        className={`px-3 py-2 rounded-full font-semibold text-xs ${
                          item.status == "Active"
                            ? "text-green-600 bg-green-50"
                            : "text-blue-600 bg-blue-50"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="text-center px-6 whitespace-nowrap space-x-2">
                      <button
                        onClick={() => openModal(item.id)}
                        className="py-2 leading-none px-3 font-medium border hover:border-red-500 text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
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

export default Customers;
