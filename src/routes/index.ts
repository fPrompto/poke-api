import { RouteI } from "../interfaces/RouteI";

import { Home, PokeDetails } from '../pages';

const routes: RouteI[] = [
  {
    path: '/',
    name: 'Home',
    element: Home,
    exact: true,
  },
  {
    path: '/details/:id',
    name: 'Pokemon Details',
    element: PokeDetails,
    exact: true,
  }
];

export default routes;
