import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (<>
    <div className='row'>
      <div className='col-sm-12 hero bg-color2'>
        <div className='row'>
          <div className='col-sm-6 ms-5'>
            <h3 className='herotitle'>Where Talent <b className='text-color1'>Meets <br/>Opportunity</b> with<br/> Zentora</h3>
            <p className='herodes'>Connect. Collaborate. Earn. Post projects, <br/>discover global talent, compare competitive<br/> bids, and hire top freelancers with secure <br/>escrow payments on Zentora.</p>
            <Link className='btn bg-color1 mb-5 text-light herobtn'>Browse Job and Projects</Link>
          </div>
          <div className='col-sm-6'></div>
        </div>
      </div>
    </div>
  </>)
}

export default HeroSection
