import { Navbar } from "./_components/Navbar/page";

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-12 ">
      <div className=" col-span-1  "></div>
      <div className="col-span-10">

      <Navbar/>

      </div>
      <div className=" col-span-1 "></div>
    </div>
    </>
  );
}
