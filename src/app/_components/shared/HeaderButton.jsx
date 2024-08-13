import { Poppins } from "next/font/google"
const poppins = Poppins({
  subsets :['latin'],
  weight : ['500']
})
export const HeaderButton = ({title}) => {
  return (
   <>
   <button className="bg-[#F5F5F4] px-4 border-l-[#63B178]  border-l-2 py-1">
    <p className={`${poppins.className} text-[12px]`}>{title}</p>
   </button>
   </>
  )
}