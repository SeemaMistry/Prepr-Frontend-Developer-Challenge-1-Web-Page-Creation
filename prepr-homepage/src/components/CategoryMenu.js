import React from 'react'

const CategoryMenu = ({selectedCategory, onChange, activateDarkMode}) => {
    const setCatergoryHandler = (e) => {
        onChange(e.target.id)
    }
    const btnClickedDarkMode = activateDarkMode ? 'btn-success' : 'btn-primary'
    const btnUnclickedDarkMode = activateDarkMode ? 'btn-secondary' : 'btn-light'
    const baseBtnClasses = `btn flex-fill btn-lg shadow-none`

  return (
    <div className='d-flex text-center my-3 shadow' >
        <button className={`${baseBtnClasses} rounded-end-0  ${selectedCategory === 'labs' ? `${btnClickedDarkMode}` : `${btnUnclickedDarkMode}` }`} id='labs' onClick={setCatergoryHandler}>
            Labs
        </button>
        <button  className={`${baseBtnClasses} rounded-0 ${selectedCategory === 'challenges' ? `${btnClickedDarkMode}` : `${btnUnclickedDarkMode}` }`} id='challenges' onClick={setCatergoryHandler}>
            Challenges
        </button>
        <button className={`${baseBtnClasses} rounded-0 ${btnUnclickedDarkMode}`}>
            Resources
        </button>
        <button className={`${baseBtnClasses} rounded-start-0 ${selectedCategory === 'projects' ? `${btnClickedDarkMode}` : `${btnUnclickedDarkMode}` }`} id='projects' onClick={setCatergoryHandler}>
            Projects
        </button>
    </div>
  )
}

export default CategoryMenu