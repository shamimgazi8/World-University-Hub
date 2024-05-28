"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminHeader = () => {
  const pathname = usePathname();

  const navData = [
    {
      title: "Dashboard",
      link: "/user/dashboard",
    },
    {
      title: "Universities",
      link: "/user/universities",
    },
    {
      title: "Courses",
      link: "/user/courses",
    },
    {
      title: "Profile",
      link: "/user/profile",
    },
    {
      title: "Blogs",
      link: "/blog",
    },
  ];
  return (
    <div className="bg-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <nav
          className="flex lg:justify-center overflow-x-auto"
          aria-label="Global"
        >
          {navData?.map((item, index) => {
            return (
              <Link
                key={index}
                href={`${item?.link}`}
                className="text-base text-center font-normal leading-4 text-black py-4 px-5 sm:flex-grow relative group/pagelink"
              >
                {item?.title}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] inline-block bg-gradient-to-r from-primary to-secondary w-0 group-hover/pagelink:visible group-hover/pagelink:w-full transition-all ${
                    item?.link == pathname ? "visible w-full" : "invisible"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default AdminHeader;
