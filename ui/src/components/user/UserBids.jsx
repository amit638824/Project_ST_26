import React from 'react'

const UserBids = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora for Freelancers</span>
            <h2 className="dash-heading">My Placed Bids &amp; Offers</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row mb-3">
                <div className="col-12">
                  <h4>My Placed Bids &amp; Offers</h4>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table dash-table mb-0">
                      <thead>
                        <tr>
                          <th>Project Title</th>
                          <th>Bid Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>E-commerce Website</td>
                          <td>₹80,000</td>
                          <td><span className="status-pending">Pending</span></td>
                        </tr>
                        <tr>
                          <td>Mobile App UI</td>
                          <td>₹42,000</td>
                          <td><span className="status-ok">Accepted</span></td>
                        </tr>
                        <tr>
                          <td>API Development</td>
                          <td>₹55,000</td>
                          <td><span className="status-bad">Rejected</span></td>
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

export default UserBids
