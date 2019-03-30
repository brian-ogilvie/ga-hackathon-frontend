import React from 'react'
import './Header.css'

import Searchbar from '../Searchbar/Searchbar'

const Header = props => {
  return (
    <div className="Header">
      <div className="logo-wrapper">
        <div className=""><img src="/assets/logo/logo.png" alt="logo" /></div>
        <div>Ship Dash</div>
      </div>
      <div className="searchbar-wrapper">
        <Searchbar />
      </div>
    </div>
  )
}

export default Header