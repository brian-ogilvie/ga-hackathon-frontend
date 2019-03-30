import React from 'react'
import './Dashboard.css'

import {Switch, Route, Redirect} from 'react-router-dom'
import FleetView from '../FleetView/FleetView'
import ShipDetail from '../ShipDetail/ShipDetail'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Dashboard">
        <Switch>
        <Route path="/" exact render={(props) => {return <Redirect to="/fleets/1" /> }} />
          <Route path="/fleets/:id" exact render={(props) => {return (
            <FleetView fleetId={props.match.params.id} />
          )}} />
          <Route path="/ships/:id" render={props => {
            const shipId = props.match.params.id
            return <ShipDetail shipId={shipId} />
          }} />
        </Switch>
      </div>
    )
  }
}

export default Dashboard