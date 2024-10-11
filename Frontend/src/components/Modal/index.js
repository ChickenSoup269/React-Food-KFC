import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Modal from 'react-modal';
import clsx from 'clsx';

import styles from './modal.scss';
import {
  ButtonSecondary,
  ButtonExit,
  ButtonSetQuality,
} from '~/components/Button';

// Cấu hình Modal
Modal.setAppElement('#root');
const cx = clsx.bind(styles);

function ModalAddProduct({ product, isModalOpen, closeModal }) {
  // Quản lý trạng thái size, số lượng và giá
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [adjustedPrice, setAdjustedPrice] = useState(0);

  // Hàm xử lý khi người dùng chọn size
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    let basePrice = product.discount
      ? product.price - (product.price * product.discount) / 100
      : product.price;

    switch (size) {
      case 'xs':
      case 's':
        setAdjustedPrice(basePrice);
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
        setAdjustedPrice(basePrice); // Giá gốc nếu không hợp lệ
    }
  };

  // Hàm xử lý khi nhấn nút "Add to Cart"
  const handleAddToCart = () => {
    if (!selectedSize) {
      notifyInfo('Please select a size before adding to cart!');
      return;
    } else {
      notifySuccess('Add product success');

      // Logic để thêm sản phẩm vào giỏ hàng ở đây
      console.log('Product added to cart:', {
        product: product.name,
        size: selectedSize,
        quantity,
        totalPrice,
      });
    }
  };

  // Tổng giá sau khi tính theo size và số lượng
  const totalPrice = adjustedPrice * quantity;

  return (
    <div className={cx('wrapper-modal-add-product')}>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        closeTimeoutMS={300}
      >
        <h2 className="text-lg font-bold mb-4">Select Size and Quantity</h2>
        <div className="flex items-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-24 w-24 object-cover mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg font-medium text-gray-700">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">Size:</label>
          <div className="flex space-x-2">
            {product.size.map((size, index) => (
              <button
                key={index}
                style={{
                  backgroundColor:
                    selectedSize === size
                      ? 'var(--primary-color)'
                      : 'var(--thirdary-color)',
                  color: selectedSize === size ? 'black' : 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                }}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <ButtonSetQuality quantity={quantity} setQuantity={setQuantity} />

        <div className="flex justify-between mt-6">
          <ButtonExit onClick={closeModal} text="Cancel" />
          <ButtonSecondary onClick={handleAddToCart} text="Add to Cart" />
        </div>
      </Modal>
    </div>
  );
}

// alert info
const notifyInfo = (message) => {
  toast.info(message, {
    autoClose: 3000,
    className: 'toast-info',
  });
};

const notifySuccess = (message) => {
  toast.success(message, {
    autoClose: 3000,
    className: 'toast-success',
  });
};

const notifyWarning = (message) => {
  toast.warning(message, {
    autoClose: 3000,
    className: 'toast-warning',
  });
};

export { ModalAddProduct, notifyInfo, notifySuccess, notifyWarning };
