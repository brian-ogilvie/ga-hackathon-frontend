import React from 'react'
import './Sidebar.css'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Sidebar">
        <h1>Sidebar</h1>
        <div>Boat Loads of Fleets</div>
      </div>
    )
  }
}

export default Sidebar