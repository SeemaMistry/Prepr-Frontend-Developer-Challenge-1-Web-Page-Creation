import React, {useState} from 'react'
import CourseCard from './CourseCard'
import FilterSection from './FilterSection'

const CoursesSection = ({filteredCourses, onChange}) => {
    // TODO: conditionally add btn-primary class to clicked buttons using useState
  
    const [selectedCategory, setSelectedCategory] = useState('labs')

    const setCatergoryHandler = (e) => {
        onChange(e.target.id)
        setSelectedCategory(e.target.id)
    }
  
    return (
    <div className='container'>
        <div className='d-flex text-center my-3' >
            <button className={`btn flex-fill btn-lg ${selectedCategory === 'labs' ? 'btn-primary' : 'bg-light' }`} id='labs' onClick={setCatergoryHandler}>Labs</button>
            <button className={`btn flex-fill btn-lg ${selectedCategory === 'challenges' ? 'btn-primary' : 'bg-light' }`} id='challenges' onClick={setCatergoryHandler}>Challenges</button>
            <button className='btn flex-fill btn-lg bg-light'>Resources</button>
            <button className={`btn flex-fill btn-lg ${selectedCategory === 'projects' ? 'btn-primary' : 'bg-light' }`} id='projects' onClick={setCatergoryHandler}>Projects</button>
        </div>
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