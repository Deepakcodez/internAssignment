import Image from "next/image";
import { Fragment } from "react";

export const HomeCard = () => {
  const data = [
    {
      icon: "/dollar.png",
      header: "Reliable Income",
      description: "Earn a steady income with consistent delivery requests.",
    },
    {
      icon: "/calender.png",
      header: "Flexible Schedule",
      description: "Choose your working hours and balance your personal life.",
    },
    {
      icon: "/support.png",
      header: "Support",
      description:
        "Access our dedicated support team whenever you need assistance.",
    },
    {
      icon: "/stock.png",
      header: "Growth opportuninies",
      description:
        "Advance your career with regular training and development programs.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4  w-full gap-4">
        {data?.map((card, index) => (
          <Fragment key={index}>
            <div className="col-span-1  flex flex-col gap-1 bg-[#F2FAF5]  rounded-[13px]  font-poppins p-4 ">
              <Image
              src={card.icon}
              alt="icon"
              height={50}
              width={50}
              />
              <h1 className="text-[#63B178] text-[12px] font-[500] leading-[18px]">{card.header}</h1>
              <h1 className=" text-[10px] leading-[15px] font-[500] ">{card.description}</h1>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
