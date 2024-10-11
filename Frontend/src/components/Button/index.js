import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './button.scss';

const cx = clsx.bind(styles);

function ButtonSecondary({ onClick, text }) {
  return (
    <div className={cx('wrapper-button-secondary')}>
      <button
        className="btn-add-cart w-full mt-4 py-2 px-3 capitalize rounded"
        onClick={onClick}
      >
        Add to Cart
      </button>
    </div>
  );
}

function ButtonPrimary({ onClick, text }) {
  return (
    <div className={cx('wrapper-button-secondary')}>
      <button
        className="btn-primary w-full mt-4 py-2 px-3 capitalize rounded"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

function ButtonExit({ onClick, text }) {
  return (
    <div className={cx('wrapper-button-secondary')}>
      <button
        className="btn-exit w-full mt-4 py-2 px-3 capitalize rounded"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

function ButtonSetQuality({ quantity, setQuantity }) {
  const incrementQuantity = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1); // Cập nhật số lượng trực tiếp
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Giảm số lượng
    }
  };

  return (
    <div className="wrapper-button-set-quality">
      <div className="mb-4">
        <label className="block text-base font-semibold mb-2">Quantity:</label>

        <button
          type="button"
          onClick={decrementQuantity}
          className="inline-flex h-5 w-5 items-center justify-center rounded-md border bg-gray-600 hover:bg-gray-700"
        >
          <svg
            className="h-2.5 w-2.5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>

        <input
          type="text"
          value={quantity}
          readOnly
          className="w-10 text-center bg-transparent"
        />

        <button
          type="button"
          onClick={incrementQuantity}
          className="inline-flex h-5 w-5 items-center justify-center rounded-md border bg-gray-600 hover:bg-gray-700"
        >
          <svg
            className="h-2.5 w-2.5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export { ButtonSecondary, ButtonPrimary, ButtonExit, ButtonSetQuality };
