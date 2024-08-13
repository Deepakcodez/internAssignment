import { Rubik } from "next/font/google"

const rubik = Rubik({
    subsets :['latin'], 
    weight : ['500']
})
export const HeaderTitle = ({title}) => {
  return (
   <>
   <div className="relative mt-4">
    <h1 className={`${rubik.className} text-[32px] `} >{title}</h1>
    <div className="text-[#63B178] w-[10rem] border-b-[.2rem] border-b-[#63B178] h-1 absolute bottom-[.2rem]"></div>
   </div>
   </>
  )
}