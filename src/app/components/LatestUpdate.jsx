import Image from "next/image"
import img1 from "../assets/wall2.jpg"
import img2 from "../assets/wall3.jpg"
import img3 from "../assets/wallpaper.jpg"

const latestUpdates = [
    {
        img : img1,
        name: "Sample Post 4",
        date: "October 10, 2014",
    },
    {
        img : img2,
        name: "Sample Post 5",
        date: "October 10, 2014",
    },
    {
        img : img3,
        name: "Sample Post 6",
        date: "October 10, 2014",
    },
]

const LatestUpdate = () => {
  return (
   
        <div className="container mx-auto">

            <div className="flex xl:pl-0 xl:pr-0 flex-col min-h-[70vh] mt-10 mb-10 items-center justify-center gap-10 xl:gap-14 ">
                <h1 className="text-center text-2xl xl:text-4xl font-bold">LATEST UPDATES</h1>

                <div className="flex xl:flex-row lg:flex-row flex-col items-start justify-between gap-8">
                   {latestUpdates.map((item,index)=>{
                    return(
                        <div key={index} className="flex flex-col items-start  justify-start grayscale hover:grayscale-0 transition duration-300 ease-in   gap-2">
                        <Image
                        src={item.img}
                        alt={item.name}
                        width={370}
                        height={479}
                        className="h-[250px] lg:h-[200px] xl:h-[250px] rounded-3xl xl:rounded-lg  "
                        />
                        <h1 className="text-2xl font-semibold ">{item.name}</h1>
                        <p className="text-gray-500">{item.date}</p>
                        </div>
                    )
                   })}
                </div>
            </div>

        </div>
    
  )
}

export default LatestUpdate