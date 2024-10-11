import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import publicRoutes from '~/routes';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import ScrollToTop from '~/components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}
