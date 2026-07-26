import React from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'

const AdminPlans = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora Admin</span>
            <h2 className="dash-heading">Freelancer Credit Plan Management</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row mb-3">
                <div className="col-12">
                  <h4>Freelancer Credit Plan Management</h4>
                  <p className="text-secondary mb-0">
                    Add new credit plans from here. Each bid deducts 1 credit from the freelancer&apos;s balance. New plans appear on the landing page and freelancer dashboard.
                  </p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-12">
                  <div className="dash-box mb-0">
                    <h5>Add New Plan</h5>
                    <form>
                      <div className="row g-3">
                        <div className="col-12 col-sm-3">
                          <label className="form-label">Plan Name</label>
                          <input type="text" className="form-control" placeholder="e.g. BUSINESS" />
                        </div>
                        <div className="col-12 col-sm-3">
                          <label className="form-label">Monthly Credits</label>
                          <input type="number" className="form-control" placeholder="e.g. 100" />
                        </div>
                        <div className="col-12 col-sm-3">
                          <label className="form-label">Price (₹ / month)</label>
                          <input type="number" className="form-control" placeholder="e.g. 999" />
                        </div>
                        <div className="col-12 col-sm-3">
                          <label className="form-label">Short Tagline</label>
                          <input type="text" className="form-control" placeholder="e.g. For growing freelancers" />
                        </div>
                        <div className="col-12">
                          <div className="row align-items-center g-3">
                            <div className="col-auto">
                              <div className="form-check mb-0">
                                <input type="checkbox" className="form-check-input" id="planFeatured" />
                                <label className="form-check-label fw-semibold" htmlFor="planFeatured">
                                  Mark as Most Popular
                                </label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <button type="button" className="btn btn-orange"><FaPlus /> Add Plan</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <h5 className="mb-0">All Plans List</h5>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table dash-table mb-0">
                      <thead>
                        <tr>
                          <th>Plan Name</th>
                          <th>Monthly Credits</th>
                          <th>Credit / Bid</th>
                          <th>Price / Mo</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>STARTER</td>
                          <td>10</td>
                          <td>1</td>
                          <td>₹0</td>
                          <td><button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button></td>
                        </tr>
                        <tr>
                          <td>PRO</td>
                          <td>50</td>
                          <td>1</td>
                          <td>₹499</td>
                          <td><button type="button" className="action-btn action-btn-delete"><FaTrash /> Delete</button></td>
                        </tr>
                        <tr>
                          <td>ELITE</td>
                          <td>200</td>
                          <td>1</td>
                          <td>₹1,499</td>
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

export default AdminPlans
