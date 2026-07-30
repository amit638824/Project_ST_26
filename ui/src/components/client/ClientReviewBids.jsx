import React from "react";
import { useLocation } from "react-router-dom";

const ClientReviewBids = () => {
  const location = useLocation();
  console.log(location, "############################");

  const project = {
    title: "MERN Stack Project",
    category: "Web Development",
    budget: "₹50,000",
    duration: "3 Weeks",
    postedOn: "28 July 2026",
    proposals: 12,
    status: "Open",
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h2 className="dash-heading">Review Candidate Proposals</h2>
        </div>
      </div>

      {/* Project Details */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="dash-card">
            <div className="row">

              <div className="col-md-4 mb-3">
                <strong>Project Title</strong>
                <p className="mb-0">{location?.state?.title}</p>
              </div>

              <div className="col-md-4 mb-3">
                <strong>Category</strong>
                <p className="mb-0">{project.category}</p>
              </div>

              <div className="col-md-4 mb-3">
                <strong>Budget</strong>
                <p className="mb-0">{project.budget}</p>
              </div>

              <div className="col-md-4 mb-3">
                <strong>Duration</strong>
                <p className="mb-0">{project.duration}</p>
              </div>

              <div className="col-md-4 mb-3">
                <strong>Posted On</strong>
                <p className="mb-0">{project.postedOn}</p>
              </div>

              <div className="col-md-4 mb-3">
                <strong>Total Proposals</strong>
                <p className="mb-0">{project.proposals}</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Candidate Table */}
      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="table-responsive">
              <table className="table dash-table mb-0">
                <thead>
                  <tr>
                    <th>Freelancer</th>
                    <th>Email</th>
                    <th>Bid Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>John Travolta</td>
                    <td>user@gmail.com</td>
                    <td>₹55,000</td>
                    <td>
                      <span className="status-bad">Rejected</span>
                    </td>
                    <td>
                      <span className="status-ok me-2">Accept</span>
                      <span className="status-bad">Reject</span>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewBids;