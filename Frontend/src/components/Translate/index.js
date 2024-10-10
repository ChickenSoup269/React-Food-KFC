import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

import { useLanguage } from './LanguageContext';
import styles from './translate.scss';

const cx = clsx.bind(styles);

export default function Translate() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { language, handleLanguageChange } = useLanguage();
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

  return (
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
            className={`language-chossen block px-4 py-2 text-sm cursor-pointer ${language === 'en' ? 'font-bold text-primary' : ''}`}
            role="menuitem"
            tabIndex="0"
            onClick={() => {
              handleLanguageChange('en');
              toggleMenu(); // Close dropdown
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleLanguageChange('en');
                toggleMenu(); // Close dropdown
              }
            }}
          >
            English
          </p>
          <p
            className={`language-chossen block px-4 py-2 text-sm cursor-pointer ${language === 'vi' ? 'font-bold text-primary' : ''}`}
            role="menuitem"
            tabIndex="0"
            onClick={() => {
              handleLanguageChange('vi');
              toggleMenu(); // Close dropdown
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleLanguageChange('vi');
                toggleMenu(); // Close dropdown
              }
            }}
          >
            Tiếng Việt
          </p>
        </div>
      </div>
    </div>
  );
}
