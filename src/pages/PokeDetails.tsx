import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetch } from '../utils/fetch';

const PokeDetails: React.FC = () => {
  const [data, setData] = useState('');
  const { id } = useParams();

  const loadDetails = async () => {
    const load = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    await setData(load);
  };

  useEffect(() => { loadDetails(); console.log('id details', id) }, []);

  return (
    <>
      <img src="" alt="" />
    </>
  );
};

export default PokeDetails;
