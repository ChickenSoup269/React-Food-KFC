import React from 'react';

export default function ProductCard({ product }) {
  const originalPrice = parseFloat(product.price);
  const discountPercentage = parseFloat(product.discount);
  const salePrice = originalPrice - (originalPrice * discountPercentage) / 100;

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
          {product.discount > 0 && (
            <p className="discount-badge absolute top-2 right-2 text-base font-medium">
              {product.discount}%
            </p>
          )}
        </div>

        <div className="p-4">
          <h2 className="product-card-name mb-2 text-base font-medium ">
            {product.name}
          </h2>
          <p className="product-card-description mb-2 text-base ">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Bọc giá vào một div flex */}
              {/* Hiển thị giá gốc với đường gạch nếu có giảm giá */}
              {product.discount > 0 ? (
                <p className="product-card-price mr-2 text-lg font-semibold line-through dark:text-gray-500">
                  ${originalPrice.toFixed(2)} {/* Giá gốc */}
                </p>
              ) : (
                <p className="product-card-price mr-2 text-lg font-semibold">
                  ${originalPrice.toFixed(2)}{' '}
                  {/* Giá gốc không có đường gạch */}
                </p>
              )}
              {/* Hiển thị giá giảm nếu có giảm giá */}
              {product.discount > 0 && (
                <p className="product-card-price-sales font-medium">
                  ${salePrice.toFixed(2)} {/* Giá sau giảm */}
                </p>
              )}
            </div>
            {/* Size Options */}
            <div className="btn-size-food flex space-x-2">
              <span className="text-base ">Sizes:</span>
              {product.size.map((size, index) => (
                <button
                  key={index}
                  className="rounded-full px-2 py-1 text-xs uppercase"
                >
                  {size}
                </button>
              ))}
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
