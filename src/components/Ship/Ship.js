import React from 'react'
import './Ship.css'
import {Redirect} from 'react-router-dom'

class Ship extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      redirecting: false
    }
  }

  performRedirect = () => {
    this.setState({redirecting: true})
  }
  render() {
    const {id,name,status,kpiAcceptable} = this.props
    if (this.state.redirecting) {
      return <Redirect to={`/ships/${id}`} />
    }
    return (
      <div className="Ship" onClick={this.performRedirect}>
        <div>
          <h1>Ship: {name}</h1>
          <p>Id:{id}</p>
          <p>status: {status}</p>
          <p>kpiAcceptable is {kpiAcceptable.toString()}</p>
        </div>
      </div>
    )
  }
}

export default Ship
