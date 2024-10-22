import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Create a context for the language
const LanguageContext = createContext()

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en'
    setLanguage(savedLanguage)
  }, [])

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  return useContext(LanguageContext)
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
