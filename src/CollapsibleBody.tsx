import React, { useContext } from 'react'
import { CollapsibleContext } from './contexts/CollapsibleContext'

export default (props: any) => {
  const { isOpen } = useContext(CollapsibleContext) as any
  const className = ['collapsible-body']
  if (isOpen) className.push('is-open')
  return <div className={className.join(' ')}>{props.children}</div>
}
