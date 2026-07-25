import React from "react";
 

const Register = () => {
  return (
    <div className="register-page d-flex justify-content-center align-items-center">
      <div className="register-card shadow">
        <p className="text-uppercase small-title mb-2">Get Started</p>

        <h1 className="fw-bold mb-2">Create Account</h1>

        <p className="text-muted mb-4">
          Already have an account?{" "}
          <a href="/login" className="signin-link">
            Sign in here
          </a>
        </p>

        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Register As</label>
              <select className="form-select">
                <option>Client — I want to hire</option>
                <option>Freelancer — I want to work</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Full Name / Company
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your name or company"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Min. 6 characters"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter password"
              />
            </div>
          </div>

          <button type="submit" className="btn register-btn w-100">
            Create Account
          </button>

          <p className="text-center text-muted mt-3 small">
            Admin accounts are created by the platform team only — not available
            via registration.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
