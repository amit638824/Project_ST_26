import React from 'react'
import { IoCheckmarkDone } from "react-icons/io5";

const TrustedSection = () => {
  return (<>
  <div className='row py-3 trusted'>
    <div className='col-sm-10 mx-auto'>
      <div className='webheading'>Trusted By <b className='text-color1'>Teams</b></div>
      <hr className='w-25 mx-auto text-color1' />
      <div className='row'>
        <div className='col-sm-6 position-relative pt-5'>
          <img src='/images/about-01.webp' className='img-fluid rounded-3'/>
          <div className='shadow-lg p-1 position-absolute w-50 trustedimg'>
            <img src='/images/Image-2.png' className='img-fluid rounded-3'/>
          </div>
        </div>
        <div className='col-sm-6 trusteddiv'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa quasi officiis quod suscipit possimus, consectetur dolores voluptas mollitia et nostrum repudiandae harum maiores minus, vel soluta, consequuntur reiciendis similique!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur similique adipisci expedita neque eum! In est beatae doloremque nam sequi iusto, repellendus, tempora ad impedit quidem similique, laborum facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur excepturi esse blanditiis? Eveniet deleniti doloribus ut exercitationem iusto sapiente hic corrupti ratione. Fuga quis optio, earum nihil quos inventore.
          </p>
          <p>
            <IoCheckmarkDone className='text-color1'/>  Expert Freelancers<br/>
            <IoCheckmarkDone className='text-color1'/> Safe Escrow Payments<br/>
            <IoCheckmarkDone className='text-color1'/> 24/7 Priority Support<br/>
          </p>
      </div>
    </div>
  </div>
  </div>
  </>)
}

export default TrustedSection
