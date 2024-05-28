import TestimonialCard from "@/modules/@common/testimonial-card";
import Link from "next/link";
import React, { Fragment } from "react";

const successData = [
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.  We assist you in every step while preparing this documents.  We assist you in every step while preparing this documents.  We assist you in every step while preparing this documents.  We assist you in every step while preparing this documents.  We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
];

const StudentSuccess = () => {
  return (
    <Fragment>
      <div className="bg-gradient-to-b from-primary-light to-secondary-light ">
        <div className="container">
          <div className="py-[40px] md:py-[60px] lg:py-[80px]">
            <h3 className="mb-0 text-center pb-5">Student Success</h3>
            <div className="flex justify-center">
              <ul className="flex items-center gap-1">
                <li>
                  <Link href="/ ">
                    <span className="text-xl text-body hover:text-gradient">
                      Home
                    </span>
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <span className="text-xl text-body">Student Success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Success Card  */}
      <div className="container">
        <div className=" max-w-[1086px] m-auto pt-10 pb-[80px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {successData?.map((item: any, i: any) => {
              return (
                <TestimonialCard
                  classes={{
                    root: "border hover:shadow-one hover:border-none cursor-pointer",
                  }}
                  data={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StudentSuccess;
