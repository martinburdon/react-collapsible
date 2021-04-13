import React, { createContext, useState } from 'react'

export const CollapsibleContext = createContext<object>({})

const CollapsibleContextProvider = (props: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapsible = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <CollapsibleContext.Provider value={{ isOpen, toggleCollapsible }}>
      {props.children}
    </CollapsibleContext.Provider>
  )
}

export default CollapsibleContextProvider
