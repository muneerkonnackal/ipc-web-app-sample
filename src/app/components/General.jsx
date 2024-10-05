import Image from 'next/image'
import React from 'react'
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import img5 from '../assets/img5.webp'
import img6 from '../assets/img6.webp'
import { Button } from '@/components/ui/button'

function General() {
  return (
    <div className='xl:h-[90vh] lg:h-auto ml-5 mt-12 mr-5'>
        <div className=' xl:mt-0 mb-10'>
            <div className='flex items-center justify-center mt-0 mb-10 xl:mt-20 xl:mb-10'>
                <h1 className='text-lg xl:mb-5 xl:text-[35px] text-red-500 font-bold'>GENERAL EXECUTIVES 2023-2027</h1>
            </div>
           
            <div className='w-full grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-3 text-center xl:grid xl:grid-cols-6 '>
                <div className='flex flex-col h-[400px] items-center justify-center gap-2'>
                    <Image src={img1} alt='img' className='object-cover h-full' loading='lazy' width={236} height={265}/> 
                    <h2 className='font-semibold text-[14px]'>Pr.Dr.Philip P Thomas</h2>
                    <h4 className='text-red-600 text-[12px]'>GENERAL VICE PRESIDENT</h4>
                </div>
                <div className='flex flex-col h-[400px] items-center justify-center gap-2'>
                    <Image src={img2} alt='img' className='object-cover h-full' loading='lazy' width={236} height={265}/> 
                    <h2 className='font-semibold text-[14px]'>Pr.Dr.Baby Varghese</h2>
                    <h4 className='text-red-600 text-[12px]'>GENERAL SECRETARY</h4>
                </div>
                <div className='flex flex-col h-[400px] items-center justify-center gap-2'>
                    <Image src={img3} alt='img' className='object-cover h-full' loading='lazy' width={236} height={265}/> 
                    <h2 className='font-semibold text-[14px] '>Dr.John Joseph</h2>
                    <h4 className='text-red-600 text-[12px]'>GENERAL TREASURER</h4>
                </div>
                <div className='flex flex-col h-[400px] items-center justify-center gap-2'>
                    <Image src={img4} alt='img' className='object-cover h-full' loading='lazy' width={236} height={265}/> 
                    <h2 className='font-semibold text-[14px]  '>Pr.Thomas George</h2>
                    <h4 className='text-red-600 text-[12px]'>GENERAL PRESIDENT</h4>
                </div>
                <div className='flex flex-col h-[400px] items-center justify-center gap-2'>
                    <Image src={img5} alt='img' className='object-cover h-full ' loading='lazy' width={236} height={265}/> 
                    <h2 className='font-semibold text-[14px] '>Pr.Thomas George</h2>
                    <h4 className='text-red-600 text-[12px] '>GENERAL JOINT SECRETARY <br />(PASTORS)</h4>
                </div>
                <div className='flex flex-col h-[422px] items-center justify-center gap-2'>
                    <Image src={img6} alt='img' className='object-cover h-full' width={236} height={265}  loading='lazy'/> 
                    <h2 className='font-semibold text-[14px]'>Dr.Kachanathu Varkey Abraham</h2>
                    <h4 className='text-red-600 text-[12px]'>GENERAL JOINT SECRETARY <br />(BELIEVERS)</h4>
                </div>
                
            </div>
            <div className='flex justify-center items-center mt-10'>
                <Button className="bg-white border w-[200px] text-lg border-black ">View Officials</Button>
            </div>
        </div>

    </div>
  )
}

export default General