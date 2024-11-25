import React from 'react'
import PropTypes from 'prop-types'

export default function CategoryButton({ category, onClick, activeCategory }) {
  return (
    <button
      onClick={onClick} // nếu không cần onClick thì có thể không truyền
      className={`btn-category text-white py-2 px-4 rounded-lg shadow-lg ${
        activeCategory === category ? 'bg-[var(--thirdary-color)]' : 'bg-[var(--secondary-color)]'
      }`}
    >
      {category}
    </button>
  )
}

// propTypes
CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  activeCategory: PropTypes.string.isRequired,
}

// Default props in case onClick is not provided
CategoryButton.defaultProps = {
  onClick: null,
}
