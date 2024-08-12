"use client";
import Lottie from "lottie-react";
import truckAnimation from "../../../../public/truck.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HomeCard } from "./Card";

export const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 pt-6">
        <div className="col-span-12 md:col-span-4  bg-[#f8f8f8] rounded-[13px]">
          <div className=" p-10 px-12">
            <Lottie animationData={truckAnimation} loop={true} />
          </div>

          {/* text section */}
          <div className="text-black  px-4 lg:px-14 pb-4 mt-4">
            <p className=" text-center">
              Welcome to MyFast
              <span className="text-[#63B178]">X Partner</span>
            </p>
            <p className="text-[#63B178] font-poppins font-semibold text-[16px] leading-[21px] text-center">
              {" "}
              Quick & Reliable Delivery and Logistics <br /> Solution
            </p>
            <p className="font-poppins text-[13px] leading-[21px] text-center text-[#5D5D5D]">
              At MyFastX, we are revolutionizing the delivery and logistics
              industry by providing swift, dependable services to our clients.
              Our mission is to ensure every package reaches its destination on
              time, every time.
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 flex flex-col justify-between gap-2 ">
          <div className="bg-[#f8f8f8]  rounded-[13px]">
            {/* image section */}
            <Image className="h-[10rem] md:h-auto" src={"/image.png"} alt="grid" height={1000} width={1000} />
            <div className="px-4 pe-12">
              <p className="text-[#63B178] font-poppins font-semibold text-[12px] leading-[18px] pt-5">
                Drive Your Success with MyFastX
              </p>
              <h1 className="font-poppins font-semibold text-[20px] leading-[30px] pt-2">
                Join Us as a Partner Driver
              </h1>
              <p className="font-poppins text-[12px] leading-[18px] text-left text-[#5D5D5D]">
                Are you a vehicle owner looking for new opportunities? Join
                MyFastX today and become part of a dynamic network of drivers.
                With us, you’ll enjoy flexible work hours, competitive earnings,
                and the satisfaction of delivering smiles across the city.
              </p>
              <Button className="my-6" varient="custom">
                Register now for just Rs. 999!
              </Button>
            </div>
          </div>

          <HomeCard/>
        </div>
      </div>
    </>
  );
};
