import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ product }) => {
    const cardStyle = {
        backgroundImage: `url(${product.imageUrl})`,
    };

    return (
        <Link to={`/product?category=${product.category}`} className='cursor-pointer flex flex-col justify-center bg-white rounded-lg shadow-lg overflow-hidden w-[20rem]  border border-solid border-gray-300 '>
            <div className='w-full h-[15rem]'>
                <div className="relative w-full h-64 mb-6 bg-center bg-no-repeat bg-cover" style={cardStyle}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-60">
                        <a href="#" className="text-white">
                            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                        </a>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;
