import { Button } from '@/components/ui/button'
import React from 'react'

function About() {
  return (
    <div className='xl:h-[70vh] h-auto lg:pb-5 bg-aboutbg pt-10 xl:pt-20'>
        <div className='container mx-auto xl:max-w-[70%] '>
            <div className='flex justify-center items-center'>
                <h1 className='text-[35px] font-bold '>ABOUT</h1>
            </div>
            <div className='xl:ml-24 xl:mr-24 xl:mt-5 ml-3 mr-3 mt-4
             '>
                <p className='text-[18px] xl:text-lg leading-7 text-justify xl:leading-7 '>
                The Indian Pentecostal Church of God (IPC) is the largest indigenous Pentecostal denomination in India. The Christian movement in India was pioneered by the disciple of Lord Jesus Christ, Thomas the Apostle, who traveled outside the Roman Empire to preach the Gospel, traveling as far as India. According to tradition, the Apostle reached Muziris, India in 52 AD and baptized several people. The origins of the Indian Pentecostal Church of God can be traced back to the Pentecostal movement in India to the early 20th century and the church has been growing ever since.
                </p>

            <div className='flex  gap-4 xl:pb-0 pb-10 justify-between xl:justify-between lg:justify-evenly items-center mt-10'>
                <Button className="bg-white text-[16px] xl:text-2xl hover:bg-black  hover:text-white xl:h-12 w-[165px] lg:w-[480px] xl:w-[480px] p-5 font-normal border border-black">Statement of Faith</Button>
                <Button className="bg-white text-[16px] xl:text-2xl hover:bg-black  hover:text-white xl:h-12 w-[165px] lg:w-[480px] xl:w-[480px] p-5 font-normal border border-black">Our History</Button>
            </div>
            </div>

            
           

        </div>

    </div>
  )
}

export default About