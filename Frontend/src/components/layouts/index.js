import React from 'react';

import Header from './DefaultLayout/Header';
import Footer from './DefaultLayout/Footer';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="content flex-grow">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
