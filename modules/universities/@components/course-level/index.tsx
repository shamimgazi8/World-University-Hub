"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useWindowDimensions from "@/hooks/use-window-dimensions";

interface propTypes {
  data: any;
  isShowActive?: boolean;
  isCoursePage?: boolean;
}

const CourseLevel = ({
  isShowActive = false,
  isCoursePage = false,
  data,
}: propTypes) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromRoute = searchParams.get("section");

  const [pageSection, setPageSection] = useState(fromRoute || "overview");

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

  const courseLevelData = [
    {
      title: "Bachelor",
      slug: "Bachelor",
    },
    {
      title: "Masters",
      slug: "Masters",
    },
    {
      title: "MBA",
      slug: "MBA",
    },
    {
      title: "PHD",
      slug: "PHD",
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
      <div className="px-3  rounded-md sticky border-b-[1px] lg:overflow-hidden overflow-scroll">
        <ul className="flex  gap-4">
          {courseLevelData
            ?.filter((d) => d.title !== "")
            .map((item, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={() => {
                      setPageSection(item?.slug);
                      scrollToSection(item?.slug, 80);
                    }}
                    className={`hover:text-gradient pb-2 border-b-[1.5px] border-transparent py-[14px] px-[10px] font-medium ${
                      pageSection == item?.slug && isShowActive
                        ? " text-gradient border-b-[1.5px] !border-primary py-[14px] px-[10px]"
                        : ""
                    }`}
                  >
                    {/* <span>{item?.title}</span> */}
                    <span>{item?.title}</span>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {isMobile ? (
        // <Collapse
        //   className="sidebar_collapse"
        //   expandIconPosition={"end"}
        //   items={[
        //     {
        //       key: "1",
        //       label: capitalizeFirstLetter(pageSection),
        //       children: <Side />,
        //     },
        //   ]}
        // />
        <Side />
      ) : (
        <Side />
      )}
    </div>
  );
};

export default CourseLevel;
