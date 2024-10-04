import React from 'react';

import Header from './DefaultLayout/Header';
import Footer from './DefaultLayout/Footer';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container flex flex-col min-h-screen">
        <div className="content flex-grow">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
