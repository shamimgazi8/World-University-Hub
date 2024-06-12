import Search from "@/modules/search";
import { FiChevronsRight } from "react-icons/fi";
import Link from "next/link";
import Marquee from "../../marquee";

const HomeHeroTwo = () => {
  return (
    <>
      <section className="relative z-0 lg:pt-[50px] py-[20px]  grid  wrapper">
        <div className=" absolute w-[100%] top-[-100px] ">
          <Marquee text="WORLD UNIVERSITY HUB" />
        </div>
        <div className="container relative  h-full z-10">
          <div className="flex flex-col   gap-2 md:max-w-[836px] lg:max-w-[900px] w-full mx-auto h-full z-10">
            <div className="flex flex-col justify-center items-center w-full ">
              <div className=" text-center font-semibold">
                <p className="text-p2 text-[#7A868B] mb-0">
                  DISCOVER. RESEARCH. DECIDE
                </p>
              </div>
              <h1 className="text-center mb-9">
                <span className="text-gradient">Find Universities</span> Abroad{" "}
                <br />
                that are Right for You
              </h1>
              <Search />
              <div className="lg:mt-[26px]  flex justify-center gap-4">
                <div className="flex items- justify-end items-center gap-3 lg:w-auto w-[160px]">
                  <div className="lg:font-medium lg:text-[16px] text-[12px]  lg:text-heading">
                    Set Insight into
                  </div>
                  <FiChevronsRight className="text-primary text-xl mt-[2px]" />
                </div>
                <div className="flex items-center lg:gap-[26px] gap-3">
                  <Link
                    href="/study-abroad"
                    className="lg:font-medium lg:text-[16px] text-[12px]  lg:text-heading"
                  >
                    100+ Country
                  </Link>
                  <Link
                    href="/universities"
                    className="lg:font-medium lg:text-[16px] text-[12px] lg:text-heading"
                  >
                    10K+ University
                  </Link>
                  <Link
                    href="/top-courses"
                    className="lg:font-medium lg:text-[16px] text-[12px] lg:text-heading"
                  >
                    15K+ Course
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeroTwo;
