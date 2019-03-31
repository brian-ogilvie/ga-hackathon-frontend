import React from 'react'
import './ReportList.css'

const ReportList = ({reports}) => {
  const allReports = (reports.length ?
    reports.map(report => {
      return (
        <tr key={report.id}>
          <td>{report.timestamp_sutc}</td>
          <td>{report.timestamp_local}</td>
          <td>{report.event}</td>
        </tr>
      )
    }) :
    null
  )
  return (
    <div className="ReportList">
      <h3 className="ReportList__title">Most Recent Reports</h3>
      <table className="ReportList__table">
        <tbody>
          <tr>
            <th>UTC</th>
            <th>Local</th>
            <th>Event</th>
          </tr>
          {allReports}
        </tbody>
      </table>
    </div>
  )
}

export default ReportList