import React from 'react'

const FilterSection = () => {
  return (
    <div className="d-flex justify-content-between p-4 rounded shadow" style={{backgroundColor: 'lightgrey'}}>
        <form className='d-flex' role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="button">Search</button>
        </form>
        <span>Sort by
            <div className="m-2 btn-group">
                <button className=" btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Relevance
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" >Menu item</button></li>
                    <li><button className="dropdown-item" >Menu item</button></li>
                    <li><button className="dropdown-item" >Menu item</button></li>
                </ul>
            </div>
        </span>
    </div>
  )
}

export default FilterSection