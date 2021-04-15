import React, { FC } from 'react';
import CollapsibleContextProvider from './contexts/CollapsibleContext';

const Collapsible: FC = (props) => {
  return (
    <CollapsibleContextProvider>
      <div className='collapsible-container'>{props.children}</div>
    </CollapsibleContextProvider>
  );
};

export default Collapsible;
