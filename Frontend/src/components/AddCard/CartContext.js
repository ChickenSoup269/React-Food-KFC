import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import thư viện js-cookie

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Lấy dữ liệu từ cookie hoặc khởi tạo mảng rỗng nếu không có dữ liệu
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCartItems = Cookies.get('cartItems'); // Lấy dữ liệu từ cookie
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    } catch (error) {
      console.error('Failed to parse cart items from cookies', error);
      return [];
    }
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

  // Lưu giỏ hàng vào cookie mỗi khi cartItems thay đổi
  useEffect(() => {
    try {
      // Lưu dữ liệu vào cookie, với thời gian sống của cookie là 7 ngày
      Cookies.set('cartItems', JSON.stringify(cartItems), { expires: 7 });
    } catch (error) {
      console.error('Failed to save cart items to cookies', error);
    }
  }, [cartItems]);

  // Tính tổng giá của giỏ hàng
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.totalPrice * item.quantity,
      0
    );
  };

  // Hàm cập nhật số lượng sản phẩm trong giỏ hàng
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Tính tổng tiền card bên phải [bug]
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.totalPrice * item.quantity;
    }, 0);
  };

  const calculateSavings = () => {
    return cartItems.reduce((savings, item) => {
      return savings + (item.originalPrice - item.price) * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalPrice,
        updateQuantity,
        calculateTotalPrice,
        calculateSavings,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook để truy cập giỏ hàng từ bất cứ đâu trong ứng dụng
export const useCart = () => useContext(CartContext);
