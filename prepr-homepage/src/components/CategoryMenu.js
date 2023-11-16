import React from 'react'

const CategoryMenu = ({selectedCategory, onChange}) => {
    const setCatergoryHandler = (e) => {
        onChange(e.target.id)

    }
  return (
    <div className='d-flex text-center my-3' >
        <button className={`btn flex-fill btn-lg ${selectedCategory === 'labs' ? 'btn-primary' : 'bg-light' }`} id='labs' onClick={setCatergoryHandler}>
            Labs
        </button>
        <button className={`btn flex-fill btn-lg ${selectedCategory === 'challenges' ? 'btn-primary' : 'bg-light' }`} id='challenges' onClick={setCatergoryHandler}>
            Challenges
        </button>
        <button className='btn flex-fill btn-lg bg-light'>
            Resources
        </button>
        <button className={`btn flex-fill btn-lg ${selectedCategory === 'projects' ? 'btn-primary' : 'bg-light' }`} id='projects' onClick={setCatergoryHandler}>
            Projects
        </button>
    </div>
  )
}

export default CategoryMenu