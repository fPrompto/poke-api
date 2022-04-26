import React from 'react';
import PokeProvider from './context/PokeProvider';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <PokeProvider>
      <Home />
    </PokeProvider>
  );
}

export default App;
