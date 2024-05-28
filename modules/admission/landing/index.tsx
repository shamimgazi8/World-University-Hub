"use client";
import React, { Fragment, useState } from "react";
import AdmissionHero from "../@components/admission-hero";
import Link from "next/link";
import Image from "next/image";

const AdmissionLanding = () => {
  const [pageSection, setPageSection] = useState("overview");
  const scrollToSection = (sectionId: any, margin: any) => {
    const section: any = document.getElementById(sectionId);

    if (section) {
      const offsetTop = section.offsetTop - margin;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <Fragment>
      <AdmissionHero />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_975px] gap-7 py-7">
            <div className="self-start bg-header sticky top-0 z-[100]">
              <div className="bg-grey px-3 py-5">
                <ul className="flex flex-col gap-4">
                  <li>
                    <button
                      onClick={() => {
                        setPageSection("overview");
                        scrollToSection("overview", 100);
                      }}
                      className={`hover:text-gradient pl-3 border-l-[3px] border-transparent ${
                        pageSection === "overview"
                          ? " text-gradient border-l-[3px] !border-primary"
                          : ""
                      }`}
                    >
                      Overview
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setPageSection("ranking");
                        scrollToSection("ranking", 80);
                      }}
                      className={`hover:text-gradient pl-3 border-l-[3px] border-transparent ${
                        pageSection === "ranking"
                          ? " text-gradient border-l-[3px] !border-primary"
                          : ""
                      }`}
                    >
                      Ranking
                    </button>
                  </li>
                  <li className="hover:text-gradient">
                    <button
                      onClick={() => {
                        setPageSection("courses");
                        scrollToSection("courses", 80);
                      }}
                      className={`hover:text-gradient pl-3 border-l-[3px] border-transparent ${
                        pageSection === "courses"
                          ? " text-gradient border-l-[3px] !border-primary"
                          : ""
                      }`}
                    >
                      Courses
                    </button>
                  </li>
                  <li className="hover:text-gradient">
                    <button
                      onClick={() => {
                        setPageSection("contact");
                        scrollToSection("contact", 80);
                      }}
                      className={`hover:text-gradient pl-3 border-l-[3px] border-transparent ${
                        pageSection === "contact"
                          ? " text-gradient border-l-[3px] !border-primary"
                          : ""
                      }`}
                    >
                      Contact
                    </button>
                  </li>
                  <li className="hover:text-gradient">
                    <button
                      onClick={() => {
                        setPageSection("gallery");
                        scrollToSection("gallery", 80);
                      }}
                      className={`hover:text-gradient pl-3 border-l-[3px] border-transparent ${
                        pageSection === "gallery"
                          ? " text-gradient border-l-[3px] !border-primary"
                          : ""
                      }`}
                    >
                      Gallery
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right */}
            <div className="">
              <div className="pb-8">
                <Link href={`#`}>
                  <h4 className="mb-0 inline-block hover:text-gradient pb-7">
                    Lorem ipsum dolor sit amet consectetur. Cursus nunc
                    malesuada.
                  </h4>
                </Link>
                <p className="text-p1 font-semibold text-body">About Test</p>
                <p>
                  The International English Language Testing System (IELTS) is
                  the most popular English language test. It measures the
                  language proficiency of people who want to study or work in
                  locations where English is used to communicate. Some major
                  countries that accept IELTS are the UK, USA, Canada, New
                  Zealand, and Australia. The test assesses one’s listening,
                  reading, writing, and speaking abilities in less than three
                  hours. There are two types of IELTS: Academic and General
                  Training. Listening and Speaking are the same for both tests,
                  but the subject matter of the Reading and Writing sections
                  differs depending on which test you take. The Listening,
                  Reading and Writing sections of all IELTS tests are completed
                  on the same day, with no breaks between them. The total test
                  time is 2 hours and 45 minutes.
                </p>
                <p className="text-p1 font-semibold text-body">
                  Why take the test?
                </p>
                <p>
                  Being one of the prime exams for testing English proficiency,
                  the IELTS exam is recognized by more than 11,000 universities
                  globally. With over 1000 test locations in more than 140
                  countries, it is accessible for most people. The IELTS test
                  isn’t just essential for pursuing work or studying in foreign
                  countries and helps students hone their English speaking and
                  writing skills. Good command of English helps visa granting
                  authorities ensure that one can easily communicate with the
                  locals and won’t face major communication barriers later.
                </p>
              </div>
              <div>
                <Link href={`#`}>
                  <h4 className="mb-0 inline-block hover:text-gradient pb-7">
                    Lorem ipsum dolor sit amet consectetur. Proin magna vel a
                    tellus.
                  </h4>
                </Link>
                <p className="text-p1 font-semibold text-body">Eligibility</p>
                <div className="flex gap-7 items-center border p-2">
                  <div className="shrink-0">
                    <Image
                      src={"/temp/gratu-icon.png"}
                      alt={"india"}
                      width={50}
                      height={50}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <p className="mb-0 text-black">
                    Must have a valid passport and must be 16 years of age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AdmissionLanding;
