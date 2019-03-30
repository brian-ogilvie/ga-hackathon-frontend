import React from 'react'
import './Searchbar.css'

class Searchbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Searchbar">
        <input className="Searchbar__input" type="text" />
        <input className="Searchbar__input" type="text" />
      </div>
    )
  }
}

export default Searchbar