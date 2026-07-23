import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  return (<>
  <div className='row py-3 testimonial'>
    <div className='col-sm-10 mx-auto'>
      <div className='webheading'>Our <b className='text-color1'>Testimonials</b></div>
      <hr className='w-25 mx-auto text-color1' />
      <div className='row'>
        <div className='col-sm-6'>
          <span className=''>TESTIMONIALS</span>
          <h3 className='testhead'>What our Zentora<br/> Community Says</h3>
          <p>Clients and freelancers worldwide trust Zentora to connect, collaborate, and earn — building careers and businesses without borders.</p>
          <Link className='bg-color1 px-4 py-2 text-light'>View All</Link>
        </div>
        <div className='col-sm-3'>
          <div className='shadow-lg p-3'>
            <img src='/images/testimonial-04.jpg' className='img-fluid rounded-circle'/>
            <p className='testp'>isicing elit. Ad quia voluptatum ducimus consectetur iusto magni labore nesciunt aut eveniet tempora quaerat earum quo ut amet, vel quisquam repudiandae fugiat repellat?</p>
            <p className='teststar'>
              <FaStar className='text-warning'/>
              <FaStar className='text-warning'/>
              <FaStar className='text-warning'/>
              <FaStar className='text-warning'/>
              <FaStar className='text-warning'/>
            </p>
            <p className='m-0'>Shubham Singh</p>
            <p className='m-0 testpost'>Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default TestimonialSection
