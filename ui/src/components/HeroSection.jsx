import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (<>
    <div className='row'>
      <div className='col-sm-12 hero bg-color2'>
        <div className='row ps-5'>
          <div className='col-sm-6 position-relative'>
            <h3 className='herotitle'>Where Talent <b className='text-color1'>Meets <br/>Opportunity</b> with<br/> Zentora</h3>
            <p className='herodes'>Connect. Collaborate. Earn. Post projects, <br/>discover global talent, compare competitive<br/> bids, and hire top freelancers with secure <br/>escrow payments on Zentora.</p>
            <Link className='btn bg-color1 mb-5 text-light herobtn'>Browse Job and Projects</Link>
            <img src='/images/shape-13.png' className='herodot position-absolute' />
          </div>
          <div className='col-sm-6 position-relative'>
            <img src="/images/girl-1.webp" alt="" className='img-fluid w-75' />
            <img src='/images/h-1-shape-01.png' className='position-absolute herosideimg' />
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default HeroSection
