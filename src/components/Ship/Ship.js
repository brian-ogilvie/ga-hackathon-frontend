import React from 'react'
import './Ship.css'
import {Link} from 'react-router-dom'

const Ship = ({id,name,status,kpiAcceptable}) => {
  return (
    <div className="Ship">
        <Link to={`/ships/${id}`}>
      <div>

        <h1>Ship: {name}</h1>

        <p>Id:{id}</p>

        <p>status: {status}</p>

        <p>kpiAcceptable is {kpiAcceptable.toString()}</p>
      </div>
        </Link>
    </div>

  )
}

export default Ship
