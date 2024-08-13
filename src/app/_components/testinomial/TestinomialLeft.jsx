import Image from "next/image";
import { HeaderButton } from "../shared/HeaderButton";
import { HeaderTitle } from "../shared/HeaderTitle";

export const TestinomialLeft = () => {
  return (
    <>
      <div className="md:pt-12 md:pb-12 pb-3 ">
        <div>
          <HeaderButton title={"What our partner says"} />
        </div>

        <div className="">
          <HeaderTitle title={"Testimonials"} />
        </div>

        <div className="text-[1rem] pe-20 md:flex gap-8 flex-col mt-8 hidden  ">
          <p>
            At MyFastX, our commitment to excellence is reflected in the
            feedback from our valued customers. Here&apos;s what they have to say
            about their experiences with our quick and reliable delivery and
            logistics services
          </p>
          <Image src={"/scene.png"} alt="scene" width={400} height={400} />
        </div>
      </div>
    </>
  );
};
