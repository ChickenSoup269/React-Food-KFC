import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Mỗi lần đường dẫn (pathname) thay đổi, cuộn lên đầu trang
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
