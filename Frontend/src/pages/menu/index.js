import React, { useState } from 'react'
import clsx from 'clsx'
import styles from './menu.scss'
import products from '~/components/Products/products'
import ProductCard from '~/components/Products'
import CategoryButton from '~/components/Button/categoryButton'
import SoftByPrice from '~/components/Dropdown/softByPrice'

const cx = clsx.bind(styles)

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [activeCategory, setActiveCategory] = useState(null)
  const [sortOrder, setSortOrder] = useState('default')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState('Sort by price') // Trạng thái cho tên đã chọn

  // Hàm xử lý khi thay đổi nội dung tìm kiếm
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  // Hàm xử lý khi submit form tìm kiếm
  const handleSearchSubmit = (event) => {
    event.preventDefault()
    filterProducts(searchQuery, activeCategory)
  }

  // Hàm xử lý khi chọn danh mục
  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    filterProducts(searchQuery, category)
  }

  // Hàm lọc sản phẩm
  const filterProducts = (query, category) => {
    const lowercasedQuery = query.toLowerCase()
    const filtered = products.filter((product) => {
      const matchesCategory = !category || product.category === category
      const matchesQuery = product.name.toLowerCase().includes(lowercasedQuery)
      return matchesCategory && matchesQuery
    })

    setFilteredProducts(filtered)

    if (sortOrder !== 'default') {
      sortProducts(filtered)
    }
  }

  // Hàm xử lý sắp xếp sản phẩm
  const handleSortChange = (order) => {
    setSortOrder(order)
    let sortText = ''

    if (order === 'priceAsc') {
      sortText = 'Low to High'
    } else if (order === 'priceDesc') {
      sortText = 'High to Low'
    } else if (order === 'sale') {
      sortText = 'Sort by Sale'
    }

    setSelectedSort(sortText)
    sortProducts(filteredProducts, order)
    setIsDropdownOpen(false) // Đóng dropdown sau khi chọn
  }

  // Hàm sắp xếp sản phẩm
  const sortProducts = (productsToSort, order) => {
    let sortedProducts = [...productsToSort]

    switch (order) {
      case 'priceAsc':
        sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        break
      case 'priceDesc':
        sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        break
      case 'sale':
        // Sắp xếp theo discount (giảm giá) nếu có
        sortedProducts.sort((a, b) => b.discount - a.discount)
        break
      default:
        break
    }

    setFilteredProducts(sortedProducts)
  }

  // Hàm để toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div className={cx('wrapper-menu-page')}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-10 text-center sm:px-16">
          <p className="title-search-menu mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Search Food In ZFC
          </p>

          {/* Form tìm kiếm */}
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

        {/* Các nút chọn danh mục */}
        <div className="flex justify-center">
          <div className="button-container flex space-x-2 mb-1">
            <CategoryButton
              key="All"
              category="All"
              activeCategory={activeCategory}
              onClick={() => handleCategoryClick(null)}
            />
            {Array.from(new Set(products.map((product) => product.category))).map((category) => (
              <CategoryButton
                key={category}
                category={category}
                activeCategory={activeCategory}
                onClick={() => handleCategoryClick(category)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <SoftByPrice selectedSort={selectedSort} onSortChange={handleSortChange} />
        </div>

        {/* Phần hiển thị sản phẩm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-2 mb-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
