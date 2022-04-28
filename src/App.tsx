import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import PokeNav from './components/PokeNav';

import PokeProvider from './context/PokeProvider';

import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PokeNav />
      <PokeProvider>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              // exact={route.exact}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Switch>
      </PokeProvider>
    </BrowserRouter>
  );
}

export default App;
