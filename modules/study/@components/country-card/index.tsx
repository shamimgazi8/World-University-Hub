"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Popover } from "antd";
import { log } from "util";

const CountryCard = ({ data, regionSlug, classes }: any) => {
  const countrySlug = data?.slug;
  const countryLink = `/study-abroad/${regionSlug}/${countrySlug}`;

  const dataLinks = [
    {
      title: "Destination Guide",
      link: countryLink,
    },
    {
      title: "Top Universities",
      link: `/${countrySlug}-top-universities`,
    },
    {
      title: "Top Courses",
      link: `/${countrySlug}-top-courses`,
    },
  ];

  return (
    <Popover
      content={
        <div className="text-left rounded w-full min-w-[150px]">
          <ul className="flex flex-col gap-[5px] text-sm">
            {dataLinks?.map((d, i) => {
              return (
                <li key={i}>
                  <Link
                    href={d.link || "#"}
                    className="font-medium hover:text-gradient inline-flex flex-col group/item transition-all"
                  >
                    <span>{d.title}</span>
                    <span className="w-0 h-[2px] inline-block invisible bg-gradient-to-r from-primary to-secondary group-hover/item:visible group-hover/item:w-full transition-all"></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      }
      trigger="hover"
      placement="bottom"
      arrow={false}
      overlayClassName="country_card_popover"
    >
      <div
        className={`relative group cursor-pointer ${
          classes?.root ? classes.root : ""
        }`}
      >
        <Link
          href={`/study-abroad/${regionSlug}/${data?.slug}`}
          className="group/contrytitle"
        >
          <div className="relative mb-3">
            <Image
              src={data?.featureImage || "/misc/placeholder-country-sm.webp"}
              alt={data?.name}
              width={400}
              height={300}
              className="rounded-lg h-[180px] w-full object-cover"
            />
            {/* <div className="absolute group-hover:bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.7)] left-0 top-0 w-full h-full rounded"></div> */}
          </div>
          <div className="font-medium text-lg text-center">
            <span className="group-hover/contrytitle:text-gradient line-clamp-1">
              {data?.name}
            </span>
          </div>
        </Link>

        {/* <div className="absolute top-[98%] z-[-1] group-hover:top-[100%] group-hover:z-[100] text-left bg-white rounded p-2 w-full invisible group-hover:visible transition-all">
        <ul className="flex flex-col gap-[5px] mt-2 text-sm">
          <li>
            <Link
              href={`/study-abroad/${regionSlug}/${item?.slug}`}
              className="font-medium hover:text-gradient inline-flex flex-col group/item"
            >
              <span>Destination Guide</span>
              <span className="w-full h-[2px] inline-block invisible bg-gradient-to-r from-primary to-secondary group-hover/item:visible"></span>
            </Link>
          </li>
          <li>
            <Link
              href={`${item?.slug}-top-universities`}
              className="font-medium hover:text-gradient inline-flex flex-col group/item"
            >
              <span>Top Universities</span>
              <span className="w-full h-[2px] inline-block invisible bg-gradient-to-r from-primary to-secondary group-hover/item:visible"></span>
            </Link>
          </li>
          <li>
            <Link
              href={`${item?.slug}-top-courses`}
              className="font-medium hover:text-gradient inline-flex flex-col group/item"
            >
              <span> Top Courses</span>
              <span className="w-full h-[2px] inline-block invisible bg-gradient-to-r from-primary to-secondary group-hover/item:visible"></span>
            </Link>
          </li>
        </ul>
      </div> */}
      </div>
    </Popover>
  );
};

export default CountryCard;
