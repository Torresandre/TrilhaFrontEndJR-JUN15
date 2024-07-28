
import { Card } from "@/components/ui/card"
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiTypescript } from "react-icons/si";




export default function Footer(){
  return(
    <div className="flex p-4  items-center justify-center h-24 w-screen bg-neutral-950">
      <section className="flex flex-row gap-2 justify-between items-center p-4">
      <Card className=" p-2 border-red-600 bg-transparent hover:border-red-950">
       <FaReact  className="w-8 h-8  text-white hover:text-red-600 hover:backdrop-blur-0" />
       

      </Card>
       <Card className=" p-2 border-red-600 bg-transparent hover:border-red-950">
       <RiTailwindCssFill className="w-8 h-8  text-white hover:text-red-600 hover:backdrop-blur-0" />
       

      </Card>
      
      <Card className=" p-2 border-red-600 bg-transparent hover:border-red-950">
      <SiTypescript className="w-8 h-8  text-white hover:text-red-600 hover:backdrop-blur-0" />

      </Card>
      <Card className=" p-2 border-red-600 bg-transparent hover:border-red-950">
      <SiShadcnui className="w-8 h-8  text-white hover:text-red-600 hover:backdrop-blur-0" />

      </Card>
     
      </section>
      
    </div>

  )
}