import React, {useState} from 'react'
import CourseCard from './CourseCard'
import FilterSection from './FilterSection'
import CategoryMenu from './CategoryMenu'

const CoursesSection = ({state, filteredCourses, onChange}) => {
    // TODO: conditionally add btn-primary class to clicked buttons using useState
    // TODO: make the filter dropdown menu with the checkboxes

    const setCatergoryHandler = (id) => {
        onChange(id)

    }
    const [isClicked, setIsClicked] = useState(false)
    const onActivate = () => setIsClicked(true)
  
    return (
    <div className='container-xxl'>
       <CategoryMenu onChange={setCatergoryHandler} selectedCategory={state} />
        <div className='row'>
            <div className="col-2 mx-5 p-0">
                Conditionally rendered Side Menus 
                <div className='d-grid my-5'>
                    <button className='btn btn-lg btn-primary text-start rounded-bottom-0 shadow-lg'>Labs</button>
                    <button className='btn btn-lg btn-light text-start rounded-top-0 shadow-lg'>Lab Programs</button>
                </div>

                {/* accordian section starts */}
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                    </div>
                {/* accordian section stops */}
                

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