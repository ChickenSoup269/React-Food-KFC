import React, { useState } from 'react';
import Modal from 'react-modal';

import clsx from 'clsx';
import styles from './products.scss';

const cx = clsx.bind(styles);

// Cấu hình Modal
Modal.setAppElement('#root');

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái mở modal
  const [selectedSize, setSelectedSize] = useState(''); // Trạng thái cho size đã chọn
  const [quantity, setQuantity] = useState(1); // Trạng thái cho số lượng sản phẩ
  const [adjustedPrice, setAdjustedPrice] = useState(product.price); // Giá điều chỉnh theo size

  // tính giá giảm
  const originalPrice = parseFloat(product.price);
  const discountPercentage = parseFloat(product.discount);
  const hasDiscount = discountPercentage > 0;
  const salePrice = originalPrice - (originalPrice * discountPercentage) / 100;

  // Hàm mở modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Hàm xử lý khi chọn size
  const handleSizeChange = (size) => {
    setSelectedSize(size);

    // Chọn giá cơ sở dựa trên có discount hay không
    const basePrice = hasDiscount ? salePrice : originalPrice;

    // Tăng giá theo size
    switch (size) {
      case 'xs':
      case 's':
        setAdjustedPrice(basePrice); // XS và S không thay đổi giá
        break;
      case 'm':
        setAdjustedPrice(basePrice * 1.2); // M tăng giá 1.2 lần
        break;
      case 'l':
        setAdjustedPrice(basePrice * 1.5); // L tăng giá 1.5 lần
        break;
      case 'xl':
        setAdjustedPrice(basePrice * 2); // XL tăng giá 2 lần
        break;
      default:
        setAdjustedPrice(basePrice); // Mặc định là giá gốc nếu size không hợp lệ
    }
  };

  // Hàm xử lý khi thay đổi số lượng
  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  // Hàm tăng số lượng
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Hàm giảm số lượng (giới hạn không nhỏ hơn 1)
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  // Tính tổng giá khi người dùng chọn size và số lượng
  const totalPrice = (adjustedPrice * quantity).toFixed(2);

  return (
    <div className={cx('wrapper-product-card')}>
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

          <button
            className="btn-add-cart w-full mt-4 py-2 px-3 rounded"
            onClick={openModal}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-lg font-bold mb-4">Select Size and Quantity</h2>
        {/* Thêm ảnh và tên sản phẩm vào modal */}
        <div className="flex items-center mb-4">
          <img
            src={product.image} // Hiển thị hình ảnh sản phẩm
            alt={product.name}
            className="h-24 w-24 object-cover mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{product.name}</h3>{' '}
            {/* Hiển thị tên sản phẩm */}
            <p className="text-lg font-medium text-gray-700">
              ${totalPrice}
              {/* Hiển thị tổng giá sau khi tính size và số lượng */}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">Size:</label>
          <div className="flex space-x-2">
            {product.size.map((size, index) => (
              <button
                key={index}
                className={`uppercase px-4 py-2 rounded-full ${
                  selectedSize === size
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-white'
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">
            Quantity:
          </label>

          {/* button - */}
          <button
            type="button"
            onClick={decrementQuantity} // Gọi hàm giảm số lượng
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          {/* input cho số lượng */}
          <input
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
            readOnly // Đặt readonly để người dùng không nhập trực tiếp
          />
          {/* button + */}
          <button
            type="button"
            onClick={incrementQuantity} // Gọi hàm tăng số lượng
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-gray-300 hover:bg-gray-500 transition-all rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button className="px-4 py-2 --primary-color text-white rounded">
            Add to Cart
          </button>
        </div>
      </Modal>
    </div>
  );
}
