import React from 'react'
import { FaClock, FaComments } from 'react-icons/fa'

const UserProjects = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora for Freelancers</span>
            <h2 className="dash-heading">Active Projects Board</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row align-items-center g-3 mb-4">
                <div className="col-12 col-sm-6">
                  <h4 className="mb-0">Active Projects Board</h4>
                </div>
                <div className="col-12 col-sm-6">
                  <input type="text" className="form-control dash-search ms-sm-auto" placeholder="Search skills or title..." />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <div className="job-card mb-0">
                    <div className="row align-items-start mb-3">
                      <div className="col-12 col-sm-8">
                        <h5 className="job-card-title">E-commerce Website (React & Node)</h5>
                      </div>
                      <div className="col-12 col-sm-4 text-sm-end">
                        <span className="job-budget">₹85,000</span>
                      </div>
                    </div>
                    <div className="row g-2 mb-3">
                      <div className="col-auto text-secondary small fw-semibold">
                        <FaClock className="text-orange me-1" /> 5 weeks
                      </div>
                      <div className="col-auto text-secondary small fw-semibold">
                        <FaComments className="text-orange me-1" /> 8 Bids
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12">
                        <p className="job-card-desc mb-0">Need a full stack developer for an online store with cart, payments and admin panel.</p>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-6">
                        <span className="status-ok">Active</span>
                      </div>
                      <div className="col-6 text-end">
                        <button type="button" className="btn btn-sm btn-orange">Place Bid (1 Credit)</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <div className="job-card mb-0">
                    <div className="row align-items-start mb-3">
                      <div className="col-12 col-sm-8">
                        <h5 className="job-card-title">Brand Logo & Identity Pack</h5>
                      </div>
                      <div className="col-12 col-sm-4 text-sm-end">
                        <span className="job-budget">₹15,000</span>
                      </div>
                    </div>
                    <div className="row g-2 mb-3">
                      <div className="col-auto text-secondary small fw-semibold">
                        <FaClock className="text-orange me-1" /> 1 week
                      </div>
                      <div className="col-auto text-secondary small fw-semibold">
                        <FaComments className="text-orange me-1" /> 12 Bids
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12">
                        <p className="job-card-desc mb-0">Looking for a creative designer for logo kit and social media templates.</p>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-6">
                        <span className="status-ok">Active</span>
                      </div>
                      <div className="col-6 text-end">
                        <button type="button" className="btn btn-sm btn-orange">Place Bid (1 Credit)</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="job-card mb-0">
                    <div className="row align-items-start mb-3">
                      <div className="col-12 col-sm-8">
                        <h5 className="job-card-title">RESTful API Backend</h5>
                      </div>
                      <div className="col-12 col-sm-4 text-sm-end">
                        <span className="job-budget">₹60,000</span>
                      </div>
                    </div>
                    <div className="row g-2 mb-3">
                      <div className="col-auto text-secondary small fw-semibold">
                        <FaClock className="text-orange me-1" /> 3 weeks
                      </div>
                      <div className="col-auto text-secondary small fw-semibold">
                        <FaComments className="text-orange me-1" /> 5 Bids
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12">
                        <p className="job-card-desc mb-0">Node.js / Express API with JWT auth, MongoDB and documentation.</p>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-6">
                        <span className="status-ok">Active</span>
                      </div>
                      <div className="col-6 text-end">
                        <button type="button" className="btn btn-sm btn-orange">Place Bid (1 Credit)</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default UserProjects
