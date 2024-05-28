"use client";
import Image from "next/image";
import Link from "next/link";
import { GrEdit } from "react-icons/gr";

import { useProfileQuery } from "@/appstore/user/auth/auth-api";
import AdminCourses from "../courses";
import AdminUniversities from "../universities";

const Dashboard = () => {
  const { data: profileInfo } = useProfileQuery({});

  return (
    <div>
      <div className="bg-gradient-to-b from-[#EEFEFF] via-[#EEFEFF] to-[#F4F1FF] flex  justify-center">
        <div className="container">
          <div className="lg:max-w-screen-lg mx-auto sm:grid grid-cols-[115px_1fr] gap-5 w-full py-10">
            <div className="relative image_border w-[115px] h-[115px] flex items-center justify-center cursor-pointer">
              <Image
                src={
                  profileInfo?.ProfileImage
                    ? profileInfo?.ProfileImage
                    : "/misc/avatar-lg.png"
                }
                alt="profile"
                className="rounded-full z-10"
                width={110}
                height={110}
              />
              {/* <div className="flex justify-center items-center absolute bottom-0 right-0 w-[35px] h-[35px] rounded-full bg-white z-20 border border-black">
                <GrEdit />
              </div> */}
            </div>
            <div className="grid md:grid-cols-[1fr_auto] gap-5 items-start">
              <div>
                <p className="font-semibold mb-2">
                  Hi, {profileInfo?.firstName} {profileInfo?.lastName}
                </p>
                <p className="mb-2">{profileInfo?.email}</p>
              </div>

              <Link
                href="/user/profile"
                className="btn btn-primary-outline rounded"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="lg:max-w-screen-lg mx-auto sm:grid  grid-cols-4 gap-5 py-8">
          <div className="px-4 py-7 rounded-md border-[#B5B5C3] border-[0.5px] text-center">
            <p className="mb-0 text-[#B5B5C3] font-medium">
              Shortlisted Universities
            </p>
            <p className="mb-0 font-bold text-2xl">5</p>
          </div>
          <div className="mt-4 sm:mt-0 px-4 py-7 rounded-md border-[#B5B5C3] border-[0.5px] text-center">
            <p className="mb-0 text-[#B5B5C3] font-medium">
              Recommended Universities
            </p>
            <p className="mb-0 font-bold text-2xl">10</p>
          </div>
          <div className="mt-4 sm:mt-0 px-4 py-7 rounded-md border-[#B5B5C3] border-[0.5px] text-center">
            <p className="mb-0 text-[#B5B5C3] font-medium">
              Shortlisted Courses
            </p>
            <p className="mb-0 font-bold text-2xl">13</p>
          </div>
          <div className="mt-4 sm:mt-0 px-4 py-7 rounded-md border-[#B5B5C3] border-[0.5px] text-center">
            <p className="mb-0 text-[#B5B5C3] font-medium">
              Recommended Courses
            </p>
            <p className="mb-0 font-bold text-2xl">7</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="max-w-screen-xl mx-auto">
          <AdminUniversities dashboard={true} />
          <AdminCourses dashboard={true} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
