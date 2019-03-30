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
          name: "Pinta",
          status: "At Sea",
          kpiAcceptable: false
        }
      ]
    }
  }

  render() {
    const allShips = this.state.ships.map(ship => {
      return <Ship key={ship.id} {...ship} />
    })
    return (
      <div className="FleetView">
        <h1>FleetView</h1>
        {allShips}
      </div>
    )
  }
}

export default FleetView