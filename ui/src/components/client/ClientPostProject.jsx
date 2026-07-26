import React from 'react'

const ClientPostProject = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora for Clients</span>
            <h2 className="dash-heading">Post a New Freelance Project</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row mb-3">
                <div className="col-12">
                  <h4>Post a New Freelance Project</h4>
                </div>
              </div>

              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Project Title</label>
                    <input type="text" className="form-control" placeholder="e.g. Develop React E-commerce Web App" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label">Budget (₹)</label>
                    <input type="number" className="form-control" placeholder="e.g. 50000" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label">Timeline / Deadline</label>
                    <input type="text" className="form-control" placeholder="e.g. 3 weeks" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Describe the project scope, deliverables, skills needed..."
                    />
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn btn-orange">Publish Project</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ClientPostProject
