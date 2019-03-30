import React from 'react'
import './ShipDetail.css'

const ShipDetail = ({shipId}) => {
  return (
    <div className="ShipDetail">
      <h1>ShipDetail</h1>
      <p>The ship id is {shipId}</p>
    </div>
  )
}

export default ShipDetail