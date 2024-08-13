import Footer from "./_components/footer/Footer";
import { Hero } from "./_components/hero/Hero";
import { Navbar } from "./_components/Navbar/page";
import { Question } from "./_components/question/Question";
import Register from "./_components/register/register";
import { SecondSect } from "./_components/SecondSection.jsx/SecondSect";
import { Testinomial } from "./_components/testinomial/Testinomial";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-12 ">
        <div className="  md:col-span-1 "></div>
        <div className="col-span-10  ">
          <Navbar />
          <Hero />
          <SecondSect />
          <Testinomial/>
          <Question/>
        </div>
        <div className=" md:col-span-1 "></div>
      </div>
      <Register />
      <Footer />
    </>
  );
}
