import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import PokeProvider from './context/PokeProvider';
import routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
