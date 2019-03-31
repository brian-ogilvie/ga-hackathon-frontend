import React from 'react'
import './DashboardWidget.css'

const DashboardWidget = ({children, fluid}) => {
  const fluidClass = fluid ? 'DashboardWidget--fluid' : ''
  return (
    <div className={`DashboardWidget ${fluidClass}`}>{children}</div>
  )
}

export default DashboardWidget