import React from 'react'

import {
  Collapsible,
  CollapsibleHead,
  CollapsibleBody
} from '@mtburdon/react-collapsible'
import '@mtburdon/react-collapsible/dist/index.css'

const App = () => {
  return (
    <Collapsible>
      <CollapsibleHead>Toggle me</CollapsibleHead>
      <CollapsibleBody>Some content</CollapsibleBody>
    </Collapsible>
  )
}

export default App
