import React from 'react'
import './FleetView.css'

import Ship from '../Ship/Ship'

class FleetView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ships: [
        {
          id: 1001,
          name: "Pinta"
        }
      ]
    }
  }

  render() {
    return (
      <div className="FleetView">
        <h1>FleetView</h1>
        <Ship />
        <Ship />
        <Ship />
        <Ship />
      </div>
    )
  }
}

export default FleetView