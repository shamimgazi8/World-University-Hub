"use client";
import { capitalizeFirstLetterOfEveryWord } from "@/helpers/utils";
import useWindowDimensions from "@/hooks/use-window-dimensions";
import { Collapse } from "antd";
import React, { useState } from "react";
import { RiArchiveDrawerLine } from "react-icons/ri";

interface propTypes {
  data?: any;
}

const DetailAside = ({ data }: propTypes) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;
  const [pageSection, setPageSection] = useState("key-info");

  const scrollToSection = (sectionId: any, margin: any) => {
    const section: any = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - margin;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const dataAside = [
    {
      title: "Overview",
      slug: "key-info",
    },
    {
      title: "Admission Requirement",
      slug: "admission-req",
    },
    {
      title: "Tuition Fee",
      slug: "tuition-fee",
    },
    {
      title: "Rankings",
      slug: "ranking",
    },
    {
      title: "More Programs",
      slug: "more-programs",
    },
  ];

  const Aside = () => {
    return (
      <div className="rounded-md">
        <ul className="flex  gap-4">
          {dataAside
            ?.filter((d) => d.title !== "")
            .map((item, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={() => {
                      setPageSection(item?.slug);
                      scrollToSection(item?.slug, 150);
                    }}
                    className={`hover:text-gradient pb-3 border-b-[1.5px] border-transparent ${
                      pageSection == item?.slug
                        ? " text-gradient border-b-[1.5px] !border-primary"
                        : ""
                    }`}
                  >
                    {item?.title}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    );
  };
  return (
    <div className="">
      {isMobile ? (
        <Collapse
          defaultActiveKey={1}
          className="sidebar_collapse"
          expandIconPosition={"end"}
          items={[
            {
              key: "1",
              label: <RiArchiveDrawerLine />,
              children: <Aside />,
            },
          ]}
        />
      ) : (
        <Aside />
      )}
    </div>
  );
};

export default DetailAside;
