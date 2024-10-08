import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import styles from './header.scss';
import routes from '~/routes/routes.js';
import logoImage2 from '~/assets/images/logo2.png';
import ThemeLightDark from '~/components/Theme';
import { useLanguage } from '~/components/Translate/LanguageContext';
import Translate from '~/components/Translate';
import translations from '~/components/Translate/translations';

const cx = clsx.bind(styles);

export default function Header() {
  const { language } = useLanguage();

  // State to manage background color and fix position based on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { route: routes.home, translation: translations[language].home },
    { route: routes.menuPage, translation: translations[language].menu },
    { route: routes.search, translation: translations[language].search },
    { route: routes.settings, translation: translations[language].contact },
  ];

  return (
    <header
      className={cx(
        'wrapper-header w-full z-20 transition-all duration-500 ease-in-out',
        isScrolled ? 'fixed top-0 start-0 shadow-lg' : 'relative z-10 shadow-lg'
      )}
      style={{
        backgroundColor: isScrolled
          ? 'var(--activeBg)'
          : 'var(--secondary-color)',
        color: isScrolled ? 'var(--activeText)' : 'white', // Text color ch
        transition:
          'background-color 0.5s, padding 0.5s, box-shadow 0.5s, color 0.5s', // Ensure the color transition is smooth
      }}
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
              alt="ZeroChicken Logo"
            />
            <img
              src={logoImage2}
              className="logo-image-glow h-10 rounded-sm"
              alt="ZeroChicken Logo"
            />
          </div>
          <span className="logo-name self-center text-2xl font-semibold whitespace-nowrap">
            ZeroChicken
          </span>
        </a>
        <div className="flex md:order-2 space-x-4 rtl:space-x-reverse items-center">
          <ThemeLightDark />

          <Translate />

          <a href={routes.cart}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="icon-shopping-cart"
            />
          </a>

          {/* button login */}
          <a href={routes.login}>
            <button
              type="button"
              className={cx(
                'btn-login focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center capitalize'
              )}
            >
              {translations[language].login}
            </button>
          </a>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
              'navbar-ul flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'
            )}
          >
            {navItems.map((item) => (
              <li key={item.route}>
                <NavLink
                  to={item.route}
                  className={({ isActive }) =>
                    isActive ? 'nav-li actives' : 'nav-li'
                  }
                >
                  {item.translation}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
