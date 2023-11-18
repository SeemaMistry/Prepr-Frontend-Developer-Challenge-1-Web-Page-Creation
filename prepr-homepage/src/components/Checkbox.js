import React from 'react'

const Checkbox = ({label}) => {
  return (
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
            {label}
        </label>
    </div>
  )
}

export default Checkbox