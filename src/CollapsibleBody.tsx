import React, { FC, useContext } from 'react';
import { CollapsibleContext } from './contexts/CollapsibleContext';

const CollapsibleBody: FC = (props) => {
  const { isOpen }: any = useContext(CollapsibleContext);
  const className = ['collapsible-body'];
  if (isOpen) className.push('collapsible-body--is-open');
  return <div className={className.join(' ')}>{props.children}</div>;
};

export default CollapsibleBody;
