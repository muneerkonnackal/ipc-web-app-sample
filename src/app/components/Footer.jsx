import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'
import { CiGlobe } from "react-icons/ci";
import { CiMail } from "react-icons/ci";


function Footer() {
  return (
    <div className=' '>
      <footer className='min-h-[70vh] bg-accent  flex  flex-col lg:gap-10 '>
        <div className='grid md:grid-cols-4 lg:ml-24 lg:mr-24 lg:mt-14 xl:gap-10 gap-10 m-6 text-white'>

          <div className=' w-full'>
            <div className='flex items-center justify-center gap-1 lg:gap-3'>
             <Image src={logo} 
             height={250}
             width={90}
             loading='lazy'
             className="h-[80px]"/>
             <p className='text-white text-lg font-semibold'>The India Pentecostal Church of God</p>
             
            </div>
            <div className='flex flex-col text-white text-[16px] gap-4 mt-5 text-justify'>
              <p >
              The India Pentecostal Church of God (IPC) is the largest Pentecostal denomination in India. First united Convention was held at Ranny in April, 1925.
               </p>
               <p>
               The India Pentecostal Church of God was registered in 1935 as a Religious Society at Eluru, Andhra Pradesh and first President was Apostle P.M.Samuel.
               </p>
            </div>

          </div>
          <div className=' w-full flex flex-col gap-3 lg:gap-8'>
            <div className='text-[22px] font-semibold tracking-wide'>
              <p>Address</p>
            </div>
           <div className='flex text-[16px] flex-col gap-3 '>
              <p>International Head Quarters Hebron, Kumbanad, 689547, Kerala, India</p>
              <p><span className='font-semibold'>Contact</span> <br /> Tel No:
              <span className='text-red-500 pl-2'> +91 4692902100</span></p>
              <p>
                <span className='font-semibold'>E-Mail:</span> <br />
              For all official communications: <span className='text-red-500 flex items-center justify-start gap-2'>
                <CiMail className='text-white' />
              ipcheadoffice@gmail.com</span>
              </p>

              <p>
                <span className='font-semibold'>For web portal issues: </span>
              <span className='text-red-500 flex items-center justify-start gap-2'>
                <CiGlobe className='text-white'/>
              info@ipcinternational.live</span>
              </p>
           </div>

          </div>
          
         <div className='md:col-span-2 flex gap-3
         '>
            <div className='  w-full flex flex-col gap-3 lg:gap-8'>
            <div className='text-[22px] font-semibold tracking-wide'>
                <p>Quick Links</p>
              </div>
              <div className='flex text-[18px] flex-col lg:gap-3 gap-2'>
                <p>Home</p>
                <p>History</p>
                <p>Leadership</p>
                <p>Statement of Faith</p>
                <p>Contact us</p>
              </div>
           </div>
           <div className='lg:grid-cols-1 w-full flex flex-col gap-3 xl:gap-8'>
            <div className='text-[22px] font-semibold tracking-wide'>
                <p>Quick Links</p>
              </div>
              <div className='flex text-[18px] flex-col lg:gap-3 gap-2'>
                <p>Home</p>
                <p>History</p>
                <p>Leadership</p>
                <p>Statement of Faith</p>
                <p>Contact us</p>
              </div>
           </div>
  
         </div>
        </div>
       {/*bottom  line  */}
       <div className='flex flex-col justify-center items-center'>
          <hr className='text-white  w-[87vw]' />
          <p className='text-white text-[14px] mt-5 m-6 text-center'>
            Copyright @ The India Pentecostal Church of God. All rights reserved</p>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer