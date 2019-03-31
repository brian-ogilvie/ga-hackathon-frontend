import React from 'react'
import './ShipDetail.css'
import axios from 'axios'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
import ReportList from '../ReportList/ReportList'


class ShipDetail extends React.PureComponent{
    constructor(props) {
        super(props)
        this.state={
            name: 'loading',
            reports: []
        }
        
    }
    componentDidMount = async() =>{
        try {
          const response  = await axios.get(`/data/vessel/${this.props.shipId}`)
          
          console.log(response.data)
          await this.setState({
            name: response.data.vessel_name,
            reports: response.data.data 
          })
          console.log(this.state.reports)
        } catch (e) {
          console.log(e.message)
        }
    }

    render(){
        return (
            <div className="ShipDetail">
                <h1>Ship Detail</h1>
                <p>Information for {this.state.name}</p>
                <p>Reports Available: {this.state.reports.length}</p>
                <DashboardWidget><ReportList reports={this.state.reports} /></DashboardWidget>
            </div>
        )
    }
}




export default ShipDetail