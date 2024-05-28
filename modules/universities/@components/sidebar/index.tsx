"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useWindowDimensions from "@/hooks/use-window-dimensions";
import { capitalizeFirstLetter } from "@/helpers/utils";
import { Collapse } from "antd";

import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

interface propTypes {
  data: any;
  isShowActive?: boolean;
  isCoursePage?: boolean;
}

const Sidebar = ({
  isShowActive = false,
  isCoursePage = false,
  data,
}: propTypes) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromRoute = searchParams.get("section");

  const [pageSection, setPageSection] = useState("overview");

  const scrollToSection = (sectionId: any, margin: any) => {
    const section: any = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - margin;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const [isMount, setIsMount] = useState(true);
  useEffect(() => {
    if (isMount) {
      setIsMount(false);
      return;
    }
    router.push(`/universities/${data?.slug}?section=${pageSection}`, {
      scroll: false,
    });
  }, [pageSection]);

  const secData = [
    {
      title: "Overview",
      slug: "overview",
    },
    {
      title: "Courses",
      slug: "courses",
    },
    {
      title: "Admission Requirement",
      slug: "admission-req",
    },
    {
      title: "Fees",
      slug: "fees",
    },
    {
      title: "Ranking",
      slug: "ranking",
    },

    {
      title: "Contact",
      slug: "contact",
    },
    // {
    //   title: "Campus Locations",
    //   slug: "location",
    // },
    // {
    //   title: "Media",
    //   slug: "media",
    // },
  ];
  const courseSecData = [
    {
      title: "Back to Overview",
      slug: "overview",
    },

    {
      title: "Courses",
      slug: "courses",
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll(".uni-section");
    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            setPageSection(item.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  const Side = () => {
    return (
      <div className="px-3  rounded-md sticky  lg:overflow-hidden ">
        {isCoursePage ? (
          <ul className=" flex  gap-4">
            {courseSecData
              ?.filter((d) => d.title !== "")
              .map((item, i) => {
                return (
                  <li key={i}>
                    <button
                      onClick={() => {
                        if (item.slug == "courses") {
                          router.push(`/universities/${data?.slug}/courses`);
                          return;
                        }
                        if (item.slug == "overview") {
                          router.push(`/universities/${data?.slug}`);
                          return;
                        }
                        setPageSection(item?.slug);
                        scrollToSection(item?.slug, 80);
                      }}
                      className={`hover:text-gradient pb-2 border-b-[1.5px] border-transparent py-[14px] px-[10px] font-medium  ${
                        pageSection == item?.slug && isShowActive
                          ? " text-gradient border-b-[1.5px] !border-primary py-[14px] px-[10px]"
                          : ""
                      }`}
                    >
                      <span>{item?.title}</span>
                    </button>
                  </li>
                );
              })}
          </ul>
        ) : (
          <ul className="flex lg:flex-row flex-col  ">
            {secData
              ?.filter((d) => d.title !== "")
              .map((item, i) => {
                return (
                  <li key={i}>
                    <button
                      onClick={() => {
                        if (item.slug == "courses") {
                          router.push(`/universities/${data?.slug}/courses`);
                          return;
                        }
                        setPageSection(item?.slug);
                        scrollToSection(item?.slug, 80);
                      }}
                      className={`hover:text-gradient pb-2 border-b-[1.5px] border-transparent py-[14px] px-[10px] font-medium ${
                        pageSection == item?.slug && isShowActive
                          ? " text-gradient border-b-[1.5px] !border-primary py-[14px] px-[10px]"
                          : ""
                      }`}
                    >
                      <span>{item?.title}</span>
                    </button>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div>
      {isMobile ? (
        <Collapse
          className="sidebar_collapse"
          expandIconPosition={"end"}
          items={[
            {
              key: "1",
              label: capitalizeFirstLetter(pageSection),
              children: (
                <div className=" w-full">
                  <Side />
                  <Link href={`/top-universities`}>
                    <button className=" flex justify-center items-center gap-[6px] group lg:m-0 m-4 ">
                      <IoIosArrowRoundBack className=" group-hover:scale-150 transition-all" />{" "}
                      Back to University Page
                    </button>
                  </Link>
                </div>
              ),
            },
          ]}
        />
      ) : (
        <Side />
      )}
    </div>
  );
};

export default Sidebar;
