import Home from '~/pages/home';
import Login from '~/pages/login';
import Register from '~/pages/register';
import RecoveryPassword from '~/pages/recovery-pass';

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
];

export default publicRoutes;
