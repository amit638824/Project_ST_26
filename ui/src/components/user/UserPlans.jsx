import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

const UserPlans = () => {
  return (
    <section className="pricing-section section-pad">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <p className="eyebrow">MY PLAN &amp; CREDITS</p>
              <h2 className="section-title">
                My Plan &amp; Bidding <span className="underline-word">Credits</span>
              </h2>
              <p className="section-sub">
                Purchase a plan to get monthly credits. Each bid on a project costs <strong>1 credit</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="dash-plan-banner text-center mb-0">
              <strong>Current Plan:</strong> Pro · 42 / 50 credits left
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {/* STARTER */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="pricing-card h-100">
              <div className="pricing-card-top">
                <h4>STARTER</h4>
                <p className="plan-price">
                  ₹0 <span>/ month</span>
                </p>
                <p className="plan-desc">For new freelancers getting started</p>
                <ul className="plan-features list-unstyled">
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>10 bidding credits / month</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Browse all open projects</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Basic profile &amp; portfolio</span>
                  </li>
                  <li className="off">
                    <FaTimes className="feat-icon" />
                    <span>Priority bid visibility</span>
                  </li>
                  <li className="off">
                    <FaTimes className="feat-icon" />
                    <span>Bid analytics dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-card-bottom">
                <button type="button" className="plan-btn plan-btn-outline">
                  Current Free
                </button>
                <p className="plan-footer">10 credits included · 1 credit per bid</p>
              </div>
            </div>
          </div>

          {/* PRO */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="pricing-card popular h-100">
              <span className="popular-badge">YOUR PLAN</span>
              <div className="pricing-card-top">
                <h4>PRO</h4>
                <p className="plan-price">
                  ₹499 <span>/ month</span>
                </p>
                <p className="plan-desc">Best for active freelancers</p>
                <ul className="plan-features list-unstyled">
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>50 bidding credits / month</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Browse all open projects</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Enhanced portfolio profile</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Priority bid visibility</span>
                  </li>
                  <li className="off">
                    <FaTimes className="feat-icon" />
                    <span>Bid analytics dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-card-bottom">
                <button type="button" className="plan-btn plan-btn-solid">
                  Your Plan
                </button>
                <p className="plan-footer">50 credits included · 1 credit per bid</p>
              </div>
            </div>
          </div>

          {/* ELITE */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="pricing-card h-100">
              <div className="pricing-card-top">
                <h4>ELITE</h4>
                <p className="plan-price">
                  ₹1,499 <span>/ month</span>
                </p>
                <p className="plan-desc">For power users &amp; small agencies</p>
                <ul className="plan-features list-unstyled">
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>200 bidding credits / month</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Browse all open projects</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Premium portfolio showcase</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Priority bid visibility</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Bid analytics &amp; insights</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-card-bottom">
                <button type="button" className="plan-btn plan-btn-solid">
                  Upgrade to Elite
                </button>
                <p className="plan-footer">200 credits included · 1 credit per bid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserPlans
