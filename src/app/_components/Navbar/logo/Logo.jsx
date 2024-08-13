import Image from "next/image"
import Link from "next/link"

export const Logo = ({light}) => {
  return (
    <>
    <Link href={'/'} className={`${light? "text-white" : "text-black"} flex items-center`}>
        <p className="font-poppins font-semibold text-[14px] leading-[21px]">MyFast<span className="text-[#63B178]">X</span></p>
        <Image
        src={'https://myfastx.com/assets/logo-BHDObzAp.svg'}
        alt="logoImage"
        height={20}
        width={20}
        />
        <span className="font-poppins font-semibold text-[10px] leading-[21px]">Partner</span>
    </Link>
    </>
  )
}