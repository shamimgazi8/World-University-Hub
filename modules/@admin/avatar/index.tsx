"use client";
import { useLogoutQuery, useProfileQuery } from "@/appstore/user/auth/auth-api";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { TbLayoutDashboard } from "react-icons/tb";

export const ProfileDropdown = ({ profileData }: any) => {
  const navigate = useRouter();

  const [skip, setSkip] = useState(true);
  const { data, isLoading: logoutLoading } = useLogoutQuery({}, { skip });
  const { data: profileInfo } = useProfileQuery({});

  const signOut = () => {
    // setSkip(false);
    Cookies.remove("userToken");
    Cookies.remove("refreshToken");
    navigate.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Link href="/settings/profile">
          <div className="flex items-center gap-3 bg-[f5f6fa]">
            <div className="flex justify-center items-center font-bold w-[40px] h-[40px] rounded-full">
              <Image
                src={`${
                  profileInfo?.ProfileImage
                    ? profileInfo?.ProfileImage
                    : "/misc/avatar-lg.png"
                }`}
                alt="user"
                className="w-full h-full rounded-full object-cover"
                width={200}
                height={200}
              />
            </div>
            <div>
              <span className="font-bold block">
                {profileInfo?.firstName} {profileInfo?.lastName}
              </span>
              <span className=" block">{profileInfo?.email}</span>
            </div>
          </div>
        </Link>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link href={`/user/dashboard`}>
          <button>
            <div className="flex items-center gap-2 font-semibold">
              <TbLayoutDashboard size={17} className="text-xl" />
              <span className="text-[13px]">Dashboard</span>
            </div>
          </button>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link href={`/user/profile/account-settings`}>
          <button>
            <div className="flex items-center gap-2 font-semibold">
              <FiSettings size={17} className="text-xl" />
              <span className="text-[13px]">Account Setting</span>
            </div>
          </button>
        </Link>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <button onClick={signOut} className="block w-full">
          <div className="flex items-center gap-2 font-semibold">
            <FiLogOut size={17} className="text-xl" />
            <span className="text-[13px]">SignOut</span>
          </div>
        </button>
      ),
      key: "4",
    },
  ];
  return (
    <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer border">
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="bottomRight"
        overlayClassName="profile_dropdown"
      >
        <a onClick={(e) => e.preventDefault()}>
          <img
            src={`${
              profileData?.picture
                ? profileData?.picture
                : "/misc/avatar-lg.png"
            }`}
            alt="user"
            className="w-full h-full rounded-full object-cover"
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default ProfileDropdown;
