import React from 'react'
import { FaTrash } from 'react-icons/fa'

const AdminClients = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora Admin</span>
            <h2 className="dash-heading">Manage Clients</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row mb-3">
                <div className="col-12">
                  <h4>Manage Clients</h4>
                  <p className="text-secondary mb-0">
                    Clients join and post projects instantly — no admin approval needed. Delete only if account is fake or violates policy.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table dash-table mb-0">
                      <thead>
                        <tr>
                          <th>Client Name</th>
                          <th>Email</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Rahul Sharma</td>
                          <td>rahul@mail.com</td>
                          <td><button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button></td>
                        </tr>
                        <tr>
                          <td>Priya Mehta</td>
                          <td>priya@mail.com</td>
                          <td><button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button></td>
                        </tr>
                        <tr>
                          <td>Amit Verma</td>
                          <td>amit@mail.com</td>
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

export default AdminClients
