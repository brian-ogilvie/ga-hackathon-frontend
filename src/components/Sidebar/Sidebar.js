import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Sidebar">
        <h1>Sidebar</h1>
        <div>Active Fleets</div>
        <ul>
          <li><Link to="/fleets/1">Seed Fleet 1</Link></li>
          <li><Link to="/fleets/2">Seed Fleet 2</Link></li>
          <li><Link to="/fleets/3">Seed Fleet 3</Link></li>
        </ul>
      </div>
    )
  }
}

export default Sidebar