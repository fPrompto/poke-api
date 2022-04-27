import React from 'react';
import { CircularProgress } from '@chakra-ui/react';

import '../css/Loading.css';

const Loading: React.FC = () => (
  <div className='loading'>
    <CircularProgress
      isIndeterminate
      color='green.300'
      size='150px'
    />
  </div>
);

export default Loading;
