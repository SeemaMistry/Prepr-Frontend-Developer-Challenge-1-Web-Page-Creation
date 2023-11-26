import React from 'react'

const SideMenuOne = ({activateDarkMode, selectedCategory}) => {
    // apply dark mode styling
    const btnHeadingDarkMode = activateDarkMode ? 'btn-success text-dark' : 'btn-primary'
    const btnCategoryDarkMode = activateDarkMode ? 'btn-secondary' : 'btn-light'

    const baseBtnClasses = 'btn btn-lg text-start shadow-lg'

    // set title and subheading
    const title = selectedCategory === 'labs' ? 'Labs' : 'Challenges'
    const subHeading = selectedCategory === 'labs' ? 'Lab Programs' : 'Challenge Path'
    
  return (
    <div className='d-grid mb-5'>
        <button className={`${baseBtnClasses} ${btnHeadingDarkMode} rounded-bottom-0`}>{title}</button>
        <button className={`${baseBtnClasses} ${btnCategoryDarkMode} rounded-top-0`}>{subHeading}</button>
    </div>
  )
}

export default SideMenuOne