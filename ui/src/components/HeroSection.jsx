import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPlus } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content">
            <img src="/images/shape-13.png" alt="" className="hero-dots-left" />
            <h1 className="hero-title">
              Where Talent <span>Meets Opportunity</span> with Zentora
            </h1>
            <p className="hero-desc">
              Connect. Collaborate. Earn. Post projects, discover global talent,
              compare competitive bids, and hire top freelancers with secure
              escrow payments on Zentora.
            </p>
            <Link to="/services" className="btn hero-cta">
              Browse Jobs &amp; Projects <FaArrowRight className="ms-2" />
            </Link>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual position-relative">
              <img src="/images/shape-05.png" alt="" className="hero-shape-wave" />
              <img src="/images/shape-04.png" alt="" className="hero-shape-yellow" />
              <img src="/images/shape-06.png" alt="" className="hero-shape-purple" />
              <img src="/images/shape-13.png" alt="" className="hero-dots-right" />
              <img
                src="/images/girl-1.webp"
                alt="Zentora talent"
                className="hero-girl img-fluid"
              />

              <div className="hero-talent-card">
                <h6>Active Talent</h6>
                <div className="d-flex align-items-center gap-2">
                  <div className="avatar-stack">
                    <img src="/images/testimonial-01.png" alt="" />
                    <img src="/images/testimonial-02.png" alt="" />
                    <img src="/images/testimonial-03.png" alt="" />
                    <img src="/images/testimonial-04.jpg" alt="" />
                    <span className="avatar-plus"><FaPlus /></span>
                  </div>
                  <span className="talent-stat">10k+ Vetted Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
