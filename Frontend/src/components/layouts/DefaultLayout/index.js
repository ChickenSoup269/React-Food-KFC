import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
