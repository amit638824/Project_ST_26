import React from 'react'
import { FaUsers, FaUserTie, FaBriefcase } from 'react-icons/fa'

const AdminDashboard = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora Admin</span>
            <h2 className="dash-heading">Admin Management Dashboard</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row g-3 mb-4">
                <div className="col-12 col-sm-4">
                  <div className="kpi-card kpi-teal">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <span className="kpi-icon"><FaUsers /></span>
                      </div>
                      <div className="col-9">
                        <h4 className="kpi-value">524</h4>
                        <p className="kpi-label">Total Freelancers</p>
                        <p className="kpi-caption">Registered on platform</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-4">
                  <div className="kpi-card kpi-pink">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <span className="kpi-icon"><FaUserTie /></span>
                      </div>
                      <div className="col-9">
                        <h4 className="kpi-value">186</h4>
                        <p className="kpi-label">Active Clients</p>
                        <p className="kpi-caption">Hiring on Zentora</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-4">
                  <div className="kpi-card kpi-green">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <span className="kpi-icon"><FaBriefcase /></span>
                      </div>
                      <div className="col-9">
                        <h4 className="kpi-value">312</h4>
                        <p className="kpi-label">Live Projects</p>
                        <p className="kpi-caption">48 deals finalized</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h4>Recent Administration Log</h4>
                  <div className="table-responsive">
                    <table className="table dash-table mb-0">
                      <thead>
                        <tr>
                          <th>Timestamp</th>
                          <th>Action</th>
                          <th>Target</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Just Now</td>
                          <td>New Freelancer Registered</td>
                          <td>John Doe</td>
                          <td><span className="status-ok">Success</span></td>
                        </tr>
                        <tr>
                          <td>5 mins ago</td>
                          <td>Project Posted by Client</td>
                          <td>React App Design</td>
                          <td><span className="status-ok">Live</span></td>
                        </tr>
                        <tr>
                          <td>15 mins ago</td>
                          <td>Credit Plan Purchased</td>
                          <td>PRO Plan</td>
                          <td><span className="status-ok">Success</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminDashboard
