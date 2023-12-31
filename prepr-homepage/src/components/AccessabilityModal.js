import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import ModalAdjustmentContainer from './ModalAdjustmentContainer'
import ModalAdjustmentButton from './ModalAdjustmentButton'

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
    <>
    <button type="button" class="btn btn-success px-3 " style={MODAL_BTN_STYLES} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <i class="bi bi-person-wheelchair fs-3"></i>
    </button>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header bg-success d-block">
                    <div className='d-flex'>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <select class="form-select" style={{marginLeft: '50%'}} aria-label="Default select example">
                            <option selected>English</option>
                            <option value="1">French</option>
                            <option value="2">Deutsch</option>
                            <option value="3">Spanish</option>
                        </select>
                    </div>
                    <h1 class="modal-title fs-2 text-white text-center px-3 py-4" id="staticBackdropLabel">Accessability Adjustments</h1>
                    <div className='bg-success d-flex justify-content-evenly'>
                        <button className="btn rounded-5 btn-light mx-2" onClick={defaultReset}>Reset Settings</button>
                        <button className='btn rounded-5 btn-light '>Statement</button>
                        <button className='btn rounded-5 btn-light mx-2'>Hide Interface</button>
                    </div>
                    <form class="d-flex mt-4 mb-4" role="search">
                        <input class="form-control me-2 rounded-5" type="search" 
                        placeholder="Unclear content? Search in dictionary..." 
                        aria-label="Search"/>
                    </form>

                </div>

            <div class="modal-body bg-light">
                <ModalAdjustmentContainer title='Choose the right accessability profile for you'>
                    <div class="form-check form-switch form-check fs-1 d-flex justify-content-between">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheck"/>
                        <label class="form-check-label" for="flexSwitchCheck">
                            <p className='fs-5 m-0 p-0'>
                                Seizure Safe Profile<br></br>
                                <span className='fs-6 text-secondary'>Clear flashes & reduces color</span>
                            </p>
                        </label>
                        <i className='bi bi-lightning-charge bg-light px-3' style={{borderRadius: '50%'}}></i>
                    </div>
                    <hr></hr>
                    <div class="form-check form-switch form-check fs-1 d-flex justify-content-between">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheck"/>
                        <label class="form-check-label" for="flexSwitchCheck">
                            <p className='fs-5 m-0 p-0'>
                            Cognitive Disability Profile<br></br>
                                <span className='fs-6 text-secondary'>Assists with reading and focusing</span>
                            </p>
                        </label>
                        <i className='bi bi-crosshair bg-light px-3' style={{borderRadius: '50%'}}></i>
                    </div>
                    <hr></hr>
                </ModalAdjustmentContainer>
                <ModalAdjustmentContainer title='Content Adjustments'>
                    <div className={`rounded bg-light p-3 m-3 text-center`}>
                        <div className='d-flex justify-content-center'>
                            <i class="bi bi-arrows-fullscreen"></i>
                            <p className='mx-4'>Content Scaling</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className="btn btn-success" style={{borderRadius: '50%'}} onClick={increaseScale}>^</button>
                            <div className='bg-white text-success' style={{padding: '0px 10px'}}><p>increase or decrease</p></div>
                            <button className="btn btn-success" style={{borderRadius: '50%'}} onClick={decreaseScale}>v</button>
                        </div>
                    </div>  
                    <div className='d-flex'>
                        <ModalAdjustmentButton label='Align Center' icon='bi-text-center'/>
                        <ModalAdjustmentButton label='Align Left' icon='bi-text-left'/>
                    </div>
                </ModalAdjustmentContainer>
                    
                <ModalAdjustmentContainer title='Color Adjustments'>
                    <div className='d-flex'>
                        <ModalAdjustmentButton label='Dark Contrast' icon='bi-moon'/>
                        <ModalAdjustmentButton label='Light Contrast' icon='bi-brightness-low'/>
                        
                    </div>
                    <div className='d-flex'>
                        <ModalAdjustmentButton label='High Contrast' icon='bi-circle-half'/>
                        <ModalAdjustmentButton label='High Saturation' icon='bi-droplet-half'/>
                    </div>
                </ModalAdjustmentContainer>

                <ModalAdjustmentContainer title='Orientation Adjustments'>
                    <div className='d-flex'>
                        <ModalAdjustmentButton label='Mute Sound' icon='bi-volume-mute'/>
                        <ModalAdjustmentButton label='Hide Image' icon='bi-image'/>
                        
                    </div>
                    <div className='d-flex'>
                        <ModalAdjustmentButton label='Stop Animation' icon='bi-lightning-charge'/>
                        <ModalAdjustmentButton label='Highlight Focus' icon='bi-crosshair'/>
                    </div>
                </ModalAdjustmentContainer>
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