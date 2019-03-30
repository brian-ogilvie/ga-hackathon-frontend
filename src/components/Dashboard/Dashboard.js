import React from 'react'
import './Dashboard.css'

import {Switch, Route, Link, Redirect} from 'react-router-dom'
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
        <h1>Dashboard</h1>
        <Switch>
        <Route path="/" exact render={(props) => {return <Redirect to="/fleet" /> }} />
          <Route path="/fleet" exact render={(props) => {return (
            <FleetView />
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