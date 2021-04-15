import React, { createContext, FC, useState } from 'react';

export const CollapsibleContext = createContext<object>({});

const CollapsibleContextProvider: FC = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCollapsible = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <CollapsibleContext.Provider value={{ isOpen, toggleCollapsible }}>
      {props.children}
    </CollapsibleContext.Provider>
  );
};

export default CollapsibleContextProvider;
