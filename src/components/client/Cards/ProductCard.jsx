import React from 'react'

function ProductCard({ product }) {
  return (
    <div className='mx-auto cursor-pointer flex flex-col gap-x-8 items-center bg-white rounded shadow-lg overflow-hidden w-52 border border-solid border-gray-300 '>
      <div className="w-full h-48">
        <img
          className="object-cover w-full h-full"
          src={product.imageUrl}
          alt={product.product}
        />
      </div>

      <div className="w-full h-full p-4">
        <h3 className="text-sm mb-1 font-medium text-gray-900">{product.product}</h3>
        <p className="text-sm mb-1 font-light text-gray-900">{'Muhiba'}</p>
        <p className="text-sm text-gray-900">{'₹50'}</p>
      </div>
    </div>
  )
}

export default ProductCard