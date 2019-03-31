import React from 'react'
import './LatestUpdates.css'
import Axios from 'axios'
import ActBtn from '../ActBtn/ActBtn'
import {Redirect} from 'react-router-dom'

class LatestUpdates extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        ships:[],
        redirectTo:null
    }
  }

  componentDidMount = async ()=>{
      const response = await Axios.get('/data/current')
      console.log(response.data)
      await this.setState({ships:response.data.ships})
      console.log(this.state.ships)
  }

  redirectTo = (shipId) =>{
      this.setState({redirectTo:shipId})
  }

  render() {
    const allShips = (
      this.state.ships ? 
      this.state.ships.map((ship, i) => {
        const {vessel_id, name, speed_through_water, speed_over_ground, total_fuel_oil_rob, eta_local} = ship
        const anomaly = Math.random() > .5
        return (
          <tr className='latestUpdates__info-row' onClick = {()=>{this.redirectTo(vessel_id)}} key={`ship${i}`}>
            <td>{name}</td>
            <td>{speed_through_water}</td>
            <td>{speed_over_ground}</td>
            <td>{total_fuel_oil_rob}</td>
            <td>{eta_local}</td>
            <td>{Math.floor(Math.random()*50)} Vessels</td>
            <td className="latestUpdates__buttons"><ActBtn isActive={anomaly} /></td>
          </tr>
        )
      }) :
      null
    )
    if (this.state.redirectTo){
        return <Redirect to = {`/ships/${this.state.redirectTo}`} />
    }
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