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
                            DURATION
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            {/* checkboxes start */}
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                            {/* checkboxes end */}
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            LEVEL
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            ORGANIZATIONS
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            SKILLS
                        </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <input placeholder='Search skill' />
                            </div>
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