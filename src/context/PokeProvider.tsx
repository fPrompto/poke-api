import React, { PropsWithChildren, useState } from 'react';
import { ProviderI } from '../interfaces/ProviderI';
import PokeContext, { DEFAULT_VALUE } from './PokeContext';

const PokeProvider: React.FC<PropsWithChildren<ProviderI>> = ({ children }) => {
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
