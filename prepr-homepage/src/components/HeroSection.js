import React from 'react'

const HeroSection = () => {
    const tags = <div>Tag</div>
  return (
    <div className='text-center' style={{backgroundImage: 'linear-gradient(to right, lightcyan, lightblue)', height: '40rem'}}>
        <div style={{padding:'10rem'}}>
            <h1 className='fw-bolder'>Hero Section</h1>
            <p className='mt-3 mb-5'>A description of what this site is</p>
            <div class="input-group mt-3 mb-5">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInputGroup2" placeholder="Username" required/>
                    <label for="floatingInputGroup2">Search skills</label>
                </div>
            </div>
            <h2 className='mt-3 mb-5 fw-semibold'>Click Here for more recommendations</h2>
            {tags}

        </div>
    </div>
  )
}

export default HeroSection