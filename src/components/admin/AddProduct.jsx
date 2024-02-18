import React, { useState } from "react";

function AddProduct() {
  const [inputList, setInputList] = useState([]);
  const addSizeHandler = () => {
    const list = [...inputList, []];
    setInputList(list);
  };

  const removeSizeHandler = (i) => {
    const deleteList = [...inputList];
    deleteList.splice(i, 1);
    setInputList(deleteList);
  };

  const inputChangeHandler = (e, i) => {
    const inputData = [...inputList];
    inputData[i] = e.target.value;
    setInputList(inputData);
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <h2 className="text-gray-800 mb-4 text-xl font-bold sm:text-2xl">
        Add New Product
      </h2>
      <div className="flex flex-col justify-center bg-white shadow">
        <h3 className="border-b py-4 px-7 text-lg font-medium">
          Product Information
        </h3>
        <div className="flex flex-col gap-5 p-7">
          <div>
            <label
              htmlFor="imgurl"
              className="block mb-3 text-black dark:text-white"
            >
              Image URL
            </label>
            <input
              type="text"
              className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
              placeholder="Image URL"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="title"
                className="block mb-3 text-black dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                placeholder="Title"
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block mb-3 text-black dark:text-white"
              >
                Brand
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                placeholder="Brand"
              />
            </div>
            <div>
              <label
                htmlFor="colour"
                className="block mb-3 text-black dark:text-white"
              >
                Colour
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                placeholder="Colour"
              />
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block mb-3 text-black dark:text-white"
              >
                Quantity
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                placeholder="Quantity"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <label
                htmlFor="price"
                className="block mb-3 text-black dark:text-white"
              >
                Price
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                placeholder="Price"
              />
            </div>
            <div>
              <label
                htmlFor="discountedprice"
                className="block mb-3 text-black dark:text-white"
              >
                Discounted Price
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                placeholder="Discounted Price"
              />
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block mb-3 text-black dark:text-white"
              >
                Discount Percentage
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                placeholder="Discount Percentage"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Category"
              className="block mb-3 text-black dark:text-white"
            >
              Category
            </label>
            <select className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500">
              <option value="">Select</option>
              <option value="male">Indoor</option>
              <option value="female">Outdoor</option>
              <option value="other">Bathroom</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="desciption"
              className="block mb-3 text-black dark:text-white"
            >
              Desciption
            </label>
            <textarea
              type="text"
              className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500 resize-none"
              placeholder="Desciption"
              rows={5}
            ></textarea>
          </div>
          <div className="flex justify-between items-center -mx-8">
            <h3 className="border-b py-4 px-7 text-lg font-medium">
              Product Information
            </h3>
            <button
              onClick={(e) => addSizeHandler(e)}
              className="px-3 py-2 mr-8 border-none outline-none text-white rounded bg-indigo-500"
            >
              Add Sizes
            </button>
          </div>

          {inputList.map((data, i) => {
            return (
              <div
                className="flex items-center justify-between gap-x-5 mt-4"
                key={i}
              >
                <div>
                  <label
                    htmlFor="width"
                    className="block mb-3 text-black dark:text-white"
                  >
                    Width
                  </label>
                  <input
                    type="text"
                    onChange={(e) => inputChangeHandler(e, i)}
                    className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                    placeholder="Width"
                  />
                </div>
                <div>
                  <label
                    htmlFor="height"
                    className="block mb-3 text-black dark:text-white"
                  >
                    Height
                  </label>
                  <input
                    type="text"
                    onChange={(e) => inputChangeHandler(e, i)}
                    className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                    placeholder="Height"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block mb-3 text-black dark:text-white"
                  >
                    Quantity
                  </label>
                  <input
                    type="text"
                    onChange={(e) => inputChangeHandler(e, i)}
                    className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                    placeholder="Quantity"
                  />
                </div>
                <button
                  onClick={() => removeSizeHandler(i)}
                  className="self-end mb-2 px-3 py-2 border-none outline-none text-white rounded bg-red-500"
                >
                  Remove
                </button>
              </div>
            );
          })}

          <div className="flex gap-5 mt-4">
            <button className=" px-5 py-3 border-none outline-none text-white rounded bg-indigo-500">
              Add Product
            </button>
            <button className=" px-5 py-3 border-none outline-none text-white rounded bg-red-500">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
