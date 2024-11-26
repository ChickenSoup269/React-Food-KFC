import Home from '~/pages/Home'
import Login from '~/pages/login'
import Register from '~/pages/register'
import RecoveryPassword from '~/pages/recovery-pass'
import SearchPage from '~/pages/search'
import MenuPage from '~/pages/menu'
import Cart from '~/pages/cart'
import Admin from '~/pages/admin'

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/recoveryPass',
    component: RecoveryPassword,
  },
  {
    path: '/search',
    component: SearchPage,
  },
  {
    path: '/menu',
    component: MenuPage,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/admin',
    component: Admin,
  },
]

export default publicRoutes
