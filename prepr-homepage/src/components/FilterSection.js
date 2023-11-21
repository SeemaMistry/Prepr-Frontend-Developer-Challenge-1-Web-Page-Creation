import React from 'react'

const FilterSection = ({activateDarkMode}) => {
    // apply dark mode styling
    const btnDarkMode = activateDarkMode ? 'btn-light' : 'bg-body-secondary'
    const bgColor = activateDarkMode ? 'bg-body-secondary' : 'bg-body-secondary'
    const dropDownLabel = activateDarkMode ? 'text-white' : 'text-dark'
    
  return (
    <div className={`d-flex justify-content-between p-4 rounded shadow ${bgColor}`} >
        <form className='d-flex' role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="button">Search</button>
        </form>
        <span className={dropDownLabel}>Sort by
            <div className="m-2 btn-group">
                <button className={`btn dropdown-toggle ${btnDarkMode}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Relevance
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" >Recently Added</button></li>
                    <li><button className="dropdown-item" >Most Popular</button></li>

                </ul>
            </div>
        </span>
    </div>
  )
}

export default FilterSection