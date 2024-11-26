import React, { useState, useEffect } from 'react'

const Admin = () => {
  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)
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

  // Fetch
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  // Create
  const addProduct = async () => {
    if (newProduct.name.trim()) {
      try {
        const response = await fetch('http://localhost:5000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        })
        const addedProduct = await response.json()
        if (response.ok) {
          setProducts([...products, addedProduct])
        } else {
          alert(addedProduct.error)
        }
      } catch (error) {
        console.error('Error adding product:', error)
      }
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

  // Update
  const saveEdit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/products/${editingProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingProduct),
      })
      const updatedProduct = await response.json()
      if (response.ok) {
        setProducts(
          products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
        )
        setEditingProduct(null)
      } else {
        alert(updatedProduct.error)
      }
    } catch (error) {
      console.error('Error saving product:', error)
    }
  }

  // Delete
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        setProducts(products.filter((product) => product.id !== id))
      } else {
        const data = await response.json()
        alert(data.error)
      }
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Admin Panel - Products</h1>

      {/* Form Thêm Sản Phẩm */}
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
                  <input
                    type="text"
                    className="p-2 border rounded-md"
                    value={editingProduct.category}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, category: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="p-2 border rounded-md"
                    value={editingProduct.size.join(', ')}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        size: e.target.value.split(',').map((size) => size.trim()),
                      })
                    }
                  />
                  <input
                    type="number"
                    className="p-2 border rounded-md"
                    value={editingProduct.discount}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, discount: e.target.value })
                    }
                  />
                  <button
                    onClick={saveEdit}
                    className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex-1">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <p>Discount: {product.discount}%</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admin
