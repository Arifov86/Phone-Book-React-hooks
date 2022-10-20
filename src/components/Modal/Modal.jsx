import React from 'react'

export default function Modal({children, ...props}) {
  return (
    <div {...props}>
        {children}
    </div>
  )
}
