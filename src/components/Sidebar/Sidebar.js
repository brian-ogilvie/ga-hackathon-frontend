import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import ExportReport from '../ExportReport/ExportReport'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Sidebar">
        <div className="sidebar__content">
          <h3 className="sidebar__heading">Fleet</h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-item sidebar__list-item--active"><Link to="/owners/1">Owner 1</Link></li>
            <li className="sidebar__list-item"><Link to="/owners/2">Owner 2</Link></li>
            <li className="sidebar__list-item"><Link to="/owners/3">Owner 3</Link></li>
          </ul>
          <h3 className="sidebar__heading">Settings</h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-item">Adjust KPIs</li>
            <li className="sidebar__list-item">Add New Owner</li>
          </ul>
        </div>
        <ExportReport />
      </div>
    )
  }
}

export default Sidebar