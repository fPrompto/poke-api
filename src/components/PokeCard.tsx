import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { firstCharUpperCase } from '../utils/firstCharUpperCase';

const PokeCard: React.FC<PropsWithChildren<any>> = ({ name, url, index }) => {
  const pokedex = url.slice(34, -1);
  const newName = firstCharUpperCase(name);

  return (
    <div key={index}>
      <Link to={`/details/${pokedex}`}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex}.png`}
          alt={name}
        />
        <span>{newName}</span>
      </Link>
    </div>
  );
};

export default PokeCard;
