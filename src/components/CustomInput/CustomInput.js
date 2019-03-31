import React from 'react'
import './CustomInput.css'

const CustomInput = ({placeholder}) => {
  return (
    <div className="CustomInput">
      <input type="text" placeholder={placeholder} />
      <button className="customInput__button"><i className="fas fa-caret-down" /></button>
    </div>
  )
}

export default CustomInput