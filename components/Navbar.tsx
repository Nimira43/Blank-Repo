import Image from "next/image";
import Link from "next/link";
import logo from "../img/Icon.png"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    return (
        <div className="bg-primary dark:bg-slate-700 text-[#ff4500] py-2 px-5 flex justify-between">
            <Link href='/'>
                <Image src={logo} alt='NimiraTech UI' width={40} />   
            </Link>
            
            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none'>
                    <Avatar>
                    <AvatarImage src='../img/batman.png' alt='nick' />
                    <AvatarFallback className='text-[#ff4500] bg-[#eee]'>NR</AvatarFallback>
                </Avatar>    
                </DropdownMenuTrigger>
                <DropdownMenuContent className='text-[#ff4500] bg-[#eee]'>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Inbox</DropdownMenuItem>
                    <DropdownMenuItem>Workflow</DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/auth'>
                            Logout
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
 
export default Navbar;