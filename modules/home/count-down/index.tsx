import Image from "next/image";
import Link from "next/link";
import React from "react";

const CountDown = () => {
  return (
    <section className="bg-white shadow-one py-8">
      <div className="container">
        <div className="lg:max-w-[660px] w-full mx-auto">
          <div className="grid grid-cols-3 gap-4 lg:gap-[60px]">
            <Link
              href="/study-abroad"
              className="flex flex-col lg:flex-row  items-center gap-5 lg:border-r group/countdown"
            >
              <div className="w-[40px] h-[40px]">
                <Image
                  src="/icons/countdown/country.png"
                  width={40}
                  height={40}
                  alt="Countries"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="group-hover/countdown:text-gradient transition-all">
                <h4 className="mb-0">100+</h4>
                <p className="mb-0">Countries</p>
              </div>
            </Link>
            <Link
              href="/universities"
              className="flex flex-col lg:flex-row  items-center gap-5 lg:border-r group/countdown"
            >
              <div className="w-[40px] h-[40px]">
                <Image
                  src="/icons/countdown/university.png"
                  width={40}
                  height={40}
                  alt="Universities"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="group-hover/countdown:text-gradient transition-all">
                <h4 className="mb-0">10K+</h4>
                <p className="mb-0">Universities</p>
              </div>
            </Link>
            <Link
              href="/top-courses"
              className="flex flex-col lg:flex-row  items-center gap-5 lg:border-r group/countdown"
            >
              <div className="w-[40px] h-[40px]">
                <Image
                  src="/icons/countdown/course.png"
                  width={40}
                  height={40}
                  alt="Courses"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="group-hover/countdown:text-gradient transition-all">
                <h4 className="mb-0">15K+</h4>
                <div>Courses</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
