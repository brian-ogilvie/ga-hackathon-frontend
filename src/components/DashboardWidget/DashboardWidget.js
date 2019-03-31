import React from 'react'
import './DashboardWidget.css'

const DashboardWidget = ({children, fluid, onDragStart, dragId}) => {
  const fluidClass = fluid ? 'DashboardWidget--fluid' : ''
  return (
    <div draggable="true" onDragStart={(e) => onDragStart(e, dragId)} className={`DashboardWidget ${fluidClass}`}>{children}</div>
  )
}

export default DashboardWidget