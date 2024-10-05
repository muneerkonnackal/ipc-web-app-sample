"use client"
import { Button } from "@/components/ui/button"
import CountUp from "react-countup";

const stats = [
    {
        num: 30,
        text: "Total No. of States",
        btn: "View States"
    },
    {
        num: 20,
        text: "Total No. of Regions",
        btn: "View Regions"
    },
    {
        num: 30,
        text: "Total No. of Mission Centres",
        btn: "View Mission Centers"
    },
]



const Stats = () => {


  return (
    <section className="bg-mybgimg ">
       <div className="bg-blackOverlay">
            <div className="container mx-auto flex items-center justify-center xl:max-w-[80vw]" >
                <div className="flex xl:flex-row  lg:flex-row flex-col items-center  justify-center  h-auto pt-10 py-10  xl:pt-0 xl:py-0 xl:h-[50vh] w-full gap-10 ">
                    {stats.map((item,index)=>{
                        return(
                            <div key={index} className="flex flex-col flex-1 items-center justify-center gap-5  ">
                                <div className="flex flex-col items-center justify-center text-white bg-white/20 h-[180px] gap-2 
                                 xl:w-[350px] w-[320px] lg:w-[250px]  pt-14 pb-14 pl-10 pr-10 rounded ">
                                    <CountUp
                                        className="text-6xl font-semibold"
                                        end={item.num}
                                        duration={5}
                                        delay={1}
                                    />
                                    
                                    <h2 className={`${item.text.length>15 && "whitespace-normal"} text-2xl text-center font-semibold`}>{item.text}</h2>
                                </div>
                                <div>
                                    <Button className="bg-transparent text-white text-lg border min-w-[250px]  xl:min-w-[250px] border-white rounded " >{item.btn}</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
       </div>
    </section>
  )
}

export default Stats