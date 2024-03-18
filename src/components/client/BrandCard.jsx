import React from "react";

const BrandCard = ({ product }) => {
  return (
    <div className="mx-auto cursor-pointer flex flex-col gap-x-8 items-center bg-white rounded-lg shadow-lg overflow-hidden w-[18rem] border border-solid border-gray-300 ">
      <div className="w-full h-[8rem] mt-2">
        <img
          className="object-cover w-full h-full"
          src={product.imageUrl}
          alt={product.brand}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
      </div>
    </div>
  );
};

export default BrandCard;
