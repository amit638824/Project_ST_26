import React from 'react'
import { FaTrash } from 'react-icons/fa'

const AdminProjects = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora Admin</span>
            <h2 className="dash-heading">Manage All Projects</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row mb-3">
                <div className="col-12">
                  <h4>Manage All Projects</h4>
                  <p className="text-secondary mb-0">
                    Client projects go live immediately when posted. Admin can delete spam or inappropriate listings — no approval required.
                  </p>
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
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>E-commerce Website</td>
                          <td>React & Node online store</td>
                          <td>₹85,000</td>
                          <td>5 weeks</td>
                          <td><button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button></td>
                        </tr>
                        <tr>
                          <td>Brand Logo Design</td>
                          <td>Logo + social kit</td>
                          <td>₹12,000</td>
                          <td>1 week</td>
                          <td><button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button></td>
                        </tr>
                        <tr>
                          <td>RESTful API Backend</td>
                          <td>Node Express API with JWT</td>
                          <td>₹60,000</td>
                          <td>3 weeks</td>
                          <td><button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button></td>
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

export default AdminProjects
