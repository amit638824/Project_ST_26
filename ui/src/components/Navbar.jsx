import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className="zentora-nav">
      <nav className="navbar navbar-expand-lg py-2">
        <div className="container">
          <div className="row align-items-center w-100 g-0">
            {/* Logo */}
            <div className="col-6 col-lg-3">
              <Link className="navbar-brand d-inline-flex align-items-center gap-2 m-0" to="/">
                <span className="brand-icon">
                  <FaCheck />
                </span>
                <span className="brand-text">Zentora</span>
              </Link>
            </div>

            {/* Toggle (mobile) */}
            <div className="col-6 d-lg-none text-end">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#zentoraNav"
                aria-controls="zentoraNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>

            {/* Menu links */}
            <div className="col-12 col-lg-9">
              <div className="collapse navbar-collapse justify-content-lg-end" id="zentoraNav">
                <ul className="navbar-nav align-items-lg-center">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" end>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact-us">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
