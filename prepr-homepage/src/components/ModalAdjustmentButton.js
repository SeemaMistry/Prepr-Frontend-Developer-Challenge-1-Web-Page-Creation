import React, {useState} from 'react'

const ModalAdjustmentButton = ({label, icon}) => {
    // green border mouse-over hover effect
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    const boxStyle = isHover ? '3 border-success' : '0'
  return (
    <button className={`rounded bg-light p-5 m-3 text-center border-${boxStyle}`} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
    >
        <i class={`bi ${icon} fs-3`}></i>
        <p>{label}</p>
    </button>
  )
}

export default ModalAdjustmentButton