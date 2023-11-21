import React from 'react'
import Tag from './Tag'

const HeroSection = ({activateDarkMode}) => {
    // map tag titles onto screen 
    const tags = ['Communication', 'Accessibility', 'Business Innovation', 'Plugins', 'QA', 'Android Development', 'Budgeting', 'System Administration', 'Digital Tools', 'Transparency']
    const bgGradient = activateDarkMode ? 'linear-gradient(to right, grey, mediumseagreen)' : 'linear-gradient(to right, lightcyan, lightblue)' 

    return (
    <div className='text-center ' style={{backgroundImage: `${bgGradient}`, height: '40rem'}}>
        <div className='container' style={{padding:'5rem'}}>
            <h1 className='fw-bolder'>Explore Your Interests</h1>
            <p className='mt-3 mb-5'>
                We’ll recommend content based on your interests we’ve listed here.<br></br>
                Feel free to add or remove topics to customize your experience!
            </p>
            <div className="input-group mb-5 mt-5">
                <span className="input-group-text"><i className="bi bi-search"></i></span>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputGroup2" placeholder="" required/>
                    <label htmlFor="floatingInputGroup2">Search skills</label>
                </div>
            </div>
            <h2 className='mt-3 mb-5 fw-semibold'>Click an interest to narrow your <br></br>recommendations.</h2>
            {tags.map(tag => <Tag key={`hero-tag-${tag}`}  title={tag} activateDarkMode={activateDarkMode}/>)}

        </div>
    </div>
  )
}

export default HeroSection