import React, { useEffect, useState } from 'react';

import { fetch } from '../utils/fetch';

import PokeCard from '../components/PokeCard';

const Home: React.FC = () => {
  const [data, setData] = useState<any>({
    results: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      }
    ]
  });

  const loadPokemons = async () => {
    const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9999');
    await setData(pokeData);
  };

  useEffect(() => { loadPokemons() }, []);

  return (
    <>
      {data.results.map((poke: any, i: number) => (
        <PokeCard
        name={ poke.name }
        url={ poke.url }
        index={ i }
        />
      ))}
    </>
  );
};

export default Home;
