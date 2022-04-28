import React, { PropsWithChildren } from 'react';
import { CircularProgress } from '@chakra-ui/react';

import '../css/Loading.css';

const Loading: React.FC<PropsWithChildren<any>> = ({ size }) => (
  <div className='loading'>
    <CircularProgress
      isIndeterminate
      color='green.300'
      size={size}
    />
  </div>
);

export default Loading;
