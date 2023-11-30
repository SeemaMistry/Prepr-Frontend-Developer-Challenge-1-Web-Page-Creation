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

  return ReactDom.createPortal(
    <div>
        <button className="btn btn-warning btn-lg" onClick={defaultReset}>Reset</button>
        <button className="btn btn-warning btn-lg" onClick={increaseScale}>Increase</button>
        <button className="btn btn-warning btn-lg" onClick={decreaseScale}>decrease</button>
    </div>,
    document.getElementById("accessability-modal")
  )
}

export default AccessabilityModal