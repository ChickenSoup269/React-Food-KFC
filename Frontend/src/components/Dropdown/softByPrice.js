import React, { useState } from 'react';

export default function SoftByPrice({ selectedSort, onSortChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Hàm để toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Hàm xử lý chọn sắp xếp
  const handleSortChange = (order) => {
    onSortChange(order); // Gọi hàm từ props để thông báo về lựa chọn mới
    setIsDropdownOpen(false); // Đóng dropdown
  };
  return (
    <div className="wrapper-soft-by-price">
      <div className="hs-dropdown relative inline-flex mt-2">
        <button
          id="hs-dropdown-sort"
          type="button"
          className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          aria-haspopup="menu"
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
        >
          {selectedSort} {/* Hiển thị tên đã chọn */}
          <svg
            className={`hs-dropdown-open:rotate-180 size-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            className="hs-dropdown-menu absolute left-0 top-full z-10 mt-2 w-full min-w-[8rem] origin-top-left rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-800 dark:border dark:border-neutral-700"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropdown-sort"
          >
            <div className="p-1 space-y-0.5">
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
                onClick={() => handleSortChange('priceAsc')}
              >
                Low to High
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
                onClick={() => handleSortChange('priceDesc')}
              >
                High to Low
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
                onClick={() => handleSortChange('sale')}
              >
                Sort by Sale
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
