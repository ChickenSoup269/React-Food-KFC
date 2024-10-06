import React, { useState, useRef, useEffect } from 'react';

import clsx from 'clsx';
import styles from './header.scss';
import routes from '~/routes/routes.js';
import logoImage2 from '~/assets/images/logo2.png';
import ThemeLightDark from '~/components/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAmericas,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const cx = clsx.bind(styles);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown menu

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const [language, setLanguage] = useState('en');

  // On component mount, check for saved language in localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  // Handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Save the language to localStorage
  };

  // Translations
  const translations = {
    en: {
      home: 'Home',
      menu: 'Menu',
      search: 'Search',
      contact: 'Contact',
      login: 'login',
    },
    vi: {
      home: 'Trang chủ',
      menu: 'Menu',
      search: 'Tìm kiếm',
      contact: 'Liên hệ',
      login: 'Đăng nhập',
    },
  };

  return (
    <header
      className={cx(
        'wrapper-header fixed w-full z-20 top-0 start-0 border-b dark:border-gray-600'
      )}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a
          href={routes.home}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <div className={cx('wrapper-logo')}>
            <img
              src={logoImage2}
              className={cx('logo-image h-10 rounded-sm')}
              alt="ZeroChiken Logo"
            />
            <img
              src={logoImage2}
              className="logo-image-glow h-10 rounded-sm"
              alt="ZeroChiken Logo"
            />
          </div>
          <span className="logo-name self-center text-2xl font-semibold whitespace-nowrap ">
            ZeroChicken
          </span>
        </a>
        <div className="flex md:order-2 space-x-4 rtl:space-x-reverse items-center">
          <ThemeLightDark />

          <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
              <FontAwesomeIcon
                icon={faEarthAmericas}
                className="icon-button-language"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleMenu}
              />
            </div>

            {/* Dropdown menu with animation */}
            <div
              className={`dropdown-menu-language absolute right-0 z-10 mt-1 w-28 origin-top-right rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
          dropdown ${isOpen ? 'dropdown-open' : ''}`} // Add class based on isOpen
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <p
                  className={`language-chossen block px-4 py-2 text-sm text-gray-700 cursor-pointer ${language === 'en' ? 'font-bold text-primary' : ''}`}
                  role="menuitem"
                  tabIndex="0"
                  onClick={() => {
                    handleLanguageChange('en');
                    toggleMenu(); // đóng dropdown
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleLanguageChange('en');
                      // thay đổi ngôn ngữ
                    }
                  }}
                >
                  English
                </p>
                <p
                  className={`language-chossen block px-4 py-2 text-sm text-gray-700 cursor-pointer ${language === 'vi' ? 'font-bold text-primary' : ''}`}
                  role="menuitem"
                  tabIndex="0"
                  onClick={() => {
                    handleLanguageChange('vi');
                    toggleMenu();
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleLanguageChange('vi');
                    }
                  }}
                >
                  Tiếng Việt
                </p>
              </div>
            </div>
          </div>

          <FontAwesomeIcon
            icon={faShoppingCart}
            className="icon-shopping-cart"
          />

          {/* button login */}
          <button
            type="button"
            className={cx(
              'btn-login focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center'
            )}
          >
            <a href={routes.login}> {translations[language].login}</a>
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
                {translations[language].home}
              </a>
            </li>
            <li>
              <a href={routes.home} className="nav-li ">
                {translations[language].menu}
              </a>
            </li>
            <li>
              <a href={routes.home} className="nav-li ">
                {translations[language].search}
              </a>
            </li>
            <li>
              <a href={routes.home} className="nav-li ">
                {translations[language].contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
