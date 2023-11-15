import React from 'react'
import courseImg from '../assets/preprLogo.png'
import labLogo from '../assets/lab_icon.svg'
import projectLogo from '../assets/project_icon.svg'
import challengeLogo from '../assets/challenge_icon.svg'

const CourseCard = ({course}) => {
    // Course Object values
    // id: 4,
    // host: 'youth',
    // category: 'labs',
    // title: 'UX Feedback Lab',
    // description: 'Welcome to the CARE Lab, a space to collaborate and communicate ideas, resources, best practices, and awareness to help manage stress, relieve anxiety, and carry our collective burdens together. Participants are invited to share stories and resources while creating a safe space for everyone to share and learn from each other. Contributors are invited to host events and webinars that can be made ac...',
    // tags: ['communication', 'mindfullness', 'writing']

    // set logoIcon by category type
    const logoIcon = course.category === 'labs' ? labLogo : course.category === 'challenges' ? challengeLogo : projectLogo
  return (
    <>
    <div className="card mb-3" style={{maxWidth: '100%'}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={courseImg} className="img-fluid rounded-start" alt="course title page"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">
                        <img src={logoIcon} className="img-fluid rounded-start" alt="category logo"/>
                        <small className="text-body-secondary">{course.category}</small>
                    </p>
                    <p className="card-text">{course.description}</p> 
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default CourseCard