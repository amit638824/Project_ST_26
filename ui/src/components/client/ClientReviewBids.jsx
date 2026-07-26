import React from 'react'
import { FaCheck, FaTimes, FaUser } from 'react-icons/fa'

const ClientReviewBids = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora for Clients</span>
            <h2 className="dash-heading">Review Candidate Proposals</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row mb-3">
                <div className="col-12">
                  <h4>Review Candidate Proposals</h4>
                  <p className="text-secondary mb-0">
                    <strong>Project:</strong> E-commerce Website · Budget ₹85,000
                  </p>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <div className="proposal-card h-100">
                    <div className="row align-items-center g-2 mb-2">
                      <div className="col-auto">
                        <FaUser className="text-orange" />
                      </div>
                      <div className="col">
                        <h6 className="mb-0 fw-bold">Edward Norton</h6>
                      </div>
                      <div className="col-auto">
                        <span className="job-budget">₹80,000</span>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-12">
                        <p className="text-secondary small mb-0">Web Developer</p>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12">
                        <p className="job-card-desc mb-0">&quot;Full React + Node e-commerce store in 5 weeks.&quot;</p>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-auto">
                        <button type="button" className="btn btn-sm btn-orange"><FaCheck /> Accept</button>
                      </div>
                      <div className="col-auto">
                        <button type="button" className="btn btn-sm btn-outline-danger"><FaTimes /> Reject</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="proposal-card h-100">
                    <div className="row align-items-center g-2 mb-2">
                      <div className="col-auto">
                        <FaUser className="text-orange" />
                      </div>
                      <div className="col">
                        <h6 className="mb-0 fw-bold">Jane Seymour</h6>
                      </div>
                      <div className="col-auto">
                        <span className="job-budget">₹78,500</span>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-12">
                        <p className="text-secondary small mb-0">UI Designer</p>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12">
                        <p className="job-card-desc mb-0">&quot;Clean UI/UX with Figma handoff and responsive frontend.&quot;</p>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-auto">
                        <button type="button" className="btn btn-sm btn-orange"><FaCheck /> Accept</button>
                      </div>
                      <div className="col-auto">
                        <button type="button" className="btn btn-sm btn-outline-danger"><FaTimes /> Reject</button>
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

export default ClientReviewBids
