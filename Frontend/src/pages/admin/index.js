import React, { useState } from 'react'

const initialProducts = [
  {
    id: 19,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Chicken/Preview_Image/kfc_thumb_chicken_hotwings.png',
    name: 'Hot Wings®',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Chicken',
    size: ['m', 'l'],
    discount: 8,
  },
]

export default function Admin() {
  const [products, setProducts] = useState(initialProducts)
  const [editingProduct, setEditingProduct] = useState(null) // Trạng thái chỉnh sửa

  const [newProduct, setNewProduct] = useState({
    id: '',
    image: '',
    name: '',
    description: '',
    price: '',
    category: '',
    size: [],
    discount: '',
  })

  const addProduct = () => {
    if (newProduct.name.trim()) {
      setProducts([...products, { ...newProduct, id: Date.now() }])
      setNewProduct({
        id: '',
        image: '',
        name: '',
        description: '',
        price: '',
        category: '',
        size: [],
        discount: '',
      })
    }
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const saveEdit = () => {
    setProducts(
      products.map((product) => (product.id === editingProduct.id ? editingProduct : product))
    )
    setEditingProduct(null) // Thoát chế độ chỉnh sửa
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Admin Panel - Products</h1>
      {/* Form thêm sản phẩm */}
      <div className="mb-6 p-4 border rounded-lg bg-gray-50 shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded-md"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="p-2 border rounded-md"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            className="p-2 border rounded-md"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            className="p-2 border rounded-md"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            className="p-2 border rounded-md"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          />
          <input
            type="text"
            placeholder="Sizes (comma separated)"
            className="p-2 border rounded-md"
            value={newProduct.size}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                size: e.target.value.split(',').map((size) => size.trim()),
              })
            }
          />
          <input
            type="number"
            placeholder="Discount"
            className="p-2 border rounded-md"
            value={newProduct.discount}
            onChange={(e) => setNewProduct({ ...newProduct, discount: e.target.value })}
          />
        </div>
        <button
          onClick={addProduct}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
      {/* Danh sách sản phẩm */}
      <div className="p-4 border rounded-lg bg-gray-50 shadow">
        <h2 className="text-xl font-semibold mb-4">Product List</h2>
        <div className="grid grid-cols-1 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 p-4 border rounded-md bg-white shadow"
            >
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
              {editingProduct && editingProduct.id === product.id ? (
                <div className="flex-1 grid gap-2">
                  <input
                    type="text"
                    className="p-2 border rounded-md"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  />
                  <input
                    type="text"
                    className="p-2 border rounded-md"
                    value={editingProduct.image}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, image: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="p-2 border rounded-md"
                    value={editingProduct.description}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, description: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    className="p-2 border rounded-md"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, price: e.target.value })
                    }
                  />
                </div>
              ) : (
                <div className="flex-1">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <p>Category: {product.category}</p>
                  <p>Sizes: {product.size.join(', ')}</p>
                  <p>Discount: {product.discount}%</p>
                </div>
              )}
              <div className="flex gap-2">
                {editingProduct && editingProduct.id === product.id ? (
                  <button
                    onClick={saveEdit}
                    className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setEditingProduct(product)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
