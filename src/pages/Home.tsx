import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

  const fetch = async (url: string) => {
    const response = await axios({
      method: 'GET',
      url,
    });

    return response.data;
  };

  const loadPokemons = async () => {
    const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9999');
    await setData(pokeData);
  };

  useEffect(() => { loadPokemons() }, []);

  return (
    <>
      {data.results.map((poke: any, i: number) => {
        const pokedex = poke.url.slice(34, -1);
        return (
          <div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex}.png`}
              alt={poke.name}
            />
            <span key={i}>{poke.name}</span>
          </div>
        );
      })}
    </>
  );
};

export default Home;
