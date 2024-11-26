import React from 'react'
import { useParams } from 'react-router-dom'
import products from '~/components/Products/products'
import PropTypes from 'prop-types'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((item) => item.id === parseInt(id, 10))

  if (!product) {
    return (
      <div className="text-center text-xl font-semibold text-red-600 mt-20">Product not found!</div>
    )
  }

  const originalPrice = parseFloat(product.price)
  const discountPercentage = parseFloat(product.discount)
  const salePrice = originalPrice - (originalPrice * discountPercentage) / 100

  return (
    <div className="product-detail mx-auto max-w-6xl p-6 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Hình ảnh sản phẩm */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-96 w-96 object-cover rounded-lg shadow-md hover:scale-110 transform transition duration-300"
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div className="product-info space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>

          {/* Giá sản phẩm */}
          <div className="prices">
            {product.discount > 0 ? (
              <div className="flex items-center gap-4">
                <span className="text-2xl line-through text-gray-400">
                  ${originalPrice.toFixed(2)}
                </span>
                <span className="text-3xl text-red-500 font-bold">${salePrice.toFixed(2)}</span>
                <span className="text-lg text-green-600 font-medium">
                  Save {discountPercentage}%
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-gray-800">${originalPrice.toFixed(2)}</span>
            )}
          </div>

          {/* Kích thước */}
          <div>
            <span className="text-gray-700 font-medium text-lg">Available Sizes: </span>
            <div className="flex gap-3 mt-3">
              {product.size.map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mô tả chi tiết */}
      <div className="additional-description mt-12 border-t pt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Fast Food?</h2>
        <p className="text-gray-600 leading-relaxed">
          Fast food is a quick and convenient way to enjoy delicious meals on the go. From juicy
          burgers and crispy fries to refreshing beverages, it offers a variety of flavors that
          satisfy cravings instantly. Perfect for busy days or casual gatherings, fast food delivers
          taste and comfort in every bite.
        </p>
      </div>
    </div>
  )
}

ProductDetail.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
