import React, {useState} from 'react'
import CourseCard from './CourseCard'
import FilterSection from './FilterSection'
import CategoryMenu from './CategoryMenu'

const CoursesSection = ({filteredCourses, onChange}) => {
    // TODO: conditionally add btn-primary class to clicked buttons using useState
  
    const [selectedCategory, setSelectedCategory] = useState('labs')

    const setCatergoryHandler = (id) => {
        onChange(id)
        setSelectedCategory(id)
    }
  
    return (
    <div className='container-xxl'>
       <CategoryMenu onChange={setCatergoryHandler} selectedCategory={selectedCategory} />
        <div className='row'>
            <div className="col-2 mx-5 p-10">
                Conditionally rendered Side Menus 
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