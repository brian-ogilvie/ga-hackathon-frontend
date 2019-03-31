import React from 'react'
import './Searchbar.css'

import CustomInput from '../CustomInput/CustomInput'

class Searchbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Searchbar">
        <CustomInput placeholder="Sort By" />
        <CustomInput placeholder="Filter" />
      </div>
    )
  }
}

export default Searchbar