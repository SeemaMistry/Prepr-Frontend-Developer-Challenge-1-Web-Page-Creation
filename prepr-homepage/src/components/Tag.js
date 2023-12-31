import React from 'react'

const Tag = ({title, activateDarkMode}) => {
  // apply dark mode styling
  const btnDarkMode = activateDarkMode ? 'btn-outline-light' : 'btn-outline-dark'

  return (
    <button className={`btn mx-3 my-2 ${btnDarkMode}`}>{title}</button>
  )
}

export default Tag