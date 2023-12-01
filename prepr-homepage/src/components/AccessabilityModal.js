import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'

const AccessabilityModal = () => {
    // reset to default values 
    const [activateDefaultSettings, setActivateResetSettings] = useState(false)

    // content scaling increase and decrease
    const [scale, setScale] = useState(100)
    const increaseScale = () => {
        if (scale < 200) {
        setScale(scale + 1)
        }
    }
    const decreaseScale = () => {
        if (scale > 0) {
        setScale(scale - 1)
        }
    }

    useEffect ( () => {
        if(scale === 0){
        setScale('none')
        }
        document.body.style.zoom = `${scale}%`

    },[scale])

    // activate reset
    const defaultReset = () => setActivateResetSettings(true)

    // reset scale to default 100
    useEffect ( () => {
        if(activateDefaultSettings){
        setScale(100)
        }
        document.body.style.zoom = `${scale}%`
        setActivateResetSettings(false) // reset to false!!
    },[activateDefaultSettings])

    // set modal styling
    const MODAL_BTN_STYLES = {
        position: 'fixed',
        top: '20%',
        // transform: 'translate(-100%, 125%)',
        borderRadius: '50%',
        padding: '10px',
        zIndex: 1000,
    } 
    

  return ReactDom.createPortal(
    // <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

    //     <div className=' modal-dialog modal-dialog-scrollable' >
    //     {/* <div className='modal-dialog modal-dialog-scrollable'> */}
    //     <div class="modal-content">
    //         <button className="btn btn-warning btn-lg" onClick={defaultReset}>Reset</button>
    //         <button className="btn btn-warning btn-lg" onClick={increaseScale}>Increase</button>
    //         <button className="btn btn-warning btn-lg" onClick={decreaseScale}>decrease</button>
    //         </div>
    //     </div>
    // </div>
    <>
    <button type="button" class="btn btn-success px-3 " style={MODAL_BTN_STYLES} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <i class="bi bi-person-wheelchair fs-3"></i>
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header bg-success">
        <h1 class="modal-title fs-5 text-white  " id="staticBackdropLabel">Accessability Adjustments</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <button className="btn btn-warning btn-lg" onClick={defaultReset}>Reset</button>
    <button className="btn btn-warning btn-lg" onClick={increaseScale}>Increase</button>
    <button className="btn btn-warning btn-lg" onClick={decreaseScale}>decrease</button>
        {/* modal content starts */}
        {/* modal content starts */}


      </div>
      <div class="modal-footer bg-success text-white">
        <span>Web Accessability By accessiBe</span>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    </>
    ,
    document.getElementById("accessability-modal")
  )
}

export default AccessabilityModal