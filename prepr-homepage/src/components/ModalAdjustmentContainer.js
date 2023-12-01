import React from 'react'

const ModalAdjustmentContainer = ({title, children}) => {
  return (
    <div className='container bg-white my-3 rounded p-3'>
        <p className='fs-5'>{title}</p>
        {children}
    </div>
  )
}

export default ModalAdjustmentContainer