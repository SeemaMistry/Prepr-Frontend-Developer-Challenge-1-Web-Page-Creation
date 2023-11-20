import React from 'react'
import labLogo from '../assets/lab_icon.svg'
import projectLogo from '../assets/project_icon.svg'
import challengeLogo from '../assets/challenge_icon.svg'
import Tag from './Tag'

const CourseCard = ({course, activateDarkMode}) => {
    activateDarkMode = true
    // set logoIcon by category type
    const logoIcon = course.category === 'labs' ? labLogo : course.category === 'challenges' ? challengeLogo : projectLogo
    const categoryTitle = course.category === 'labs' ? 'Public Lab' : course.category === 'challenges' ? "Pubic Challenge" : "Public"
    const cardDarkMode = activateDarkMode ? 'text-bg-secondary' : ''
    const btnFollowDarkMode = activateDarkMode ? 'btn-light' : ''

  return (
    <>
    <div className={`card mb-3 ${cardDarkMode}`} style={{maxWidth: '100%'}}>
        <div className="row g-0">
            <div className="col-md-4">
                <div className='p-3'>
                    <img src={course.imgSrc} className="img-fluid rounded-start " alt="course title page"/>
                    <p className='mx-3'>
                        0 <i className="bi bi-heart"></i> 
                        &nbsp; &nbsp; &nbsp;
                        0 <i className="bi bi-share-fill"></i>
                    </p>
                    <p className="mx-2 text-body-dark ">Hosted by <span className="fw-bold text-body-dark ">{course.host}</span></p>
                </div>
            </div>
            <div className="col-md-8" >
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title">{course.title}</h5>
                        {course.category === 'labs' ? <button className={`btn btn-primary ${btnFollowDarkMode}`}>+ Follow</button> : ''}
                    </div>
                    <p className="card-text">
                        <img src={logoIcon} className="img-fluid rounded-start" alt="category logo"/>
                        <span className="mx-2 text-body-dark fw-bolder">{categoryTitle}</span>
                    </p>
                    <p className="card-text">{course.description}</p> 
                    <p>
                        {course.tags.map(tag => <Tag key={`${course.id}-${tag}`} title={tag} />)}
                    </p>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default CourseCard