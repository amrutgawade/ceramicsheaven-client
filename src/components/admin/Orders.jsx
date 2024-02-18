import React from "react";

function Orders() {
  const tableItems = [
    {
      name: "Solo learn app",
      date: "Oct 9, 2023",
      status: "Pending",
      price: "₹35.000",
      quantity: "2300",
    },
    {
      name: "Window wrapper",
      date: "Oct 12, 2023",
      status: "Delivered",
      price: "₹12.000",
      quantity: "230",
    },
    {
      name: "Unity loroin",
      date: "Oct 22, 2023",
      status: "Pending",
      price: "₹20.000",
      quantity: "10",
    },
    {
      name: "Background remover",
      date: "Jan 5, 2023",
      status: "Delivered",
      price: "₹5.000",
      quantity: "23",
    },
    {
      name: "Colon tiger",
      date: "Jan 6, 2023",
      status: "Delivered",
      price: "₹9.000",
      quantity: "500",
    },
    {
      name: "Unity loroin",
      date: "Oct 22, 2023",
      status: "Pending",
      price: "₹20.000",
      quantity: "10",
    },
    {
      name: "Background remover",
      date: "Jan 5, 2023",
      status: "Delivered",
      price: "₹5.000",
      quantity: "23",
    },
    {
      name: "Colon tiger",
      date: "Jan 6, 2023",
      status: "Delivered",
      price: "₹9.000",
      quantity: "500",
    },
    {
      name: "Unity loroin",
      date: "Oct 22, 2023",
      status: "Pending",
      price: "₹20.000",
      quantity: "10",
    },
    {
      name: "Background remover",
      date: "Jan 5, 2023",
      status: "Delivered",
      price: "₹5.000",
      quantity: "23",
    },
    {
      name: "Colon tiger",
      date: "Jan 6, 2023",
      status: "Delivered",
      price: "₹9.000",
      quantity: "500",
    },
    {
      name: "Unity loroin",
      date: "Oct 22, 2023",
      status: "Pending",
      price: "₹20.000",
      quantity: "10",
    },
    {
      name: "Background remover",
      date: "Jan 5, 2023",
      status: "Delivered",
      price: "₹5.000",
      quantity: "23",
    },
    {
      name: "Colon tiger",
      date: "Jan 6, 2023",
      status: "Delivered",
      price: "₹9.000",
      quantity: "500",
    },
    {
      name: "Unity loroin",
      date: "Oct 22, 2023",
      status: "Pending",
      price: "₹20.000",
      quantity: "10",
    },
    {
      name: "Background remover",
      date: "Jan 5, 2023",
      status: "Delivered",
      price: "₹5.000",
      quantity: "23",
    },
    {
      name: "Colon tiger",
      date: "Jan 6, 2023",
      status: "Delivered",
      price: "₹9.000",
      quantity: "500",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Orders
          </h3>
          
        </div>
       
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-1 text-center">No.</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 pr-6 text-center">Date</th>
              <th className="py-3 pr-6 text-center">Status</th>
              <th className="py-3 pr-6 text-center">Quantity</th>
              <th className="py-3 pr-6 text-center">Price</th>
              <th className="py-3 pr-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-1 py-4 whitespace-nowrap text-center">{idx+1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-4 whitespace-nowrap text-center">{item.date}</td>
                <td className="pr-6 py-4 whitespace-nowrap text-center">
                  <span
                    className={`px-3 py-2 rounded-full font-semibold text-xs ${
                      item.status == "Delivered"
                        ? "text-green-600 bg-green-50"
                        : "text-blue-600 bg-blue-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="pr-6 py-4 whitespace-nowrap text-center">{item.quantity}</td>
                <td className="pr-6 py-4 whitespace-nowrap text-center">{item.price}</td>
                <td className="text-center whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-1.5 px-3 text-gray-600 hover:border-indigo-500 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg"
                  >
                    Manage
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
