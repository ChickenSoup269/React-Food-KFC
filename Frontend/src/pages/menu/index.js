import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './menu.scss';
const cx = clsx.bind(styles);
import products from '~/components/Products/products';

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting
    const lowercasedQuery = searchQuery.toLowerCase();

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowercasedQuery)
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className={cx('wrapper-menu-page')}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-20 text-center sm:px-16">
          <p className="title-search-menu mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Search Food In ZFC
          </p>

          <form onSubmit={handleSearchSubmit}>
            <label
              className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
              htmlFor="search-bar"
            >
              <input
                id="search-bar"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search food"
                name="q"
                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                required
              />
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-black border-black text-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
              >
                <div className="flex items-center transition-all opacity-1">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Search
                  </span>
                </div>
              </button>
            </label>
          </form>
        </div>

        {/* Product Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-10">
          {filteredProducts.map((product) => (
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
                  <p className="product-card-price-sales font-medium ">
                    $25.00
                  </p>
                  {/* Size Options */}
                  <div className="btn-size-food ml-auto flex space-x-2">
                    <span className="text-base ">Sizes:</span>
                    <button className="rounded-full px-2 py-1 text-xs">
                      XS
                    </button>
                    <button className="rounded-full px-2 py-1 text-xs">
                      S
                    </button>
                    <button className="rounded-full px-2 py-1 text-xs">
                      XL
                    </button>
                  </div>
                </div>

                <button className="btn-add-cart w-full mt-4 py-2 px-3 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
