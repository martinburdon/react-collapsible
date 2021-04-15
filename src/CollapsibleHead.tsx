import React, { FC, useContext } from 'react';
import { CollapsibleContext } from './contexts/CollapsibleContext';

const CollapsibleHead: FC = (props) => {
  const { toggleCollapsible }: any = useContext(CollapsibleContext);

  return (
    <div onClick={toggleCollapsible} className='collapsible-head'>
      {props.children}
    </div>
  );
};

export default CollapsibleHead;
