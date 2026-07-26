import React from 'react'
import { FaTrash, FaBan } from 'react-icons/fa'

const AdminUsers = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora Admin</span>
            <h2 className="dash-heading">Manage Freelancers / Users</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row mb-3">
                <div className="col-12">
                  <h4>Manage Freelancers / Users</h4>
                  <p className="text-secondary mb-0">
                    Freelancers register and start instantly — no approval needed. Admin can block or delete accounts if required.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table dash-table mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Plan</th>
                          <th>Credits</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Jane Seymour</td>
                          <td>jane@mail.com</td>
                          <td>Freelancer</td>
                          <td>Pro</td>
                          <td>42</td>
                          <td><span className="status-ok">Active</span></td>
                          <td>
                            <button type="button" className="action-btn action-btn-block"><FaBan /> Block</button>
                            <button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>Edward Norton</td>
                          <td>edward@mail.com</td>
                          <td>Freelancer</td>
                          <td>Elite</td>
                          <td>180</td>
                          <td><span className="status-ok">Active</span></td>
                          <td>
                            <button type="button" className="action-btn action-btn-block"><FaBan /> Block</button>
                            <button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>John Travolta</td>
                          <td>john@mail.com</td>
                          <td>Freelancer</td>
                          <td>Starter</td>
                          <td>8</td>
                          <td><span className="status-ok">Active</span></td>
                          <td>
                            <button type="button" className="action-btn action-btn-block"><FaBan /> Block</button>
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

export default AdminUsers
