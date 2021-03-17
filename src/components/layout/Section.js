import React from 'react'
import classnames from 'classnames'

const BORDER_DEFAULT = "border-t border-b border-gray-500"
const BASE_DEFAULT = ""

const Section = ({ addClassnames, children }) => {
  return (
    <div className={classnames(BORDER_DEFAULT, BASE_DEFAULT, addClassnames)}>
      { children }
    </div>
  )
}

export default Section