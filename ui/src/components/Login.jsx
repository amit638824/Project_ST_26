import React from "react"; 

const Login = () => {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-card shadow">

        <p className="welcome-text mb-2">WELCOME BACK</p>

        <h1 className="fw-bold mb-2">Sign In</h1>

        <p className="text-muted mb-4">
          Don't have an account?{" "}
          <a href="/register" className="create-link">
            Create one free
          </a>
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label fw-semibold">Login As</label>

            <select className="form-select">
              <option>Client</option>
              <option>Freelancer</option>
              <option>Admin</option>
            </select>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
            />

            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <button className="btn login-btn w-100">
            Sign In
          </button>

          

        </form>

      </div>
    </div>
  );
};

export default Login;