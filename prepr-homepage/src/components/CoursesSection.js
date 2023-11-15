import React from 'react'

const CoursesSection = () => {
    // TODO: conditionally add btn-primary class to clicked buttons using useState
  return (
    <div className='container'>
        <div className='text-center'>
            <button className='btn btn-lg btn-primary'>Labs</button>
            <button className='btn btn-lg'>Challenges</button>
            <button className='btn btn-lg'>Resources</button>
            <button className='btn btn-lg'>Projects</button>
        </div>
        <div className='row'>
            <div className="col-2 mx-5 p-10">
                Conditionally rendered Side Menus 
            </div>
            <div className="col-9">
                <div className="d-flex justify-content-between" style={{backgroundColor: ''}}>
                    <form className='d-flex' role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <span>Sort by</span>
                </div>
                <div>Conditionally rendered CourseCards</div>
            </div>
        </div>
    </div>
  )
}

export default CoursesSection