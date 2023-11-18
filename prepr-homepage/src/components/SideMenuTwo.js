import React from 'react'
import Checkbox from './Checkbox'

const SideMenuTwo = () => {
  return (
    <div class="accordion accordion-flush shadow" id="accordionFlushExample">
        <div className='accordian-header bg-white d-flex justify-content-between'>
            <h2 className='my-2 mx-2'>Filters</h2>
            <a className='text-red mx-2 my-2' href='#'>Clear All</a>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button shadow-none bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                DURATION
            </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <Checkbox label={'5 hours'}/>
                    <Checkbox label={'4 hours'}/>
                    <Checkbox label={'3 hours'}/>
                    <Checkbox label={'2 hours'}/>
                    <Checkbox label={'1 hour'}/>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button shadow-none bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                LEVEL
            </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <Checkbox label={'Beginner'}/>
                    <Checkbox label={'Intermediate'}/>
                    <Checkbox label={'Advanced'}/>
                    <Checkbox label={'Mixed'}/>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button shadow-none bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                ORGANIZATIONS
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <div class="form-check">
                        <Checkbox label={'Prepr'}/>
                        <Checkbox label={'Youth'}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button shadow-none bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
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
  )
}

export default SideMenuTwo