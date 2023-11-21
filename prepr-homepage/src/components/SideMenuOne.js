import React from 'react'

const SideMenuOne = ({activateDarkMode}) => {
    const btnHeadingDarkMode = activateDarkMode ? 'btn-success text-dark' : 'btn-primary'
    const btnCategoryDarkMode = activateDarkMode ? 'btn-secondary' : 'btn-light'
    const baseBtnClasses = 'btn btn-lg text-start shadow-lg'
  return (
    <div className='d-grid my-5'>
        <button className={`${baseBtnClasses} ${btnHeadingDarkMode} rounded-bottom-0`}>Labs</button>
        <button className={`${baseBtnClasses} ${btnCategoryDarkMode} rounded-top-0`}>Lab Programs</button>
    </div>
  )
}

export default SideMenuOne