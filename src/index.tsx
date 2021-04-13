// import * as React from 'react'
// import styles from './styles.module.css'

// interface Props {
//   text: string
// }

// export const ExampleComponent = ({ text }: Props) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }

import Collapsible from './Collapsible'
import CollapsibleHead from './CollapsibleHead'
import CollapsibleBody from './CollapsibleBody'

// export Collapsible and CollapsibleHeader as named exports
export { Collapsible, CollapsibleHead, CollapsibleBody }

// alternative, more concise syntax for named exports
// export { default as Collapsible } from './Collapsible'

// you can optionally also set a default export for your module
export default { Collapsible, CollapsibleHead, CollapsibleBody }
