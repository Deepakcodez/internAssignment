import { Hero } from "./_components/hero/Hero";
import { Navbar } from "./_components/Navbar/page";

export default function Home() {
  return (
    <>
    <div className="grid md:grid-cols-12 ">
      <div className="  md:col-span-1  "></div>
      <div className="col-span-10">

      <Navbar/>
       <Hero/>
      </div>
      <div className=" md:col-span-1 "></div>
    </div>
    </>
  );
}
