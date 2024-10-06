import React from 'react';

import clsx from 'clsx';
import styles from './header.scss';
import routes from '~/routes/routes.js';
import logoImage2 from '~/assets/images/logo2.png';
import ThemeLightDark from '~/components/Theme';

const cx = clsx.bind(styles);

export default function Header() {
  return (
    <header
      className={cx(
        'wrapper-header fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'
      )}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            // src="https://logos-world.net/wp-content/uploads/2023/07/McDonalds-Logo.png"
            src={logoImage2}
            className="h-10 rounded-sm"
            alt="ZeroChiken Logo"
          />
          <span className="logo-name self-center text-2xl font-semibold whitespace-nowrap ">
            ZeroChicken
          </span>
        </a>
        <div className="flex md:order-2 space-x-4 rtl:space-x-reverse items-center">
          <ThemeLightDark />

          {/* button login */}
          <button
            type="button"
            className={cx(
              'btn-login focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center'
            )}
          >
            <a href={routes.login}>Login</a>
          </button>

          {/* bar menu moblie */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className={cx(
              'navbar-ul flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  '
            )}
          >
            <li>
              <a href={routes.home} className="nav-li actives">
                Home
              </a>
            </li>
            <li>
              <a href={routes.home} className="nav-li ">
                Menu
              </a>
            </li>
            <li>
              <a href={routes.home} className="nav-li  ">
                Search
              </a>
            </li>
            <li>
              <a href={routes.home} className="nav-li  ">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
