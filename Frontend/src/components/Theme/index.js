import React, { useEffect, useState } from 'react'
import './theme.scss'

export default function ThemeLightDark() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // theme light/dark
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <input
      className="switch "
      type="checkbox"
      checked={theme === 'light'}
      onChange={handleThemeChange}
    />
  )
}
