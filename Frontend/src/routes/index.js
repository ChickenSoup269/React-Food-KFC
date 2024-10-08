import Home from '~/pages/home';
import Login from '~/pages/login';
import Register from '~/pages/register';
import RecoveryPassword from '~/pages/recovery-pass';
import SearchPage from '../pages/search';

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
];

export default publicRoutes;
