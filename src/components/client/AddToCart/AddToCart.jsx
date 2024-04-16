import React from "react";

function AddToCart() {
  return (
    <section className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 lg:py-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row gap-x-20">
        <div className="basis-[58%]">
          <hr />
          {/* Use Map with cart object */}
          <div className="flex justify-between border-b py-3 lg:py-8">
            <div className="flex-1 flex flex-row gap-x-6">
              <img
                className="h-32 w-24 lg:h-56 lg:w-44 rounded object-cover"
                src="https://ik.imagekit.io/dj/tiles/tiles-6.jpg?updatedAt=1708156725845"
                alt="product"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="">
                    <p className="text-sm md:text-base font-medium">
                      Basic Tile
                    </p>
                    <p className="text-xs md:text-sm">Kajaria</p>
                    <p className="text-sm md:text-base font-medium">₹50.00</p>
                  </div>
                  <select
                    className="block w-fit text-sm md:text-base self-start outline-none p-0.5 lg:py-1 lg:px-3 mt-2 md:mt-0 border rounded"
                    name="qty"
                    id="qty"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                </div>
                <div>
                  <p className="text-sm md:text-base">✔ In stock</p>
                </div>
              </div>
            </div>
            <div className="basis-[25%] flex justify-end items-start">
              <button className="block text-sm md:text-base px-2 py-1 rounded text-indigo-500">
                Remove
              </button>
            </div>
          </div>
          <div className="flex justify-between border-b py-3 lg:py-8">
            <div className="flex-1 flex flex-row gap-x-6">
              <img
                className="h-32 w-24 lg:h-56 lg:w-44 rounded object-cover"
                src="https://ik.imagekit.io/dj/tiles/tiles-1.jpg?updatedAt=1708156723963"
                alt="product"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="">
                    <p className="text-sm md:text-base font-medium">
                      Basic Tile
                    </p>
                    <p className="text-xs md:text-sm">Bajaj</p>
                    <p className="text-sm md:text-base font-medium">₹50.00</p>
                  </div>
                  <select
                    className="block w-fit text-sm md:text-base self-start outline-none p-0.5 lg:py-1 lg:px-3 mt-2 md:mt-0 border rounded"
                    name="qty"
                    id="qty"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                </div>
                <div>
                  <p className="text-sm md:text-base">✔ In stock</p>
                </div>
              </div>
            </div>
            <div className="basis-[25%] flex justify-end items-start">
              <button className="block text-sm md:text-base px-2 py-1 rounded text-indigo-500">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 h-fit p-4 mt-4 md:mt-0 md:p-8 bg-slate-50 border rounded">
          <h4 className="text-xl font-medium mb-4">Order summary</h4>
          <div className="flex flex-col text-sm md:text-base">
            <div className="py-4 border-b flex justify-between">
              <p>Subtotal</p>
              <span className="font-semibold">₹100.00</span>
            </div>
            <div className="py-4 border-b flex justify-between">
              <p>Shipping estimate</p>
              <span className="font-semibold">₹5.00</span>
            </div>
            <div className="py-4 border-b flex justify-between">
              <p>Tax estimate</p>
              <span className="font-semibold">₹8.32</span>
            </div>
            <div className="py-4 flex justify-between font-semibold">
              <p>Order total</p>
              <span>₹113.32</span>
            </div>
            <button className="mt-8 block bg-indigo-600 hover:bg-indigo-700 text-white rounded py-3">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddToCart;
