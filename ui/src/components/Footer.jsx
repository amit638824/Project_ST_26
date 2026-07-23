import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";


const Footer = () => {
  return (<>
    <div className='row footer bg-dark g-4'>
      <div className='col-sm-3 text-light footercol'>
        <h6 >Contact <span className='highlight'>Us</span></h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam quis incidunt animi laboriosam eius, id dolore quae deserunt rerum ratione. Maiores labore culpa doloribus nihil libero earum at error.</p>
        <p><b>Add: </b> Plot No-01, Behind Thompson College, Bahraich Road, Gonda, Uttar Pradesh 271001</p>
        <p><b>Call: </b>+91-7408926512</p>
        <p><b>Email: </b>ad74mi@gmail.com</p>
      </div>
      <div className='col-sm-3 text-light footercol '>
        <h6>Zentora <span className='highlight'>Platform</span></h6>

        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Browse Projects</Link></li>
          <li><Link to="/freelancers">Find Freelancers</Link></li>
          <li><Link to="/post-project">Post a Project</Link></li>
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/stories">Success Stories</Link></li>
        </ul>
      </div>
      <div className='col-sm-3 text-light footercol'>
        <h6>Links</h6>

        <ul>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/news">News & Articles</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
          <li><Link to="/coming">Coming Soon</Link></li>
          <li><Link to="/login">Sign In / Registration</Link></li>
        </ul>
      </div>
      <div className='col-sm-3 text-light footercol'>
        <h6>Our <span className='highlight'>Contacts</span></h6>
        <p>
          Enter your email address to register
          to our newsletter subscription
        </p>

        <div className='d-flex mt-4'>
          <input
            type="email"
            className='form-control'
            placeholder='Your Email'
          />

          <button className='btn btn-success ms-2'>
            Subscribe
          </button>
        </div>
        <div className="ficons">
          <a
            href="https://www.facebook.com/aa.darsh74"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/in/ad01m/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedinIn />
          </a>
          
          <a
            href="https://www.instagram.com/ad.01m?igsh=bnU2bnhobmZwejdk"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/ad74mi"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.youtube.com/@ad.01m"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  </>)
}

export default Footer
