import React, { useState } from 'react';
import PokeContext, { DEFAULT_VALUE } from './PokeContext';

const PokeProvider: React.FC = ({ children }: any) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  const exportState = {
    state,
    setState,
  };

  return (
    <PokeContext.Provider
      value={exportState}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
