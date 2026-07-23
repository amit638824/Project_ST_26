import React from 'react'
import { AiFillNotification } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { TbWritingSign } from "react-icons/tb";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Si365Datascience } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { GrAssistListening } from "react-icons/gr";
import { FaTachographDigital } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";

const CategorySection = () => {
  return (<>
    <div className='row py-3 category'>
      <div className='col-sm-10 mx-auto'>
        <div className='webheading'>Browse Talent <b className='text-color1'>By Category</b></div>
        <hr className='w-25 mx-auto text-color1' />
        <div className='row py-2'>
          <div className='col-sm-4'>
            <div className='card border border-0 shadow-lg mx-auto catcard1'>
              <div className='row p-3'>
                <div className='col-2'>
                  <AiFillNotification className='fs-3' />
                </div>
                <div className='col-10'>
                  Web & Software Dev
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='card border border-0 shadow-lg mx-auto catcard2'>
              <div className='row p-3'>
                <div className='col-2'>
                  <MdDesignServices  className='fs-3' />
                </div>
                <div className='col-10'>
                  Design & Creative
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='card border border-0 shadow-lg mx-auto catcard3'>
              <div className='row p-3'>
                <div className='col-2'>
                  <TbWritingSign  className='fs-3' />
                </div>
                <div className='col-10'>
                  Writing & Translation
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row py-2'>
          <div className='col-sm-4'>
            <div className='card border border-0 shadow-lg mx-auto catcard4'>
              <div className='row p-3'>
                <div className='col-2'>
                  <MdOutlineAdminPanelSettings  className='fs-3' />
                </div>
                <div className='col-10'>
                  Admin Support
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='card border border-0 shadow-lg mx-auto catcard5'>
              <div className='row p-3'>
                <div className='col-2'>
                  <Si365Datascience  className='fs-3' />
                </div>
                <div className='col-10'>

                  Data Science & Analytics
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='card border border-0 shadow-lg mx-auto catcard6'>
              <div className='row p-3'>
                <div className='col-2'>
                  <SiGooglemarketingplatform  className='fs-3' />
                </div>
                <div className='col-10'>

                  Marketing
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row py-2'>
          <div className='col-sm-4'>
            <div className='card border border-0 shadow-lg mx-auto catcard7'>
              <div className='row p-3'>
                <div className='col-2'>
                  <GrAssistListening   className='fs-3' />
                </div>
                <div className='col-10'>
                  Accounting & Consulting
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='card border border-0 shadow-lg mx-auto catcard8'>
              <div className='row p-3'>
                <div className='col-2'>
                  <FaTachographDigital className='fs-3' />
                </div>
                <div className='col-10'>

                  IT & Networking
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='card border border-0 shadow-lg mx-auto catcard9'>
              <div className='row p-3'>
                <div className='col-2'>
                  <FaPhotoVideo  className='fs-3' />
                </div>
                <div className='col-10'>

                  Video & Animation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default CategorySection
