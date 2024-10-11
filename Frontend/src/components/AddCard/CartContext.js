import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Lấy dữ liệu từ sessionStorage hoặc khởi tạo mảng rỗng
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = sessionStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // Hàm để thêm sản phẩm vào giỏ hàng
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Lưu giỏ hàng vào sessionStorage mỗi khi cartItems thay đổi
  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Tính tổng giá của giỏ hàng
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.totalPrice * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook để truy cập giỏ hàng từ bất cứ đâu trong ứng dụng
export const useCart = () => useContext(CartContext);
