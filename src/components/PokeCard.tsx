import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Box, Image } from '@chakra-ui/react'

import { firstCharUpperCase } from '../utils/firstCharUpperCase';

const PokeCard: React.FC<PropsWithChildren<any>> = ({ name, url, index }) => {
  const pokedex = url.slice(34, -1);

  const property = {
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex}.png`,
    imageAlt: `Pokemon ${firstCharUpperCase(name)}`,
    title: firstCharUpperCase(name),
  };

  return (
    <Link key={ index } to={`/details/${pokedex}`}>
      <Box
        minH='200px'
        minW='200px'
        maxW='200px'
        maxH='200px'
        borderWidth='1px'
        borderRadius='200px'
        overflow='hidden'
        className='pokemon-card'
        display='inline-block'
        margin='10px'
      >
        <Image
          boxSize='120px'
          objectFit='fill'
          src={property.imageUrl}
          alt={property.imageAlt}
          margin='auto'
          marginTop='4px'
        />

        <Box p='6'>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h3'
            fontSize='20px'
            lineHeight='tight'
            textAlign='center'
            marginTop='-28px'
          >
            {property.title}
          </Box>
        </Box>
      </Box>
    </Link >
  );
};

export default PokeCard;
