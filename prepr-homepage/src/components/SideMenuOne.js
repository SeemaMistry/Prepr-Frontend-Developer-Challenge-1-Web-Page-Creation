import React from 'react'

const SideMenuOne = () => {
    const baseBtnClasses = 'btn btn-lg text-start shadow-lg'
  return (
    <div className='d-grid my-5'>
        <button className={`${baseBtnClasses} btn-primary rounded-bottom-0`}>Labs</button>
        <button className={`${baseBtnClasses} btn-light rounded-top-0`}>Lab Programs</button>
    </div>
  )
}

export default SideMenuOne