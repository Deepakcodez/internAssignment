import { TestinomialLeft } from "./TestinomialLeft";
import TestinomialCard from "./TestinomialRight";

export const Testinomial = () => {
  return (
    <>
      <div className="grid grid-cols-12 ">
        <div className="md:col-span-6 col-span-12  px-5 md:px-0">
          <TestinomialLeft />
        </div>
        <div className="md:col-span-6 col-span-12  flex justify-center items-center">
          <TestinomialCard />
        </div>
      </div>
    </>
  );
};
