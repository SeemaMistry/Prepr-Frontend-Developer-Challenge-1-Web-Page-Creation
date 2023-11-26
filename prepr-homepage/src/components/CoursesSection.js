import React from 'react'
import CourseCard from './CourseCard'
import FilterSection from './FilterSection'
import CategoryMenu from './CategoryMenu'
import SideMenuOne from './SideMenuOne'
import SideMenuTwo from './SideMenuTwo'

const CoursesSection = ({state, filteredCourses, onChange, activateDarkMode}) => {
    const setCatergoryHandler = (id) => onChange(id)

    return (
    // <div className='container-xxl'>
    //    <CategoryMenu onChange={setCatergoryHandler} selectedCategory={state} activateDarkMode={activateDarkMode}/>
    //     <div className='row'>
    //         <div className="col-2 mx-5 p-0">
    //             <SideMenuOne activateDarkMode={activateDarkMode}/>
    //             <SideMenuTwo activateDarkMode={activateDarkMode}/>
    //         </div>
    //         <div className="col-9">
    //             <FilterSection activateDarkMode={activateDarkMode}/>
    //             <div className='my-3'>
    //                 {filteredCourses.map(item => <CourseCard key={item.id} course={item} activateDarkMode={activateDarkMode}/>)}
    //             </div>
    //         </div>
    //     </div>
    // </div>
    
    <div className='container-xxl'>
    <CategoryMenu onChange={setCatergoryHandler} selectedCategory={state} activateDarkMode={activateDarkMode}/>
     <div className='row'>
         <div className={`col-md-2  mx-0 my-0 p-0`}>
             <SideMenuOne activateDarkMode={activateDarkMode}/>
             <SideMenuTwo activateDarkMode={activateDarkMode}/>
         </div>
         <div className={`col-md-10 `}>
             <FilterSection activateDarkMode={activateDarkMode}/>
             <div className='my-3'>
                 {filteredCourses.map(item => <CourseCard key={item.id} course={item} activateDarkMode={activateDarkMode}/>)}
             </div>
         </div>
     </div>
 </div>
  )
}

export default CoursesSection