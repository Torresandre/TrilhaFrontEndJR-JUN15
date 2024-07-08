import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem } from "@/components/ui/menubar";
import { Menu } from "@radix-ui/react-menubar";


export default function Header(){
  return(
    <div className="flex flex-col items-center justify-items-center">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/73555173?v=4" alt="Perfil GitHub"/>
      </Avatar>
      <Menubar>
        <Menu>
          <MenubarContent>
          <MenubarItem>home</MenubarItem>
          </MenubarContent>
          
        </Menu>
        
      </Menubar>
    </div>

  )
}