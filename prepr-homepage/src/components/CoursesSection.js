import React from 'react'
import CourseCard from './CourseCard'
import FilterSection from './FilterSection'
import CategoryMenu from './CategoryMenu'
import SideMenuOne from './SideMenuOne'
import SideMenuTwo from './SideMenuTwo'

const CoursesSection = ({state, filteredCourses, onChange}) => {
    // TODO: conditionally add btn-primary class to clicked buttons using useState
    // TODO: make the filter dropdown menu with the checkboxes

    const setCatergoryHandler = (id) => onChange(id)
  
    return (
    <div className='container-xxl'>
       <CategoryMenu onChange={setCatergoryHandler} selectedCategory={state} />
        <div className='row'>
            <div className="col-2 mx-5 p-0">
                Conditionally rendered Side Menus 
                <SideMenuOne />
                <SideMenuTwo />
            </div>
            <div className="col-9">
                <FilterSection />
                <div>
                    Conditionally rendered CourseCards
                    {filteredCourses.map(item => <CourseCard key={item.id} course={item}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursesSection