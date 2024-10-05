"use client";
import Image from "next/image";
import React from "react";
import heroimg from "../assets/2024logo.webp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="xl:h-[80vh] md:min-h-[50vh]  xl:bg-black/60 xl:flex items-center justify-center">
      <div className="  min-h-[70vh] lg:min-h-[70vh]  gap-7 w-full flex flex-col lg:grid lg:grid-cols-5 xl:grid xl:grid-cols-5    bg-[radial-gradient(circle,_rgba(4,25,129,1)_0%,_rgba(0,16,100,1)_31%)]">
        <motion.div className="flex justify-center lg:justify-end lg:items-center lg:mt-[15px]   xl:justify-end mt-16 xl:mt-0 items-center xl:col-span-2 lg:col-span-2"
        initial={{ x: -100, scale: 0.8, opacity: 0 }} 
        animate={{ x: 0, scale: 1, opacity: 1 }} 
        // transition={{ duration: 0.5, ease: "easeInOut" }} 
        transition={{
            duration: 1.2, 
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          <Image
            src={heroimg}
            alt="heroing"
            className="xl:h-[300px] xl:w-[300px] lg:h-[250px] lg:w-[250px] h-[150px] w-[150px]"
          />
        </motion.div>
        <div
          className="flex flex-col items-center justify-center xl:pl-20
             xl:col-span-3 lg:col-span-3
            "
        >
          <motion.div
            className="flex flex-col gap-3 xl:gap-5 items-center justify-center lg:items-start xl:items-start leading-6"
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            // transition={{ duration: 0.5, ease: "easeInOut" }} 
            transition={{
                duration: 1.2, 
                ease: [0.6, -0.05, 0.01, 0.99], 
              }}
          >
            <h2 className="text-[20px]  xl:text-[25px] tracking-tight font-semibold text-white">
              India Pentacostal Church of God
            </h2>
            {/* <motion.div
                    style={{ transformOrigin: "center" }}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}> */}
            <h1 className="text-customYellow text-[40px] items-center xl:text-[70px] lg:text-[50px] lg:text-left font-bold text-center xl:text-left leading-tight xl:leading-tight">
              CENTENNIAL CONVENTION
            </h1>
            {/* </motion.div> */}
            <h2 className="text-[18px] xl:text-[22px] tracking-tight font-semibold text-white xl:text-left text-center xl:p-0">
              14-21 January 2024, Hebronpuram,
              <span className="block xl:hidden mt-[-15px]">
                <br />
              </span>
              Kumbanad
            </h2>
            <Button className="bg-red-600 text-white rounded-lg   w-[120px] mt-3">
              Know More
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
