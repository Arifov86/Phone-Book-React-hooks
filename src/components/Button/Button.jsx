import React from 'react'
import './Button.scss'

export default function Button({children, ...props}) {
  return (
      <button {...props} type="button">
          {children}
      </button>
  )
}


