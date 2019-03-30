import React from 'react'
import './Header.css'

import Searchbar from '../Searchbar/Searchbar'

const Header = props => {
  return (
    <div className="Header">
      <div className="logo-wrapper">Ship Dash</div>
      <div className="searchbar-wrapper">
        <Searchbar />
      </div>
    </div>
  )
}

export default Header