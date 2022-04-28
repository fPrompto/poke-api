import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetch } from '../utils/fetch';

import PokeCard from '../components/PokeCard';
import Loading from '../components/Loading';

import '../css/Home.css';

const Home: React.FC = () => {
  const [data, setData] = useState<Array<object>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [dataLength, setDataLength] = useState<number>(1);

  const loadPokemons = async () => {
    setIsLoading(true);
    const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10');
    const getDataLength = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100000000');
    await setData(pokeData.results);
    setIsLoading(false);
    setDataLength(getDataLength.results.length);
  };

  const loadMorePokemons = async () => {
    const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${data.length}&limit=10`);

    const newData = data.concat(pokeData.results);

    await setData(newData);
  };

  useEffect(() => {
    if (dataLength === data.length) {
      setHasMore(false);
    }
  }, [data]);

  useEffect(() => { loadPokemons() }, []);

  return isLoading ? <Loading size='150px' /> : (
    <InfiniteScroll
      dataLength={data.length} //This is important field to render the next data
      next={loadMorePokemons}
      hasMore={hasMore}
      loader={<h4>Carregando...</h4>}
      endMessage={
        <div>
          <p style={{ textAlign: 'center' }}>
            <b>Você chegou ao fim 😄😄😄</b>
          </p>
        </div>
      }
      // below props only if you need pull down functionality
      // refreshFunction={this.refresh}
      // pullDownToRefresh
      // pullDownToRefreshThreshold={50}
      // pullDownToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      // }
      // releaseToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      // }
      className='pokemon-list'
    >
      {data.map((poke: any, i: number) => (
        <PokeCard
          name={poke.name}
          url={poke.url}
          index={i}
        />
      ))}
    </InfiniteScroll>
  );
};

export default Home;
