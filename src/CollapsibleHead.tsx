import React, { useContext } from 'react';
import { CollapsibleContext } from './contexts/CollapsibleContext';

export default (props: any) => {
  const { toggleCollapsible } = useContext(CollapsibleContext) as any;

  return (
    <div onClick={toggleCollapsible} className='collapsible-head'>
      {props.children}
    </div>
  );
};
