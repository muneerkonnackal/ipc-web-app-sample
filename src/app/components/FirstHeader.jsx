import { Button } from '@/components/ui/button'
import { FaFacebook } from "react-icons/fa";
import React from 'react'

function FirstHeader() {
  return (
   
      <div className='bg-accent xl:pl-20 xl:pr-20 pl-3 pr-3 pb-2 pt-2
      '>
            <div className='container-fluid bg-accent  flex  items-center justify-between text-white p-1'>
                <div className='w-full text-left'>
                    <h3 className='font-extralight  leading-snug text-[12px]  xl:text-base whitespace-normal'>Official Site | Last updated on 16 Nov 2023</h3>
                </div>
                <div className='flex w-full justify-end  items-center xl:text-base text-[12px]  gap-2 xl:p-0 xl:gap-3'>
                   <h2 className='xl:font-semibold '> Follow us on</h2> <FaFacebook className='xl:w-6  xl:h-6 w-5 h-5' />
                </div>
            </div>
      </div>
  
  )
}

export default FirstHeader