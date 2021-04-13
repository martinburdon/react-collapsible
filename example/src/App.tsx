import React from 'react'

import {
  Collapsible,
  CollapsibleHead,
  CollapsibleBody
} from '@mtb/react-collapsible'
import '@mtb/react-collapsible/dist/index.css'

const App = () => {
  return (
    <Collapsible>
      <CollapsibleHead>Toggle me</CollapsibleHead>
      <CollapsibleBody>Some content</CollapsibleBody>
    </Collapsible>
  )
}

export default App
