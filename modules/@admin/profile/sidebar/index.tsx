"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileSidebar = () => {
  const pathname = usePathname();

  const navData = [
    {
      title: "Personal Information",
      link: "/user/profile/personal-information",
    },
    {
      title: "Academic Background",
      link: "/user/profile/academic-background",
    },
    {
      title: "Study Preference",
      link: "/user/profile/study-preference",
    },

    {
      title: "Account Settings",
      link: "/user/profile/account-settings",
    },
  ];
  return (
    <div className="border-r-2 border-slate-400">
      {navData?.map((item, index) => {
        return (
          <p key={index}>
            <Link
              className={`${pathname === item?.link ? "text-gradient" : ""}`}
              href={item?.link}
            >
              {item?.title}
            </Link>
          </p>
        );
      })}
    </div>
  );
};

export default ProfileSidebar;
