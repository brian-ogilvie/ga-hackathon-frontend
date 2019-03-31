import React from 'react'
import './LatestUpdates.css'

import ActBtn from '../ActBtn/ActBtn'

class LatestUpdates extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const allShips = (
      this.props.ships ? 
      this.props.ships.map((ship, i) => {
        const {name, stw, sog, consumption, eta ,lineUp, anomaly} = ship
        return (
          <tr key={`ship${i}`}>
            <td>{name}</td>
            <td>{stw}</td>
            <td>{sog}</td>
            <td>{consumption}</td>
            <td>{eta}</td>
            <td>{lineUp} Vessels</td>
            <td className="latestUpdates__buttons"><ActBtn isActive={anomaly} /></td>
          </tr>
        )
      }) :
      null
    )
    return (
      <div className="LatestUpdates">
        <h3 className="latestUpdates__heading">Latest Updates</h3>
        <table className="latestUpdates__table">
          <tbody>
            <tr>
              <th>Vessel</th>
              <th>Water Speed</th>
              <th>Land Speed</th>
              <th>Consumption</th>
              <th>ETA</th>
              <th>Port Lineup</th>
              <th>Anomaly</th>
            </tr>
            {allShips}
          </tbody>
        </table>
      </div>
    )
  }
}

export default LatestUpdates