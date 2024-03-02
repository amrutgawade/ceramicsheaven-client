import React, { useEffect, useState } from "react";
import PaginationButtons from "../Utility/PaginationButtons";

function Customers() {
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [customers, setCustomers] = useState([]);

  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Deactive",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      phone_nimber: "+91 9876543210",
      date: "23-08-2024",
      status: "Active",
    },
  ];

  useEffect(() => {
    const getOrders = function (page, limit) {
      let array = [];
      let j = 0;
      for (let i = (page - 1) * limit; i < page * limit && tableItems[i]; i++) {
        array.push(tableItems[i]);
        array[j].id = i + 1;
        j++;
      }
      return array;
    };

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    let result = getOrders(currentPage + 1, limit);

    setTotalPages(Math.ceil(tableItems.length / limit));
    setCustomers(result);
  }, [limit, currentPage]);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Customers</h3>
      <div className="flex justify-end gap-x-4">
        <input
          placeholder="Search..."
          type="text"
          className="w-fit px-5 py-3 outline-none border border-indigo-200 bg-indigo-50 rounded"
        />
        <select
          name="records"
          id="records"
          className="px-3 py-3 outline-none border border-indigo-200 bg-indigo-50 rounded"
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
                  <th className="py-3 px-6 text-center">Mobile</th>
                  <th className="py-3 px-6 text-center">Register Date</th>
                  <th className="py-3 px-6 text-center">Status</th>
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
                          {item.name}
                        </span>
                        <span className="block text-gray-700 text-xs">
                          {item.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.phone_nimber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.date}
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
                      <a
                        href="javascript:void()"
                        className="py-2 px-3 font-medium text-indigo-600 border hover:border-indigo-500 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Edit
                      </a>
                      <button
                        href="javascript:void()"
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
