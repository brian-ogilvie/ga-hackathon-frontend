import React from 'react'
import './Overview.css'

import DashboardWidget from '../DashboardWidget/DashboardWidget'
import LatestUpdates from '../LatestUpdates/LatestUpdates'
import MetaWidget from '../MetaWidget/MetaWidget'

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      widgets: [
        'MetaWidget',
        'LatestUpdates',
      ],
    }
  }

  onDragStart = (e, dragId) => {
    e.dataTransfer.setData('dragId', dragId)
  }

  onDragOver = e => {
    e.preventDefault()
  }

  onDrop = e => {
    // const dragId = e.dataTransfer.getData('dragId')
    this.setState(prevState => {
      const {widgets} = prevState
      const newWidgets = widgets.reverse()
      return {
        widgets: newWidgets
      }
    })
  }

  render() {
    const widgets = this.state.widgets.map((widget, i) => {
      return (
        <DashboardWidget key={i} onDragStart={this.onDragStart} dragId={i}>
          {(widget === 'LatestUpdates' ? 
            <LatestUpdates ships={this.state.ships} /> :
            <MetaWidget /> 
          )}
        </DashboardWidget>
      )
    })
    return (
      <div className="Overview" onDragOver={this.onDragOver} onDrop={this.onDrop}>
        {widgets}
      </div>
    )
  }
}

export default Overview