import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrash, FaEye } from 'react-icons/fa'

const ClientManageProjects = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora for Clients</span>
            <h2 className="dash-heading">Your Posted Projects</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row mb-3">
                <div className="col-12">
                  <h4>Your Posted Projects</h4>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table dash-table mb-0">
                      <thead>
                        <tr>
                          <th>Project Title</th>
                          <th>Description</th>
                          <th>Budget</th>
                          <th>Timeline</th>
                          <th>Bids</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>E-commerce Website</td>
                          <td>React & Node online store build</td>
                          <td>₹85,000</td>
                          <td>5 weeks</td>
                          <td>8</td>
                          <td><span className="status-pending">Open</span></td>
                          <td>
                            <Link to="/client-review-bids" className="btn btn-sm btn-orange me-2"><FaEye /> View Bids</Link>
                            <button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>Brand Logo Pack</td>
                          <td>Logo + social identity kit</td>
                          <td>₹15,000</td>
                          <td>1 week</td>
                          <td>12</td>
                          <td><span className="status-ok">In Progress</span></td>
                          <td>
                            <button type="button" className="btn btn-sm btn-outline-secondary me-2" disabled>Hired</button>
                            <button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button>
                          </td>
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

export default ClientManageProjects
