import React from 'react'
import './MetaWidget.css'

const MetaWidget = ({dock, transit, port, delayed}) => {
  return (
    <div className="MetaWidget">
      <div><h3 className="metaWidget__heading">Manager Summary</h3></div>
      <div className="metaWidget__content">
        <div className="metaWidget__item">
          <h4 className="metaWidget__item-title">Vessels at Dock</h4>
          <p className="metaWidget__number metaWidget--blue">4</p>
        </div>
        <div className="metaWidget__item">
          <h4 className="metaWidget__item-title">Vessels in Transit</h4>
          <p className="metaWidget__number metaWidget--green">10</p>
        </div>
        <div className="metaWidget__item">
          <h4 className="metaWidget__item-title">Vessels at Port</h4>
          <p className="metaWidget__number metaWidget--green">4</p>
        </div>
        <div className="metaWidget__item">
          <h4 className="metaWidget__item-title">Vessels Delayed</h4>
          <p className="metaWidget__number metaWidget--red">4</p>
        </div>
      </div>
    </div>
  )
}

export default MetaWidget