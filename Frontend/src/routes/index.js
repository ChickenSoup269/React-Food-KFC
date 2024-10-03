import Home from '~/pages/home';
import Login from '~/pages/login';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
];

export default publicRoutes;
