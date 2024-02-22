import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AddProduct() {
  const [imageURL, setImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [colour, setColour] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [sizes, setSizes] = useState([{ width: "", height: "", quantity: "" }]);
  const addSizeHandler = () => {
    setSizes([...sizes, { width: "", height: "", quantity: "" }]);
  };

  const removeSizeHandler = (index) => {
    const newSizes = [...sizes];
    newSizes.splice(index, 1);
    setSizes(newSizes);
  };

  const inputChangeHandler = (e, index) => {
    const { name, value } = e.target;
    const newSizes = [...sizes];
    newSizes[index][name] = value;
    setSizes(newSizes);
  };
  const addProductHandler = () => {
    const inputData = {
      imageURL,
      title,
      brand,
      colour,
      quantity,
      price,
      salePrice,
      discountPercentage,
      category,
      description,
      sizes,
    };
    console.log(inputData);
    console.log(sizes);
    toast.success("Product Added Successfully");
  };

  useEffect(() => {
    let result = ((price - salePrice) / price) * 100;
    console.log(typeof result); 
    setDiscountPercentage(result.toString());
  }, [price, salePrice]);

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
                  setImageURL(e.target.value);
                }}
                value={imageURL}
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
                  htmlFor="colour"
                  className="block mb-3 text-black dark:text-white"
                >
                  Colour
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Colour"
                  onChange={(e) => {
                    setColour(e.target.value);
                  }}
                  value={colour}
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
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Quantity Per Box"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  value={quantity}
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
                  Sale Price
                </label>
                <input
                  type="number"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Sale Price"
                  onChange={(e) => {
                    setSalePrice(e.target.value);
                  }}
                  value={salePrice}
                />
              </div>
              <div>
                <label
                  htmlFor="discountPercentage"
                  className="block mb-3 text-black dark:text-white"
                >
                  Discount Percentage
                </label>
                <input
                  type="number"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Discount Percentage"
                  value={discountPercentage}
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
                  setCategory(e.target.value);
                }}
                defaultValue={category}
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
