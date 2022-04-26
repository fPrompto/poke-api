import React from "react";
import { Route } from 'react-router-dom';
import { RouteI } from "../interfaces/RouteI";

import Home from '../pages';

const routes: RouteI[] = [
  {
    path: '/',
    name: 'Home',
    element: Home,
    exact: true,
  },
];

export default routes;
