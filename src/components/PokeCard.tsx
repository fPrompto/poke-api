import React, { PropsWithChildren } from 'react';

const PokeCard: React.FC<PropsWithChildren<any>> = ({ name, url, index }) => {
  const pokedex = url.slice(34, -1);
  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex}.png`}
        alt={name}
      />
      <span key={index}>{name}</span>
    </div>
  );
};

export default PokeCard;
