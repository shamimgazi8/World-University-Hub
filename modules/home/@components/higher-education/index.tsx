"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const HigherEducation = () => {
  return (
    <section className="">
      <div className="container pt-[50px] z-20 relative">
        <div className="max-w-[1045px] mb-[30px]">
          <h3>
            <span className="text-gradient block">Strengthening</span> Worldwide
            Higher Education
          </h3>
          <p>
            Our range of offerings, including robust data-driven insights,
            strategic consultancy assistance, impactful events, and tailored
            hiring solutions, empowers individuals within higher education to
            make astute, well-informed decisions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] z-20 relative">
          <Link
            href="/top-universities"
            className="flex flex-col border-[1px] border-[#E7E7E7] p-6 group hover:shadow-[0_1px_3px_0px_rgba(0,0,0,0.10)] transition-all rounded-md"
          >
            <div>
              <h5 className="mb-2 group-hover:text-secondary transition-all">
                Ranking
              </h5>
              <p className="text-[#7A868B]">
                The most extensive university rankings globally
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="w-[32px] h-[32px]">
                <Image
                  src="/icons/ranking.png"
                  width={32}
                  height={32}
                  alt="hero-one"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <HiArrowRight className="text-lg group-hover:text-secondary transition-all" />
            </div>
          </Link>
          <Link
            href="/blog"
            className="flex flex-col border-[1px] border-[#E7E7E7] p-6 group hover:shadow-[0_1px_3px_0px_rgba(0,0,0,0.10)] transition-all rounded-md"
          >
            <div>
              <h5 className="mb-2 group-hover:text-secondary transition-all ">
                News
              </h5>
              <p className="text-[#7A868B]">
                Daily news and analysis for global higher education
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="w-[32px] h-[32px]">
                <Image
                  src="/icons/news.png"
                  width={32}
                  height={32}
                  alt="hero-one"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <HiArrowRight className="text-lg group-hover:text-secondary transition-all" />
            </div>
          </Link>
          <Link
            href="#"
            className="flex flex-col border-[1px] border-[#E7E7E7] p-6 group hover:shadow-[0_1px_3px_0px_rgba(0,0,0,0.10)] transition-all rounded-md"
          >
            <div>
              <h5 className="mb-2 group-hover:text-secondary transition-all">
                Resources
              </h5>
              <p className="text-[#7A868B]">
                WUH Campus consolidates daily insights and guidance for
                academics and university personnel.
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="w-[32px] h-[32px]">
                <Image
                  src="/icons/resources.png"
                  width={32}
                  height={32}
                  alt="hero-one"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <HiArrowRight className="text-lg group-hover:text-secondary transition-all" />
            </div>
          </Link>
          <Link
            href="/jobs"
            className=" flex flex-col border-[1px] border-[#E7E7E7] p-6 group hover:shadow-[0_1px_3px_0px_rgba(0,0,0,0.10)] transition-all rounded-md"
          >
            <div>
              <h5 className="mb-2 group-hover:text-secondary transition-all">
                Jobs
              </h5>
              <p className="text-[#7A868B]">
                Higher education’s global job board
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="w-[32px] h-[32px]">
                <Image
                  src="/icons/jobs.png"
                  width={32}
                  height={32}
                  alt="hero-one"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <HiArrowRight className="text-lg group-hover:text-secondary transition-all" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HigherEducation;
