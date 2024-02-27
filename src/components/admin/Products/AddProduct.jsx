import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../Utility/axiosApiConfig";

function AddProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [qtyPerBox, setQtyPerBox] = useState(0);
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [sizes, setSizes] = useState([{ width: 0, height: 0, quantity: 0 }]);
  const addSizeHandler = () => {
    setSizes([...sizes, { width: 0, height: 0, quantity: 0 }]);
  };

  const removeSizeHandler = (index) => {
    const newSizes = [...sizes];
    newSizes.splice(index, 1);
    setSizes(newSizes);
  };

  const inputChangeHandler = (e, index) => {
    const { name, value } = e.target;
    const newSizes = [...sizes];
    newSizes[index][name] = Number(value);
    setSizes(newSizes);
  };
  const addProductHandler = async () => {
    const productData = {
      imageUrl,
      title,
      brand,
      color,
      qtyPerBox: Number(qtyPerBox),
      price: Number(price),
      discountPrice: Number(discountPrice),
      discountPercent: Number(discountPercent),
      categoryName,
      description,
      sizes,
    };
    console.log(productData);
    // Axios request
    const response = await axiosInstance
      .post("http://localhost:8081/api/admin/product/", productData)
      .then((res) => {
        console.log(res.data);
        setImageUrl("");
        setTitle("");
        setBrand("");
        setColor("");
        setQtyPerBox(0);
        setPrice(0);
        setDiscountPrice(0);
        setDiscountPercent(0);
        setCategoryName("");
        setDescription("");
        setSizes([{ width: null, height: null, quantity: null }]);
        toast.success("Product Added Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Product Not Added");
      });
  };

  useEffect(() => {
    let result = ((price - discountPrice) / price) * 100;
    // console.log(Math.round(result));
    setDiscountPercent(Math.round(result));
  }, [price, discountPrice]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <h2 className="text-gray-800 mb-4 text-xl font-bold sm:text-2xl">
        Add New Product
      </h2>
      <div className="flex flex-col justify-center bg-white shadow">
        <h3 className="border-b py-4 px-7 text-lg font-medium">
          Product Information
        </h3>
        <form onSubmit={(e) => e.preventDefault()}>
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
                onChange={(e) => {
                  setImageUrl(e.target.value);
                }}
                value={imageUrl}
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
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
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
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                  value={brand}
                />
              </div>

              <div>
                <label
                  htmlFor="color"
                  className="block mb-3 text-black dark:text-white"
                >
                  Color
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Color"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  value={color}
                />
              </div>
              <div>
                <label
                  htmlFor="qtyPerBox"
                  className="block mb-3 text-black dark:text-white"
                >
                  Quantity Per Box
                </label>
                <input
                  type="number"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Quantity Per Box"
                  onChange={(e) => {
                    setQtyPerBox(e.target.value);
                  }}
                  value={qtyPerBox}
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
                  type="number"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  value={price}
                />
              </div>
              <div>
                <label
                  htmlFor="discountedPrice"
                  className="block mb-3 text-black dark:text-white"
                >
                  Discount Price
                </label>
                <input
                  type="number"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Discount Price"
                  onChange={(e) => {
                    setDiscountPrice(e.target.value);
                  }}
                  value={discountPrice}
                />
              </div>
              <div>
                <label
                  htmlFor="discountPercent"
                  className="block mb-3 text-black dark:text-white"
                >
                  Discount Percentage
                </label>
                <input
                  type="number"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Discount Percentage"
                  value={discountPercent}
                  disabled
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
              <select
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                onChange={(e) => {
                  setCategoryName(e.target.value);
                }}
                defaultValue={categoryName}
              >
                <option value="">Select</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
                <option value="bathroom">Bathroom</option>
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
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              ></textarea>
            </div>
            <div className="flex justify-between items-center -mx-8">
              <h3 className="border-b py-4 px-7 text-lg font-medium">
                Product Dimensions
              </h3>
              <button
                onClick={(e) => addSizeHandler(e)}
                className="px-3 py-2 mr-8 border-none outline-none text-white rounded bg-indigo-500"
              >
                Add Sizes
              </button>
            </div>

            {sizes.map((data, i) => {
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
                      type="number"
                      name="width"
                      value={sizes.width}
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
                      type="number"
                      name="height"
                      value={sizes.height}
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
                      type="number"
                      name="quantity"
                      value={sizes.quantity}
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
              <button
                onClick={addProductHandler}
                className=" px-5 py-3 border-none outline-none text-white rounded bg-indigo-500"
              >
                Add Product
              </button>
              <button
                type="reset"
                className=" px-5 py-3 border-none outline-none text-white rounded bg-red-500"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
