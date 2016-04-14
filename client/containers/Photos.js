import React from 'react';

import { PhotoList } from '../components/PhotoList';

export function Photos(props) {
  console.log('photo props', props);
  return (
    <div>
      <h3> Photos container </h3>
      <Photo List test={'hi'} />
    </div>
  )
}
