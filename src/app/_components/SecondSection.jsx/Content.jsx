import { Fragment } from "react";
import Image from "next/image";

export const Content = () => {
  const data = [
    {
      icon: "/person.png",
      title: "Register Online",
      description:
        "Fill out our easy online application form and pay the registration fee of Rs. 999",
    },
    {
      icon: "/verify.png",
      title: "Get Verified",
      description:
        "Complete the verification process to ensure you meet our standards.",
    },
    {
      icon: "/jeep.png",
      title: "Start Driving",
      description:
        "Once approved, start accepting delivery requests and earn money",
    },
  ];
  return (
    <>
      <div className="flex justify-around gap-2 items-start  flex-col h-full py-5 ps-5">
        {data.map((card, index) => (
          <Fragment key={index}>
            <div className="flex justify-between items-center w-full md:gap-[3rem] gap-6 bg-red-30  ">
              <Image
              className="bg-[#F8F8F8] p-2 rounded-full border-dashed border-2 border-[#63B178]"
              src={card.icon}
              height={50}
              width={50}
              alt="icons"
              />
              <div className="bg-[#F8F8F8] rounded-[9px] w-[70vw] px-4 py-2 lg:me-[8rem] md:me-[2rem] me-0 ">
                <h1 className="text-[#63B178] text-[12px]">{card.title} </h1>
                <p className="text-[12px]">{card.description}</p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
