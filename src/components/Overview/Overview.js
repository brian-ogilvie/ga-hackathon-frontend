import React from 'react'
import './Overview.css'

import DashboardWidget from '../DashboardWidget/DashboardWidget'
import LatestUpdates from '../LatestUpdates/LatestUpdates'
import MetaWidget from '../MetaWidget/MetaWidget'

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ships: [
        {
          name: "Nina",
          stw: 6.14,
          sog: 445,
          consumption: 4446.8,
          eta: '18.03.19 21:00',
          lineUp: 50,
          anomaly: true
        },
        {
          name: "Pinta",
          stw: 6.14,
          sog: 445,
          consumption: 4446.8,
          eta: '18.03.19 21:00',
          lineUp: 50,
          anomaly: true
        },
        {
          name: "Santa Maria",
          stw: 6.14,
          sog: 445,
          consumption: 4446.8,
          eta: '18.03.19 21:00',
          lineUp: 50,
          anomaly: false
        },
        {
          name: "Mayflower",
          stw: 6.14,
          sog: 445,
          consumption: 4446.8,
          eta: '18.03.19 21:00',
          lineUp: 50,
          anomoly: false
        }
      ]
    }
  }

  render() {
    return (
      <div className="Overview">
        <DashboardWidget><MetaWidget /></DashboardWidget>
        <DashboardWidget><LatestUpdates ships={this.state.ships} /></DashboardWidget>
      </div>
    )
  }
}

export default Overview