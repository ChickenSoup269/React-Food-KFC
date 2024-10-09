import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="wrapper-product-card">
      <div className="product-card mx-auto mt-11 w-46 transform overflow-hidden rounded-lg shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <div className="relative flex justify-center">
          {/* Product image */}
          <img
            className="product-card-img h-40 w-36 object-cover object-center"
            src={product.image}
            alt={product.name}
          />
          {/* Discount Badge */}
          <p className="discount-badge absolute top-2 right-2 text-base font-medium">
            20% off
          </p>
        </div>

        <div className="p-4">
          <h2 className="product-card-name mb-2 text-base font-medium ">
            {product.name}
          </h2>
          <p className="product-card-description mb-2 text-base ">
            {product.description}
          </p>
          <div className="flex items-center">
            <p className="product-card-price mr-2 text-lg font-semibold line-through dark:text-gray-500">
              ${product.price}
            </p>
            <p className="product-card-price-sales font-medium ">$25.00</p>
            {/* Size Options */}
            <div className="btn-size-food ml-auto flex space-x-2">
              <span className="text-base ">Sizes:</span>
              <button className="rounded-full px-2 py-1 text-xs">XS</button>
              <button className="rounded-full px-2 py-1 text-xs">S</button>
              <button className="rounded-full px-2 py-1 text-xs">XL</button>
            </div>
          </div>

          <button className="btn-add-cart w-full mt-4 py-2 px-3 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
