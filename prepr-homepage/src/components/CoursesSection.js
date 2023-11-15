import React from 'react'

const CoursesSection = ({filteredCourses, onChange}) => {
    // TODO: conditionally add btn-primary class to clicked buttons using useState
  
  const setLabCategoryHandler = () => {
    onChange('labs')
  }
  const setChanllengesCategoryHandler = () => {
    onChange('challenges')
  }
  const setProjectsCategoryHandler = () => {
    onChange('projects')
  }
  
    return (
    <div className='container'>
        <div className='text-center'>
            <button className='btn btn-lg btn-primary' onClick={setLabCategoryHandler}>Labs</button>
            <button className='btn btn-lg' onClick={setChanllengesCategoryHandler}>Challenges</button>
            <button className='btn btn-lg'>Resources</button>
            <button className='btn btn-lg' onClick={setProjectsCategoryHandler}>Projects</button>
        </div>
        <div className='row'>
            <div className="col-2 mx-5 p-10">
                Conditionally rendered Side Menus 
            </div>
            <div className="col-9">
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
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                            </ul>
                        </div>

                    </span>
                </div>
                <div>
                    Conditionally rendered CourseCards
                    {}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursesSection