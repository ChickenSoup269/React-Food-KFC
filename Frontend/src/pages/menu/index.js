import React, { useState } from 'react';

import clsx from 'clsx';
import styles from './menu.scss';
import products from '~/components/Products/products';
import ProductCard from '~/components/Products/product-card';

const cx = clsx.bind(styles);
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

  const [activeCategory, setActiveCategory] = useState(null);

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
        {/* button */}
        <div className="flex justify-center">
          <div className="button-container flex space-x-2 mb-1">
            {Array.from(
              new Set(products.map((product) => product.category))
            ).map((category) => (
              <button
                key={category}
                className={`btn-category text-white py-2 px-4 rounded-lg shadow-lg ${
                  activeCategory === category
                    ? 'bg-[var(--thirdary-color)]'
                    : 'bg-[var(--secondary-color)]'
                }`} // Use CSS variables for button colors
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
