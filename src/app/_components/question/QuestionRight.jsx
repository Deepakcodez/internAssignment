import { Fragment } from "react";
import { HeaderButton } from "../shared/HeaderButton";
import { HeaderTitle } from "../shared/HeaderTitle";
import { ChevronRight } from "lucide-react";

export const QuestionRight = () => {
  const data = [
    "What type of vehicles are eligible?",
    "How do I get paid ?",
    "What areas does MyFastX operate in?",
    "What type of vehicles are eligible?",
    "How do I get paid?",
    "What areas does MyFastX operate in?",
  ];
  return (
    <>
      <div className="md:mt-[10rem]">
        <HeaderButton title={"Frequently Asked Questions"} />
        <HeaderTitle title={"Got Questions? We’ve Got Answers!"} />

        <div className="bg-[#F8F8F8]  rounded-[12px] p-4 flex flex-col gap-2 my-12  ">
          {data.map((ques, index) => (
            <Fragment key={index}>
              <div className="flex items-center justify-between border-b-[1px] py-1">
                <p className="text-[12px]">{ques}</p>
                <ChevronRight size={15} />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
