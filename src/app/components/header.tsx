import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import { FaGithub, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";




export default function Header(){
  return(
    <div className="flex flex-col items-center justify-center h-96 w-screen bg-neutral-950">
      <Avatar className="border-red-600 border-solid border-2">
        <AvatarImage src="https://avatars.githubusercontent.com/u/73555173?v=4" alt="Perfil GitHub"/>
      </Avatar>
      <h1 className="lg:text-7xl text-white  pt-6 sm: text-center text-3xl">André Torres</h1>
      <Separator className="lg:w-2/5 bg-red-600 sm: w-3/4" />
      <h2 className="lg:text-xl text-red-600 sm: text-base ">Desenvolvedor Front-End</h2>

      <section className="flex flex-row gap-2 justify-between items-center p-4">
      <a href="https://github.com/Torresandre" className="hover:text-red-600 hover:backdrop-blur-0">
      <FaGithub className="w-8 h-8  text-white hover:text-red-600" />
      </a>
      <a href="https://www.linkedin.com/in/andr%C3%A9-torres-9b1a65207/" className="hover:text-red-600">
      <FaLinkedinIn  className="w-8 h-8  text-white hover:text-red-600 hover:backdrop-blur-0" />
      </a>
      <a href="https://www.instagram.com/andretorresengm/" className="hover:text-red-600 ">
      <FaInstagramSquare  className="w-8 h-8  text-white hover:text-red-600 hover:backdrop-blur-0" />
      </a>
      </section>
     
    </div>

  )
}