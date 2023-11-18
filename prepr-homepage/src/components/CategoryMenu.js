import React from 'react'

const CategoryMenu = ({selectedCategory, onChange}) => {
    const setCatergoryHandler = (e) => {
        onChange(e.target.id)
    }

    const baseBtnClasses = 'btn flex-fill btn-lg shadow-none'

  return (
    <div className='d-flex text-center my-3 shadow' >
        <button className={`${baseBtnClasses} rounded-end-0  ${selectedCategory === 'labs' ? 'btn-primary' : 'bg-light' }`} id='labs' onClick={setCatergoryHandler}>
            Labs
        </button>
        <button  className={`${baseBtnClasses} rounded-0 ${selectedCategory === 'challenges' ? 'btn-primary' : 'bg-light' }`} id='challenges' onClick={setCatergoryHandler}>
            Challenges
        </button>
        <button className={`${baseBtnClasses} rounded-0 bg-light`}>
            Resources
        </button>
        <button className={`${baseBtnClasses} rounded-start-0 ${selectedCategory === 'projects' ? 'btn-primary' : 'bg-light' }`} id='projects' onClick={setCatergoryHandler}>
            Projects
        </button>
    </div>
  )
}

export default CategoryMenu