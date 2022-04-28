import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Image } from '@chakra-ui/react';

import PokeLogo from '../images/Pokemon-Logo.png';

const PokeNav: React.FC = () => (
  <Navbar
    fixed='top'
    expand='lg'
    variant='dark'
    bg='light'
    className='poke-nav'
  >
    <Container>
      <Navbar.Brand href='/'><Image
        src={PokeLogo}
        alt=''
        htmlWidth='200px'
        objectFit='cover'
        marginTop='-30px'
        marginBottom='-25px'
      /></Navbar.Brand>
    </Container>
  </Navbar>
);

export default PokeNav;
