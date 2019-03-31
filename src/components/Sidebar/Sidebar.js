import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import ExportReport from '../ExportReport/ExportReport'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeList: 'owners',
      activeItem: 1,
      owners: [
        {
          id: 1,
          name: "Owner 1",
        },
        {
          id: 2,
          name: "Owner 2",
        },
        {
          id: 3,
          name: "Owner 3",
        },
        {
          id: 4,
          name: "Owner 4",
        },
      ]
    }
  }

  changeActive = (id) => {
    if (id === 'overview') {
      return this.setState({
        activeList: 'overview'
      })
    }
    this.setState({
      activeList: 'owners',
      activeItem: id
    })
  }

  render() {
    const overviewActive = this.state.activeList === 'overview' ? 'sidebar__list-item--active' : ''
    const allOwners = (this.state.owners ? 
      this.state.owners.map(owner => {
        const isActive = this.state.activeList === 'owners' && this.state.activeItem === owner.id
        const activeClass = isActive ? 'sidebar__list-item--active' : ''
        return (
          <li key={`owner${owner.id}`} className={`sidebar__list-item ${activeClass}`}>
            <Link onClick={() => this.changeActive(owner.id)} to={`/owners/${owner.id}`}>{owner.name}</Link>
          </li>
        )
      }) :
      null 
    )
    return (
      <div className="Sidebar">
        <div className="sidebar__content">
          <li className={`sidebar__list-item sidebar__overview ${overviewActive}`}>
            <Link onClick={() => this.changeActive('overview')} to="/overview">Overview</Link>
          </li>
          <h3 className="sidebar__heading">Fleet</h3>
          <ul className="sidebar__list">
            {allOwners}
          </ul>
          <h3 className="sidebar__heading">Settings</h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-item sidebar__kpi"><Link to="">Adjust KPIs</Link></li>
            <li className="sidebar__list-item sidebar__add-new"><Link to="">Add New Owner</Link></li>
          </ul>
        </div>
        <ExportReport />
      </div>
    )
  }
}

export default Sidebar