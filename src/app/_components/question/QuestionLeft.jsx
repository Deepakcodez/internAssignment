import { Button } from "@/components/ui/button"
import { HeaderButton } from "../shared/HeaderButton"
import { HeaderTitle } from "../shared/HeaderTitle"
import Image from "next/image"

export const QuestionLeft = () => {
  return (
   <>
   <div className="py-12">
     <HeaderButton title={"Join the MyFastX Community Today!"}/>
     <HeaderTitle title={"Ready to Get Started?"}/>
     <div className="flex flex-col gap-4 mt-8 pe-12 ">
        <p>Don't miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just Rs.999 and start driving your way to success with MyFastX!</p>
        <div className="my-3">
        <Button varient="custom">Register Now</Button>
        </div>
        <p>For more information <br /> Contact us at:</p>
        <div  className="flex items-center gap-2">
            <Image 
            className="bg-[#63B178] p-2 rounded-full"
            src={"/phone.png"} alt="phone" width={35} height={35}/>
            <p>+91-XXXXX XXXXX</p>
        </div>
        <div  className="flex items-center gap-2">
            <Image 
            className="bg-[#63B178] p-2 rounded-full"
            src={"/message.png"} alt="phone" width={35} height={35}/>
            <p>support@myfastx.com</p>
        </div>
     </div>
   </div>
   </>
  )
}