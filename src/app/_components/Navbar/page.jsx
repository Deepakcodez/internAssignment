import { Button } from "@/components/ui/button"
import { Logo } from "./logo/Logo"
import { Menu } from "lucide-react"

export const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center w-full py-5 px-5 md:px-0">
      <div className="flex md:hidden"> <Menu /></div>
        <Logo light={false} />
        <div className="flex gap-[.56rem] ">
            <Button className="hidden md:flex" variant="custom" ><h1 className="  px-[38px]">Sign up</h1></Button>
            <Button className="hidden md:flex" variant="custom" ><h1 className=" hidden md:flex px-[38px]">Login</h1></Button>
        </div>
    </div>
    </>
  )
}