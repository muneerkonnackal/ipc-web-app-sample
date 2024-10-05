import React from 'react'
import FirstHeader from './FirstHeader'
import Image from 'next/image'
import logo from '../assets/logo1.jpeg'
import Link from 'next/link'
import Nav from './Nav'
import MobileNav from './MobileNav'

function Header() {
  return (
    <header className=' '>
       
         <FirstHeader />
        
        <div className='xl:px-20  pr-5  pl-0 pb-2 '>
          <div className='flex items-center justify-between gap-9'>
              <div className='flex items-center gap-2 xl:mt-2 xl:gap-3 '>
                <Image src={logo} alt='logo '  quality={100}  className='object-fill lg:h-15 lg:w-15 ml-2 w-20 h-20 xl:w-22 xl:h-25 xl:ml-0 lg:ml-4' />
                <h1 className=' font-bold text-[14px] xl:text-xl text-red-600'>THE INDIA PENTACOSTAL CHURCH OF GOD</h1>
              </div>
              {/* desktop nav */}
              <div className='hidden lg:flex xl:flex items-center'>
                <Nav />
              </div>
              {/* mobile nav */}
              <div className='xl:hidden lg:hidden '>
                <MobileNav />
              </div>
          </div>
        </div>
    </header>
  )
}

export default Header