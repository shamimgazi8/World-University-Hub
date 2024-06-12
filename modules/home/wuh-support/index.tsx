import Image from "next/image";
import Link from "next/link";
import React from "react";

const WUHSupport = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[752px] mb-[30px]">
          <h3 className="mb-2">
            How <span className="text-gradient">WUH</span> Can Support You
          </h3>
          <p>
            We're here to support you through all stages of the university
            journey; whether its researching institutions, navigating admissions
            or submitting your application.
          </p>
        </div>
        <div className="flex flex-col gap-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.565fr_1fr] items-center lg:gap-[60px] gap-[30px]">
            <div>
              <Image
                src="/temp/right-destination.png"
                width={752}
                height={588}
                alt="hero-one"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h4>Find the Right Destinations </h4>
              <p>
                you can find important information about your potential study
                abroad destinations. Learn about the requirements, application
                period, language, culture and student life of different
                countries.
              </p>
              <div>
                <Link
                  href="/study-abroad"
                  className="text-p1 text-gradient font-medium border-b border-b-[2px] border-primary pb-1"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.565fr_1fr] items-center lg:gap-[60px] gap-[30px]">
            <div>
              <Image
                src="/temp/uni-ranking.png"
                width={752}
                height={588}
                alt="hero-one"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h4>World University Ranking </h4>
              <p>
                Filter World University rankings by region or subject to compare
                university performance in factors that matter to you including
                reputation, employability and sustainability.
              </p>
              <div>
                <Link
                  href="/top-universities"
                  className="text-p1 text-gradient font-medium border-b border-b-[2px] border-primary pb-1"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.565fr_1fr] items-center lg:gap-[60px] gap-[30px] ">
            <div>
              <Image
                src="/temp/right-course.png"
                width={752}
                height={588}
                alt="hero-one"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h4>Find the right course for you </h4>
              <p>
                Our course search tool features thousands of programmers and
                uses your personal study preferences to find the right course
                for you.
              </p>
              <div>
                <Link
                  href="#"
                  className="text-p1 text-gradient font-medium  border-b-[2px] border-primary pb-1"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.565fr_1fr] items-center lg:gap-[60px] gap-[30px]">
            <div>
              <Image
                src="/temp/advice.png"
                width={752}
                height={588}
                alt="hero-one"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h4>Need more advice on where to study?</h4>
              <p>
                Learn more about student experiences at universities in the
                world’s most incredible cities and get advice on visas, finding
                accommodation and fun things to do once you’ve arrived.
              </p>
              <div>
                <Link
                  href="#"
                  className="text-p1 text-gradient font-medium border-b border-b-[2px] border-primary pb-1"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WUHSupport;
