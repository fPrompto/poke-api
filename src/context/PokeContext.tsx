import React, { createContext } from 'react';

type PokeType = {
  pokeData: string;
};

type PropsPokeContext = {
  state: PokeType;
  setState: React.Dispatch<React.SetStateAction<PokeType>>;
};

const DEFAULT_VALUE = {
  state: {
    pokeData: 'teste',
  },
  setState: () => { },
};

const PokeContext = createContext<PropsPokeContext>(DEFAULT_VALUE);

export { DEFAULT_VALUE };
export default PokeContext;
