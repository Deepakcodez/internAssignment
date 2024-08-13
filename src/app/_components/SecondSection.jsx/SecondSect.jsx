"use client";
import Lottie from "lottie-react";
import carAnimation from "../../../../public/car.json";
import { HeaderButton } from "../shared/HeaderButton"
import { HeaderTitle } from "../shared/HeaderTitle";
import { Content } from "./Content";

export const SecondSect = () => {
  return (
    <>
    <div className="my-16 px-5 md:px-0">
        <HeaderButton title={"How It Works"}/>
        <HeaderTitle title={"Simple Steps to Get Started"}/>
        

        <div className="grid grid-cols-2 ">
            <div className=" col-span-2 md:col-span-1 ">
            <Content/>
            </div>
            <div className=" md:col-span-1 hidden md:flex justify-center items-center p-6">
            <Lottie animationData={carAnimation} loop={true} />
            </div>
        </div>
    </div>
    </>
  )
}