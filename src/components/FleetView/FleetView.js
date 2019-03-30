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
        },
        {
          id: 2341,
          name: "Nina",
          status: "EOSP",
          kpiAcceptable: true
        },{
          id: 5432,
          name: "Santa Maria",
          status: "At Sea",
          kpiAcceptable: false
        },      ]
    }
  }

  render() {
    const fleetId = this.props.fleetId
    const allShips = this.state.ships.map(ship => {
      return <Ship key={ship.id} {...ship} />
    })
    return (
      <div className="FleetView">
        <h1>Fleet {fleetId}</h1>
        {allShips}
      </div>
    )
  }
}

export default FleetView