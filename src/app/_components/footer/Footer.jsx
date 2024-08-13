import React, { Fragment } from "react";
import { Logo } from "../Navbar/logo/Logo";
import { ChevronDown, House, Mail } from "lucide-react";

function Footer() {
  const company = [
    "About us",
    "What we do",
    "Investors",
    "Press release",
    "Careers",
    "Price details",
  ];
  const Policies = [
    "Terms and Conditions",
    "Privacy Policy",
    "Cookie Policy",
    "Fraud Disclaimer",
  ];

  const Help = ["Restricted Terms", "Parcel size ", "Packaging Guide"];
  const Support = [
    "FAQ",
    "Customer Care",
    "Driver Term and Condition",
    "Packaging instruction",
  ];
  return (
    <footer className="bg-[#18181a] ">
      <div className="grid md:grid-cols-12 ">
        <div className="  md:col-span-1 "></div>
        <div className="col-span-10  py-5 ">
          <div className="px-5 md:px-0">
            <Logo light={true} />
          </div>

          <div className="grid grid-cols-12 px-5 md:px-0 ">
            <div className="md:col-span-4 col-span-12 text-white text-[12px]  pe-12 pt-4 leading-[21px]  ">
              <p>
                MyFastX is a leading logistics platform that provides
                hyper-local, on-demand delivery solutions for individuals and
                businesses. Whether you need a delivery boy for your shop or to
                ship items within the city, MyFastX is your trusted partner,
                making delivery effortless and convenient. With a mission to
                revolutionize logistics through innovation and technology,
                MyFastX is committed to providing seamless, end-to-end delivery
                solutions that exceed customer expectations.
              </p>
              <p className="flex items-center gap-2 mt-8">
                <House color="#63B178" />
                Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Mail color="#63B178" />
                <p>care@myfastx.com </p>
                <p>+91 8961310988</p>
              </div>
            </div>

            <div className=" md:col-span-8  col-span-12 mt-8 md:mt-0">
              <div className="grid grid-cols-12 ">
                <div className="md:col-span-3 col-span-12  flex flex-col gap-4 text-white text-[.9rem]">
                  <div className="py-4 md:py-0 border-b-2 md:border-0 border-white/75 mt-2 flex  justify-between">
                    {" "}
                    <p>Company</p>{" "}
                    <div className="md:hidden block">
                      <ChevronDown />
                    </div>{" "}
                  </div>

                  {company.map((data, index) => (
                    <Fragment key={index}>
                      <p className="hover:text-[#63B178]  hidden md:flex">
                        {data}
                      </p>
                    </Fragment>
                  ))}
                </div>
                <div className="md:col-span-3 col-span-12  flex flex-col gap-4 text-white text-[.9rem]">
                  <div className="py-4 md:py-0 border-b-2 md:border-0 border-white/75 mt-2 flex  justify-between">
                    {" "}
                    <p>Policies</p>{" "}
                    <div className="md:hidden block">
                      <ChevronDown />
                    </div>{" "}
                  </div>

                  {Policies.map((data, index) => (
                    <Fragment key={index}>
                      <p className="hover:text-[#63B178]  hidden md:flex">
                        {data}
                      </p>
                    </Fragment>
                  ))}
                </div>
                <div className="md:col-span-3 col-span-12  flex flex-col gap-4 text-white text-[.9rem]">
                  <div className="py-4 md:py-0 border-b-2 md:border-0 border-white/75 mt-2 flex  justify-between">
                    {" "}
                    <p>Help</p>{" "}
                    <div className="md:hidden block">
                      <ChevronDown />
                    </div>{" "}
                  </div>

                  {Help.map((data, index) => (
                    <Fragment key={index}>
                      <p className="hover:text-[#63B178] hidden md:flex">
                        {data}
                      </p>
                    </Fragment>
                  ))}
                </div>
                <div className="md:col-span-3 col-span-12  flex flex-col gap-4 text-white text-[.9rem]">
                  <div className="py-4 md:py-0 border-b-2 md:border-0 border-white/75 mt-2 flex  justify-between">
                    {" "}
                    <p>Support</p>{" "}
                    <div className="md:hidden block">
                      <ChevronDown />
                    </div>{" "}
                  </div>

                  {Support.map((data, index) => (
                    <Fragment key={index}>
                      <p className="hover:text-[#63B178  hidden md:flex">
                        {data}
                      </p>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-white py-8 md:border-t-2 border-t-0 border-b-2 border-white/75 w-full md:mt-16 px-5 md:px-0 ">
            <h1>Our Presence</h1>
            <div className="flex flex-wrap gap-4 items-center text-[12px] mt-1">
              <p>Delhi</p>
              <p>Noida</p>
              <p>Greater Noida</p>
              <p>Gaziabad</p>
              <p>Gurugram</p>
              <p>Faridabad</p>
              <p>Bahadurgarh</p>
              <p>Kolkata</p>
            </div>
          </div>
          <div className="mt-8 text-white flex flex-col md:flex-row items-center justify-center gap-4 text-[12px]">
            <p>
              &copy; 2024 MYFASTX TECHNOLOGIES PVT LTD. All Rights Reserved{" "}
            </p>{" "}
            <p> CIN: U52392UP2023PTC192260</p>
          </div>
        </div>
        <div className=" md:col-span-1 "></div>
      </div>
    </footer>
  );
}

export default Footer;
