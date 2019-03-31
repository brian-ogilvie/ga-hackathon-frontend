import React from 'react'
import './ActBtn.css'

const ActBtn = ({isActive}) => {
  const activeClass = isActive ? 'ActBtn--active' : ''
  return (
    <button className={`ActBtn ${activeClass}`}>Act</button>
  )
}

export default ActBtn