import React from 'react'
import CollapsibleContextProvider from './contexts/CollapsibleContext'

export default (props: any) => {
  return (
    <CollapsibleContextProvider>
      <div className='collapsible-container'>{props.children}</div>
    </CollapsibleContextProvider>
  )
}
