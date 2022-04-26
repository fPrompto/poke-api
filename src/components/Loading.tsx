import React from 'react';
import { CircularProgress } from '@chakra-ui/react'

const Loading: React.FC = () => (
  <CircularProgress
    isIndeterminate
    color='green.300'
    size='150px'
    className='loading'
  />
);

export default Loading;
